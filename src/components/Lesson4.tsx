import { motion } from 'framer-motion';
import { useRef } from 'react';

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 0.6,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  hover: {
    opacity: 1,
  },
  tap: {
    scale: 1.1,
    boxShadow: '0px 10px 10px #000',
  },
};

const Lesson4 = () => {
  const parentRef = useRef(null);

  return (
    <div className=" flex items-center justify-center">
      <div
        ref={parentRef}
        className="border border-red-500 size-[200px] flex justify-center items-center"
      >
        <motion.div
          className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          variants={parent}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          drag
          dragConstraints={parentRef}
          whileTap="tap"
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson4;
