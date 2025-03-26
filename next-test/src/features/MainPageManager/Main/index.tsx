import { MainStyled } from "./styled";
import { clsx } from "clsx";
import Main2 from "../Main2";
import { useState } from "react";
import { useRouter } from "next/router";

const Main = () => {
  const router = useRouter();
  const [number, setNumber] = useState(1);

  const data = [
    { id: 1, name: " dfd", age: 234, gender: "male" },
    { id: 1, name: " dfd", age: 234, gender: "male" },
    { id: 1, name: " dfd", age: 234, gender: "male" },
  ];

  const sample = data?.map((x: any, i: number) => {});

  return (
    <MainStyled className={clsx("main-wrap")}>
      <div className="main-title">메인페이지</div>
      <button
        onClick={() => {
          router.push(`/login`);
        }}
      >
        로그인 페이지 이동
      </button>
      <button
        onClick={() => {
          window.location.href = "https://www.google.com";
        }}
      >
        구글 페이지 이동
      </button>
      <button
        onClick={() => {
          window.open("https://www.naver.com", "_blank");
        }}
      >
        네이버 페이지 이동
      </button>
      <Main2 id={0} name={""} age={0} gender={"male"} />
    </MainStyled>
  );
};
export default Main;
