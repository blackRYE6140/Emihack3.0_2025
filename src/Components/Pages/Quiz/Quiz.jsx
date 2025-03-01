import { useState, useEffect } from "react";
import { toast , Toaster } from "sonner"; // Importation de 'sonner' pour les notifications
import ProgressBar from "./ProgressBar/ProgressBar";
import ModalChart from "./ModalChart";
import "../../../assets/css/Quiz.css";
import QuizzandResponse from "./QuizChoice";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber"; 
import { PerspectiveCamera } from "@react-three/drei"; // Pour afficher le modèle 3D
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ModelDoctor } from "../../ModelsThreeJS/Doctor";

const Quiz = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rep, setRep] = useState({
    questionStocked: [],
    currentQuestionIndex: 0,
    question: "",
    options: [],
    totalAnswered: 0,
    yesCount: 0, // Nombre de réponses "Oui"
  });

  // Charger les 10 questions
  const loadQuestions = () => {
    const allQuestions = QuizzandResponse[0].quiz; // Utilisation des 10 questions

    setRep({
      questionStocked: allQuestions,
      currentQuestionIndex: 0,
      question: allQuestions[0].question,
      options: allQuestions[0].options,
      totalAnswered: 0,
      yesCount: 0,
    });
  };

  // Vérifier si l'utilisateur est "atteint"
  const checkIfInfected = (yesCount) => {
    return yesCount >= 7 ? "Atteint du virus" : "Non atteint du virus";
  };

  const handleAnswer = (option) => {
    const isYes = option === "Oui"; // Vérifie si la réponse est "Oui"

    setRep((prevRep) => ({
      ...prevRep,
      totalAnswered: prevRep.totalAnswered + 1,
      yesCount: isYes ? prevRep.yesCount + 1 : prevRep.yesCount,
    }));

    setTimeout(() => nextQuestion(), 200);
  };

  const nextQuestion = () => {
    if (rep.currentQuestionIndex < rep.questionStocked.length - 1) {
      setRep((prevRep) => ({
        ...prevRep,
        currentQuestionIndex: prevRep.currentQuestionIndex + 1,
        question: rep.questionStocked[prevRep.currentQuestionIndex + 1].question,
        options: rep.questionStocked[prevRep.currentQuestionIndex + 1].options,
      }));
      toast.success("D'accord")
    } else {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    loadQuestions(); // Charger les 10 questions au montage
  }, []);

  // Composant pour charger le modèle 3D
  const DoctorModel = () => {
    const { scene } = useGLTF("/models/doctor.glb"); // Charge le modèle 3D du docteur

    return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
  };

  return (
    <div className="globalContain">
      <Toaster/>
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
          <ProgressBar totalAnswered={rep.totalAnswered} yesCount={rep.yesCount} />
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
          correctAnswers={rep.yesCount} // Passez 'yesCount' ici
          incorrectAnswers={rep.totalAnswered - rep.yesCount} // Calcul des 'Non' (totalAnswered - yesCount)
          level={checkIfInfected(rep.yesCount)} />

        </div>
      </div>
    </div>
  );
};

export default Quiz;
