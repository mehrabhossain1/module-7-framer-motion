import { motion, useCycle } from 'framer-motion';

const Lesson7 = () => {
  const boxAnimations = [
    { x: 0, y: 0, opacity: 1, rotate: 0 },
    { x: 100, y: 100, opacity: 0.5, rotate: 45 },
    { x: -100, y: 100, opacity: 0.25, rotate: 90 },
    { x: -100, y: -100, opacity: 0.05, rotate: -180 },
  ];

  const [animate, cycle] = useCycle(...boxAnimations);

  return (
    <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center">
      <motion.div
        animate={animate}
        onTap={() => cycle()}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
      ></motion.div>
    </div>
  );
};

export default Lesson7;
