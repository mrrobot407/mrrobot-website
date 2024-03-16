import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../components/section4.css'

const TypingSection = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
      startTyping();
    }
  }, [inView, isVisible]);

  const startTyping = () => {
    const fullText = "“Control can sometimes be an illusion. But sometimes you need illusion to gain control.”";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70); // Adjust typing speed here
  };

  return (
    <div ref={ref} className='section4-container'>
      <p className='section4-content'>{text}</p>
    </div>
  );
};

export default TypingSection;
