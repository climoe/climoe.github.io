import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import "./styles.scss"
import { ViteSection } from '../../section/ViteSection';

const cards = [1, 2, 3, 4];

const LayoutCards = () => {
  
    const [selectedId, setSelectedId] = useState(null);
    const containerRefs = useRef([]);

    return (
        <div className="layout-cards">
            {cards.map((card, i) => (
                <motion.div 
                    className={selectedId === card ? 'opened-card' : 'card' }
                    key={i}
                    layout
                    onClick={()=> selectedId === card ? setSelectedId(null) : setSelectedId(card)}
                    ref={el => containerRefs.current[card] = el}
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