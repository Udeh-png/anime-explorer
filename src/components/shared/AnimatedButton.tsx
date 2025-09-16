import { AnimatePresence, motion } from "motion/react";

export const AnimatedButton = ({
  condition,
  icon1,
  icon2,
  styleOnTrue,
  styleOnFalse,
}: {
  condition: boolean;
  icon1: React.ReactNode;
  icon2?: React.ReactNode;
  styleOnTrue?: string;
  styleOnFalse?: string;
}) => {
  return (
    <AnimatePresence>
      {condition ? (
        <motion.section
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          exit={{
            scale: 0,
          }}
          className={`${styleOnTrue} flex justify-center items-center w-full h-full rounded-[inherit]`}
        >
          {icon1}
        </motion.section>
      ) : (
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          exit={{
            scale: 0,
          }}
          className={`${styleOnFalse} flex justify-center items-center w-full h-full rounded-[inherit]`}
        >
          {icon2 ? icon2 : icon1}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
