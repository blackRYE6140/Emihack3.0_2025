import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import PropTypes from "prop-types";
import '../../../assets/css/GreenLand.css'

function LuxuryShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-green-500/[0.15]",
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.8, rotate: rotate - 15 },
        visible: {
          opacity: 1,
          scale: 1,
          rotate: rotate,
          transition: { duration: 1.5, delay, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={`
            absolute inset-0 rounded-full
            bg-gradient-to-r to-transparent
            ${gradient}
            backdrop-blur-[4px] border-2 border-green-500/[0.3]
            shadow-[0_8px_32px_0_rgba(34,197,94,0.3)]
            after:absolute after:inset-0 after:rounded-full
            after:bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.4),transparent_70%)]
          `}
        />
      </motion.div>
    </motion.div>
  );
}

LuxuryShape.propTypes = {
  className: PropTypes.string,
  delay: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  rotate: PropTypes.number,
  gradient: PropTypes.string,
};

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-green-300 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroGeometricLuxury({ title1 = "Innovative", title2 = "Sustainability" }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 * i,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900"
    >
      <div className="absolute inset-0 bg-[url('/luxury-pattern.png')] opacity-5" />

      <FloatingParticles />

      <div className="absolute inset-0 overflow-hidden">
        <LuxuryShape
          delay={0.2}
          width={600}
          height={140}
          rotate={12}
          gradient="from-green-500/[0.2]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <LuxuryShape
          delay={0.4}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-emerald-500/[0.2]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <LuxuryShape
          delay={0.3}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-teal-500/[0.2]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <LuxuryShape
          delay={0.5}
          width={200}
          height={60}
          rotate={20}
          gradient="from-green-400/[0.2]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUpVariants} custom={0}>
            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium mb-8">
              Transforming the Future
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            custom={1}
            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-200 to-teal-300">
              {title1}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-emerald-400">
              {title2}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            custom={2}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Empowering businesses to lead the way in sustainable innovation and eco-friendly practices.
          </motion.p>

          <motion.div variants={fadeUpVariants} custom={3}>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Discover Our Vision
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

HeroGeometricLuxury.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
};
