import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import "./styles.scss"
import { ViteSection } from '../../section/vite-section';

const cards = [1, 2, 3, 4];

const LayoutCards = () => {
  
    const [selectedId, setSelectedId] = useState(null);
    const containerRefs = useRef<HTMLDivElement>(null);

    return (
        <div className="layout-cards">
            {cards.map((card, i) => (
                <motion.div 
                    className={selectedId === card ? 'opened-card' : 'card' }
                    key={i}
                    layout
                    onClick={()=> selectedId === card ? setSelectedId(null) : setSelectedId(card)}
                    ref={containerRefs.current[card]}
                >
                {selectedId === card && 
                (<div>
                    <ViteSection title={"Layout Card"}></ViteSection>
                </div>)
                }
                </motion.div>
            ))}
            <motion.div 
                className="dim-layer" 
                animate={{ opacity: selectedId ? .3 : 0 }}
            />
        </div>
    )
}

export default LayoutCards;