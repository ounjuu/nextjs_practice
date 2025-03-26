import { useRouter } from "next/router";

//페이지 이동
const LoginCheck = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
};

export default LoginCheck;
