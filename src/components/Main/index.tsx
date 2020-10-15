import React from "react";

import * as S from "./styles";

const Main = ({ title = "WPM" }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Main;
