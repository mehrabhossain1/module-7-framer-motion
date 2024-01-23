import { motion } from 'framer-motion';

// scropping effect
// const parent = {
//   hidden: { x: 0, y: 0, opacity: 0 },
//   visible: {
//     y: [0, 300, -300, 0],
//     x: [0, 300, -300, 0],
//     opacity: 1,
//     transition: {
//       ease: 'linear',
//       duration: 5,
//       opacity: {
//         repeat: Infinity,
//         duration: 0.2,
//       },
//     },
//   },
// };

const parent = {
  hidden: { x: 0, y: 0, opacity: 0 },
  visible: {
    y: [0, 300, -300, 0],
    x: [0, 300, -300, 0],
    rotate: [0, 300, -300, 0],
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 5,
      repeat: Infinity,
      opacity: {
        duration: 0.5,
      },
      rotate: {
        delay: 1,
        repeat: Infinity,
      },
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
