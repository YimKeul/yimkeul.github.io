import React from "react";
import styled from "styled-components";
import { bgcard } from "../images";

const Home = () => {
  return <S.container>{/* <p>h</p> */}</S.container>;
};

const S = {
  container: styled.div`
    width: 54.375rem;
    height: 35.56531rem;
    border-radius: 3.125rem;
    background-image: url(${bgcard});
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 5rem;
    @media screen and (min-width: 1024px) {
      float: right;
    }
  `,
};

export default Home;
