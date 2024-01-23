import { motion } from 'framer-motion';

const parent = {
  hidden: { opacity: 0, scale: 0.9, x: 0 },
  visible: {
    x: 300,
    opacity: 0.6,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

const Lesson5 = () => {
  return (
    <div className="border border-red-500 size-[500px] flex justify-center items-center">
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
};

export default Lesson5;
