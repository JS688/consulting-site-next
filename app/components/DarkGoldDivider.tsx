import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function DarkGoldDivider({ className = "", ...rest }: Props) {
  return (
    <div className={className} {...rest}>
      <motion.div
        className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
        initial={{ opacity: 0, scaleX: 0.4 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.7 }}
      />
    </div>
  );
}
