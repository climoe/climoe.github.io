import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import classes from "./styles.scss";
import { ViteSection } from "@/components/section/vite-section";

const cards = [1, 2, 3, 4];

const LayoutCards = () => {
  const [selectedId, setSelectedId] = useState(null);
  const containerRefs = useRef<HTMLDivElement>(null);

  return (
    <div className={classes["layout-cards"]}>
      {cards.map((card, i) => (
        <motion.div
          className={
            selectedId === card ? classes["opened-card"] : classes["card"]
          }
          key={i}
          layout
          onClick={() =>
            selectedId === card ? setSelectedId(null) : setSelectedId(card)
          }
          ref={containerRefs.current[card]}
        >
          {selectedId === card && (
            <div>
              <ViteSection title={"Layout Card"}></ViteSection>
            </div>
          )}
        </motion.div>
      ))}
      <motion.div
        className={classes["dim-layer"]}
        animate={{ opacity: selectedId ? 0.3 : 0 }}
      />
    </div>
  );
};

export default LayoutCards;
