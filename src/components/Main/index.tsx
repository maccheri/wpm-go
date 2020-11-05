import React, {
  useMemo,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";

import * as S from "./styles";

const unshuffledWords = ["Arrow", "Tomato", "Star", "Wheel"];

const Main = ({ title = "WPM GOOOOO" }) => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [count, setCount] = useState(60);
  const [playing, setPlaying] = useState(false);
  const [words, setWords] = useState<string[]>([]);
  const [typed, setTyped] = useState<string[]>([]);
  console.log("Main -> typed", typed);
  const ref = useRef(null);

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

    return words[currentIndex]
      .toLowerCase()
      .startsWith(currentWord.toLowerCase());

    // return words.some((word) => word.startsWith(currentWord));
  }, [currentWord, currentIndex, words]);

  const checkSpace = useCallback(
    (e) => {
      if (e.key === "Backspace" && !currentWord && currentIndex >= 1) {
        ref.current.value = typed[currentIndex - 1];
        setCurrentWord(typed[currentIndex - 1]);
        setCurrentIndex((index) => index - 1);
      }

      if (e.key === " ") {
        checkWord();

        setTyped((state) => {
          return [...state, currentWord];
        });

        setCurrentIndex((index) => index + 1);
        setCurrentWord("");

        ref.current.value = "";
      }
    },
    [currentWord]
  );

  const onUserType = useCallback((e) => {
    if (e.key !== " ") {
      setCurrentWord(e.target.value);
    }
  }, []);

  return (
    <S.Container>
      <S.Title>CONTAGEM REGRESSIVA: {count}</S.Title>

      <S.TextBox
        type="text"
        ref={ref}
        onFocus={() => setPlaying(true)}
        onChange={(e) => onUserType(e)}
        onKeyDown={(e) => checkSpace(e)}
      />

      {words.map((word, index) => (
        <p key={word}>
          {word} -{" "}
          {typed[index] && typed[index].includes(word.toLowerCase())
            ? "certo"
            : "errado"}
        </p>
      ))}
    </S.Container>
  );
};

export default Main;
