import React, {
  useMemo,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";

import * as S from "./styles";

const unshuffledWords = ["Arrow", "Tomato", "Star", "Wheel"];
const INITIAL_COUNT_VALUE = 10;

const Main = ({ title = "WPM GOOOOO" }) => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [count, setCount] = useState(INITIAL_COUNT_VALUE);
  const [playing, setPlaying] = useState(false);
  const [words, setWords] = useState<string[]>([]);
  const [typed, setTyped] = useState<string[]>([]);
  const [wpm, setWpm] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    if (playing) {
      const countdown = setInterval(() => {
        setCount((count) =>
          count > 0 && !isFinished ? count - 1 : INITIAL_COUNT_VALUE
        );
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

  const isFinished = useMemo(
    () => typed.length === words.length || count === 0,
    [typed, words, count]
  );

  const checkWord = useCallback(() => {
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

        setTyped((state) => {
          const lastRemoved = state.slice(0, state.length - 1);
          return lastRemoved;
        });

        e.preventDefault();
      }

      if (e.key === " " && !isFinished) {
        e.preventDefault();
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

  const resetGame = useCallback(() => {
    setTyped([]);
    setPlaying(false);
    setCount(INITIAL_COUNT_VALUE);
  }, []);

  const calcWPM = useCallback(
    () => typed.length / (INITIAL_COUNT_VALUE - count),
    [typed, count]
  );

  return (
    <S.Container>
      <S.Title>CONTAGEM REGRESSIVA: {count}</S.Title>

      <S.TextBox
        disabled={isFinished}
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

      {isFinished && (
        <>
          <h1 className="finished">Terminou: {calcWPM()} WPM</h1>{" "}
          <button onClick={resetGame}>RESET</button>
        </>
      )}
    </S.Container>
  );
};

export default Main;
