import React, { useEffect, useState, useCallback } from "react";

import * as S from "./styles";

const unshuffledWords = ["Arrow", "Tomato", "Star", "Wheel"];

const Main = ({ title = "WPM GOOOOO" }) => {
  const [count, setCount] = useState(60);
  const [playing, setPlaying] = useState(false);
  const [words, setWords] = useState<string[]>([]);

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
      .map((a) => a[1]);
  }, []);

  useEffect(() => {
    //Concertar a parte da tipagem
    if (words.length === 0) {
      console.log(shuffleArray(unshuffledWords));
      // setWords(shuffleArray(unshuffledWords));
    }
  }, []);

  return (
    <S.Container>
      <S.Title>CONTAGEM REGRESSIVA: {count}</S.Title>

      <S.TextBox type="text" onFocus={() => setPlaying(true)} />

      {}
    </S.Container>
  );
};

export default Main;
