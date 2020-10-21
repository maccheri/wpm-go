import React, { useMemo, useEffect, useState, useCallback } from "react";

import * as S from "./styles";

const unshuffledWords = ["Arrow", "Tomato", "Star", "Wheel"];

const Main = ({ title = "WPM GOOOOO" }) => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [count, setCount] = useState(60);
  const [playing, setPlaying] = useState(false);
  const [words, setWords] = useState<string[]>([]);
  const [typed, setTyped] = useState<string[]>([]);

  useEffect(() => {
    if (playing) {
      const countdown = setInterval(() => {
        setCount((count) => (count > 0 ? count - 1 : 60));
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [playing]);

  const shuffleArray = useCallback((arr: string[]) => {
    return arr
      .map((a) => [Math.random(), a])
      .sort()
      .map((a) => a[1]) as string[];
  }, []);

  useEffect(() => {
    if (words.length === 0) {
      const shuffledArray = shuffleArray(unshuffledWords);

      setWords(shuffledArray);
    }
  }, []);

  const checkWord = useCallback(() => {
    console.log("checkWord -> words[currentIndex]", words[currentIndex]);
    return words[currentIndex].toLowerCase().startsWith(currentWord);

    // return words.some((word) => word.startsWith(currentWord));
  }, [currentWord, currentIndex, words]);

  const checkSpace = (e) => {
    if (e.key === " ") {
      setCurrentIndex((index) => index + 1);
    }
  };

  const onUserType = (e) => {
    setCurrentWord(e.target.value);
    console.log(checkWord());
  };

  return (
    <S.Container>
      <S.Title>CONTAGEM REGRESSIVA: {count}</S.Title>

      <S.TextBox
        type="text"
        onFocus={() => setPlaying(true)}
        onChange={(e) => onUserType(e)}
        onKeyPress={(e) => checkSpace(e)}
      />

      {words.map((word) => (
        <p key={word}>{word}</p>
      ))}
    </S.Container>
  );
};

export default Main;
