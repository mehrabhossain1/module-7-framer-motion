import { motion } from 'framer-motion';

const parent = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const child = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: { opacity: 1, scale: 1 },
};

const Lesson2 = () => {
  return (
    <div>
      <h1>Stagger Animation</h1>
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          delayChildren: 2,
          staggerChildren: 1,
        }}
      >
        <motion.div className="size-10" variants={child}>
          M
        </motion.div>
        <motion.div className="size-10" variants={child}>
          E
        </motion.div>
        <motion.div className="size-10 " variants={child}>
          H
        </motion.div>
        <motion.div className="size-10 " variants={child}>
          R
        </motion.div>
        <motion.div className="size-10 " variants={child}>
          A
        </motion.div>
        <motion.div className="size-10" variants={child}>
          B
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Lesson2;
