import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import ModalChart from "./ModalChart";
import "../../../assets/css/Quiz.css";
import QuizzandResponse from "./QuizChoice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Quiz = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [niveau, setNiveau] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rep, setRep] = useState({
    levelNames: ["debutant", "intermediaire", "professionnel"],
    quizLevel: 0,
    questionStocked: [],
    currentQuestionIndex: 0,
    question: "",
    options: [],
    answer: "",
    score: 0,
    totalAnswered: 0,
  });

  const loadQuestions = (level) => {
    const fetchedQuestions = QuizzandResponse[0].quiz[level] || [];
    if (fetchedQuestions.length > 0) {
      setRep((prevRep) => ({
        ...prevRep,
        questionStocked: fetchedQuestions,
        currentQuestionIndex: 0,
        question: fetchedQuestions[0].question,
        options: fetchedQuestions[0].options,
        answer: fetchedQuestions[0].answer,
      }));
    } else {
      console.log("Questions manquantes!");
    }
  };

  const levelGrade = (correct) => {
    if (correct > 10) {
      setNiveau("Professionnel");
    } else if (0 < correct < 5) {
      setNiveau("Débutant");
    } else if (5 < correct < 9) {
      setNiveau("Intermédiaire");
    }
  };

  const handleAnswer = (option) => {
    const isCorrect = option === rep.answer;

    if (isCorrect) {
      toast.success("Bonne réponse ! 🎉", { position: "bottom-right" });
      setCorrectAnswers((prev) => prev + 1);
    } else {
      toast.error("Mauvaise réponse ! ❌", { position: "bottom-right" });
      setIncorrectAnswers((prev) => prev + 1);
    }

    setRep((prevRep) => ({
      ...prevRep,
      score: isCorrect ? prevRep.score + 1 : prevRep.score,
      totalAnswered: prevRep.totalAnswered + 1,
    }));

    nextQuestion();
  };

  const nextQuestion = () => {
    setRep((prevRep) => {
      const nextIndex = prevRep.currentQuestionIndex + 1;
      const totalQuestions = prevRep.questionStocked.length;

      if (nextIndex < totalQuestions) {
        return {
          ...prevRep,
          currentQuestionIndex: nextIndex,
          question: prevRep.questionStocked[nextIndex].question,
          options: prevRep.questionStocked[nextIndex].options,
          answer: prevRep.questionStocked[nextIndex].answer,
        };
      } else if (prevRep.quizLevel < rep.levelNames.length - 1) {
        return {
          ...prevRep,
          quizLevel: prevRep.quizLevel + 1,
        };
      } else {
        toast.info("Quiz terminé ! 🎉", { position: "bottom-left" });
        setIsModalOpen(true);
        return prevRep;
      }
    });
  };

  useEffect(() => {
    loadQuestions(rep.levelNames[rep.quizLevel]);
    levelGrade(correctAnswers);
  }, [rep.quizLevel]);

  return (
    <div>
      <div className="container">
        <ProgressBar total={rep.totalAnswered} score={rep.score} />
        <h2>La question est : {rep.question}</h2>
        <div className="containQuestion">
          {rep.options.map((option, index) => (
            <motion.p
              key={index}
              className="answerOptions"
              onClick={() => handleAnswer(option)}
              initial={{ opacity: 0, y: 20 }} // Position initiale en bas avec une opacité de 0
              animate={{ opacity: 1, y: 0 }} 
              whileHover={{ scale: 1.05 }} // Transition vers la position finale
              transition={{
                delay: index * 0.3, // Décalage pour chaque option
                duration: 0.5, // Durée de l'animation
                ease: "easeOut", // Type d'animation
              }}
            >
              {option}
            </motion.p>
          ))}
        </div>
      </div>
      <ModalChart
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
        level={niveau}
      />
    </div>
  );
};

export default Quiz;
