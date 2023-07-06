import React, { useEffect } from "react";
import styled from "styled-components";
import { point, main, purple, gray } from "../components";
import { useMediaQuery } from "react-responsive";
import data from "../assets/ExperienceData";

const Experience = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <S.container>
      <S.inner>
        <S.section>
          Experience
          <S.bar />
        </S.section>
        <S.tlBox>
          {data.map((data, i) => {
            if (i > 0) {
              return (
                <S.tlItem key={i}>
                  <S.tlDateBox>
                    <S.tlDate>{data.Date}</S.tlDate>
                    <S.tlBarEmptyCircle />
                  </S.tlDateBox>

                  <div>
                    <S.tlTitle>{data.Title}</S.tlTitle>
                    <S.tlDesc>{data.Desc}</S.tlDesc>
                  </div>
                </S.tlItem>
              );
            } else {
              return (
                <S.tlItem key={i}>
                  <S.tlDateBox>
                    <S.tlDate>{data.Date}</S.tlDate>
                    <S.tlBarFillCircle />
                    <S.tlBarEmptyCircle />
                  </S.tlDateBox>

                  <div>
                    <S.tlTitle>{data.Title}</S.tlTitle>
                    <S.tlDesc>{data.Desc}</S.tlDesc>
                  </div>
                </S.tlItem>
              );
            }
          })}

          <S.tlBar />
        </S.tlBox>
      </S.inner>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 52rem;
    min-height: 30rem;
    border-radius: 3.125rem;
    background: #fff;
    box-shadow: 0px 0px 30px 0px rgba(161, 117, 255, 0.3);
    margin-bottom: 5rem;
    float: right;
    @media screen and (max-width: 767px) {
      width: 100%;
      height: auto;
      float: none;
    }
  `,
  inner: styled.div`
    margin-block: 3.25rem;
    padding-inline: 3.88rem;

    @media screen and (max-width: 767px) {
      margin: 0;
      padding-block: 3rem;
    }
  `,
  section: styled.div`
    color: #000;
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  bar: styled.div`
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${() => point};
    border-radius: 1.25rem;
  `,
  tlBar: styled.span`
    position: absolute;
    width: 1px;
    border-right: 2px solid ${() => point};
    top: 0;
    bottom: 0;
    left: 12rem;
  `,
  tlBarEmptyCircle: styled.span`
    width: 14px;
    height: 14px;
    background-color: #fff;
    border: 1px solid ${() => point};
    border-radius: 50%;
    position: absolute;
    /* top: 1rem; */
    left: 11.65rem;
    right: 0;
    z-index: 1;
  `,

  tlBarFillCircle: styled.span`
    width: 8px;
    height: 8px;
    background-color: ${() => point};
    border: 1px solid ${() => point};
    border-radius: 50%;
    position: absolute;
    top: 0.2rem;
    left: 11.85rem;
    z-index: 2;
  `,

  tlBox: styled.div`
    position: relative;
    margin-top: 2rem;
  `,
  tlItem: styled.div`
    display: flex;
    margin-bottom: 3rem;
    position: relative;
    /* background-color: pink; */
  `,
  tlDateBox: styled.div`
    width: 7.88rem;
    margin-right: 7.88rem;
  `,
  tlDate: styled.span`
    color: ${() => gray};
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  tlTitle: styled.span`
    color: #000;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  tlDesc: styled.div`
    color: #848484;
    font-family: Inter;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 0.5rem;
    white-space: pre-line;
    margin-block: 0.6rem;
  `,
};

export default Experience;
