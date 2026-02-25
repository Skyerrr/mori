import { motion } from "motion/react";

interface EditorialMarginsProps {
  showCropMarks?: boolean;
}

export function EditorialMargins({ showCropMarks = true }: EditorialMarginsProps) {
  return (
    <>
      {/* Crop Marks - Top Right */}
      {showCropMarks && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="hidden md:block absolute right-8 top-8"
            style={{
              width: '20px',
              height: '20px',
              borderTop: '1px solid #111827',
              borderRight: '1px solid #111827',
              opacity: 0.1
            }}
          />

          {/* Crop Marks - Bottom Right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="hidden md:block absolute right-8 bottom-8"
            style={{
              width: '20px',
              height: '20px',
              borderBottom: '1px solid #111827',
              borderRight: '1px solid #111827',
              opacity: 0.1
            }}
          />
        </>
      )}
    </>
  );
}