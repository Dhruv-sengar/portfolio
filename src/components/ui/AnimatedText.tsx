'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
  once?: boolean;
  delay?: number;
  style?: React.CSSProperties;
}

const defaultCharacterAnimation: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  el: Wrapper = 'p',
  once = true,
  delay = 0,
  style,
}) => {
  const words = text.split(' ');

  return (
    <Wrapper className={className} style={{ perspective: '1000px', ...style }}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        transition={{ staggerChildren: 0.03, delayChildren: delay }}
        aria-hidden
        className="block"
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={defaultCharacterAnimation}
                className="inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
      <span className="sr-only">{text}</span>
    </Wrapper>
  );
};

export const FadeInText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  el: Wrapper = 'p',
  once = true,
  delay = 0,
  style,
}) => {
  const words = text.split(' ');

  return (
    <Wrapper className={className} style={style}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        transition={{ staggerChildren: 0.05, delayChildren: delay }}
        aria-hidden
        className="block"
      >
        {words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            className="inline-block mr-[0.25em]"
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
      <span className="sr-only">{text}</span>
    </Wrapper>
  );
};

export const RevealText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  el: Wrapper = 'div',
  once = true,
  delay = 0,
  style,
}) => {
  return (
    <Wrapper className={className} style={style}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        variants={{
          hidden: { clipPath: 'inset(100% 0 0 0)' },
          visible: { 
            clipPath: 'inset(0% 0 0 0)',
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay } 
          }
        }}
      >
        {text}
      </motion.div>
    </Wrapper>
  );
};
