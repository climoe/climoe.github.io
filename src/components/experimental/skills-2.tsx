import React, { useContext, useState } from "react";
import { AnimatePresence, motion, Transition } from "framer-motion";
import { frontMatter as metadata } from "@/public/content/technology/known-technology.mdx";
import { XIcon } from "@phosphor-icons/react";

import LanguageContext from "@/components/context/language-context";
import { SkillRating } from "@/components/skills/skill-rating";

import "@/components/experimental/clippath/styles.scss";

const Skills2 = () => {
  const [selectedSquare, setSelectedSquare] = useState(null);
  const languageContext = useContext(LanguageContext);
  const { legend, skills } =
    languageContext.language === "en"
      ? metadata.language.en
      : metadata.language.pl;
  const categories = skills.reduce(
    (acc, curr) => acc.concat(curr.category),
    []
  );

  const wrapperVariants = {
    initial: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      transition: { duration: 0.4 },
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 0.4, staggerChildren: 0.1 },
    },
    exit: {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      transition: { duration: 0.4 },
    },
  };

  const definedCategories = (categories) => {
    return categories.map((category, index) => {
      return (
        <SkillCategory
          key={index}
          category={category}
          selectingHandler={() => setSelectedSquare(category)}
        />
      );
    });
  };

  const skillsInCategory = (skills) => {
    return skills.map((skill, index) => {
      return (
        <Skills
          items={skill.items}
          key={index}
          category={skills.category}
          legend={legend}
          closeHandler={() => setSelectedSquare(null)}
        />
      );
    });
  };

  return (
    <div className={`cp-transition cp-transition__container`}>
      <AnimatePresence initial={false}>
        {selectedSquare ? (
          <motion.div
            className={`card card_wrapper`}
            key="card"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {skillsInCategory(categories)}
          </motion.div>
        ) : (
          <motion.div
            className="cp-transition_squares-wrapper"
            key="squares"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {definedCategories(categories)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Skills = ({ items, category, legend, closeHandler }) => {
  return (
    <div>
      <div className="card_header">
        <h2>{category}</h2>
        <button onClick={closeHandler}>
          <XIcon size={"4rem"} />
          ""
        </button>
      </div>
      <div className="card_content">
        <div className="card_text-placeholder">
          {items.map((item, i) => {
            return (
              <SkillRating
                key={i}
                skillName={item.name}
                skillRate={item.rate}
                skillDesc={item.description}
              />
            );
          })}
        </div>
        <div>{legend}</div>
      </div>
    </div>
  );
};

const SkillCategory = ({ category, selectingHandler }) => {
  const animationVariants = {
    initial: {
      opacity: 0,
      scale: 0.3,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  const transition: Transition<CSSTransition> = {
    duration: 0.2,
    type: "spring",
  };

  return (
    <motion.section
      key={category}
      className={"square"}
      onClick={() => selectingHandler()}
      variants={animationVariants}
      transition={transition}
    >
      <motion.header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #000",
          fontWeight: "500",
          fontFamily: "Inter",
        }}
      >
        {category}
      </motion.header>
    </motion.section>
  );
};

export default Skills2;
