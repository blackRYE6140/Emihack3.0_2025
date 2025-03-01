import { useState, useEffect } from "react";
<<<<<<< HEAD
import { toast, Toaster } from "sonner"; // Importation de 'sonner' pour les notifications
=======
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
import ProgressBar from "./ProgressBar/ProgressBar";
import ModalChart from "./ModalChart";
import "../../../assets/css/Quiz.css";
import QuizzandResponse from "./QuizChoice";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber"; 
import { PerspectiveCamera } from "@react-three/drei"; // Pour afficher le modèle 3D
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ModelDoctor } from "../../ModelsThreeJS/Doctor";
=======
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e

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
<<<<<<< HEAD
    totalAnswered: 0,
    yesCount: 0, // Nombre de réponses "Oui"
  });

  // Charger les questions
=======
    score: 0,
    totalAnswered: 0,
  });

>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
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
<<<<<<< HEAD
    } else if (correct >= 5) {
      setNiveau("Intermédiaire");
    } else {
      setNiveau("Débutant");
=======
    } else if (0 < correct < 5) {
      setNiveau("Débutant");
    } else if (5 < correct < 9) {
      setNiveau("Intermédiaire");
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
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
<<<<<<< HEAD
=======
      score: isCorrect ? prevRep.score + 1 : prevRep.score,
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
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

<<<<<<< HEAD
  // Composant pour charger le modèle 3D
  const DoctorModel = () => {
    const { scene } = useGLTF("/models/doctor.glb"); // Charge le modèle 3D du docteur
    return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
  };

  return (
    <div>
      <Toaster />
      <div className="globalContain">
        <div className="quiz-left">
          <Canvas style={{ width: "100%", height: "40rem", display: "inline-block" }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <ModelDoctor position={[2, 0, 0]} scale={[0.4, 0.4, 0.4]} />
            <OrbitControls enablePan enableZoom={false} />
          </Canvas>
        </div>

        <div className="quiz-container">
          <div className="quiz-right">
            <div className="containerQuiz">
              <ProgressBar total={rep.totalAnswered} score={correctAnswers} />
              <h2>La question est : {rep.question}</h2>
              <div className="containQuestion">
                {rep.options.map((option, index) => (
                  <motion.p
                    key={index}
                    className="answerOptions"
                    onClick={() => handleAnswer(option)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      delay: index * 0.3,
                      duration: 0.5,
                      ease: "easeOut",
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
        </div>
      </div>
=======
  return (
    <div>
      <div className="containerQuiz">
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
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
    </div>
  );
};

export default Quiz;
