import { useRouter } from "next/router";
import { LoginPageStyled } from "./styled";
const LoginPage = () => {
  const router = useRouter();
  const number = 24;
  return (
    <LoginPageStyled>
      <div
        onClick={() => {
          router.push(`/login/logincheck/${number}`);
        }}
      >
        로그인 페이지 입니다.{" "}
      </div>
    </LoginPageStyled>
  );
};
export default LoginPage;
