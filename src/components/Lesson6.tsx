import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

const Lesson6 = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);

  // const handleClick = () => {
  //   controls.start({ x: 200, rotate: 90 });
  // };

  // const handleToggle = () => {
  //   setToggle(!toggle);

  //   if (toggle) {
  //     controls.start({ x: 200 });
  //   } else {
  //     controls.start({ x: -200 });
  //   }
  // };
  useEffect(() => {
    controls.start((i) => ({ x: 200, transition: { delay: i * 0.5 } }));
  }, []);

  return (
    <div
      onMouseEnter={() => controls.stop()}
      className="border border-red-500 size-[500px] flex flex-col justify-center items-center"
    >
      {/* <button onClick={handleToggle} className="bg-green-500 px-2 py-3 mb-10">
        Toggle
      </button> */}
      <motion.div
        animate={controls}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        custom={1}
      ></motion.div>
      <motion.div
        animate={controls}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        custom={2}
      ></motion.div>
      <motion.div
        animate={controls}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        custom={3}
      ></motion.div>
      {/* <motion.div
        animate={controls}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        custom={1}
      ></motion.div>
      <motion.div
        animate={controls}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        custom={3}
      ></motion.div> */}
    </div>
  );
};

export default Lesson6;
