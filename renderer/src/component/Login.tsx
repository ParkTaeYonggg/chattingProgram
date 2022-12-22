import Link from "next/link";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import useInput from "../hooks/useInput";
import { StyledLoginContainer, StyledLoginSignUpBox, StyledLoginSignUpLink, StyledLoginTitle, StyledLoginWrapper } from "../styles/StyledLogin";
import { auth } from "../firebase/firebase";
import { ErrorAlert } from "../utils/alerts";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useAuthSignInWithEmailAndPassword } from "@react-query-firebase/auth";

const Login = (): JSX.Element => {
  const [id, setId] = useInput("");
  const [pw, setPw] = useInput("");
  const router = useRouter();
  const mutation = useAuthSignInWithEmailAndPassword(auth);

  const handleLogin = (id: string, pw: string) => {
    mutation.mutate(
      { email: id, password: pw },
      {
        onSuccess: (e) => {
          const user = e.user;

          setCookie("userData", JSON.stringify({ id: user.email, uid: user.uid, token: user.refreshToken }), { maxAge: 60 * 6 * 24 });
          router.push("/chat");
        },
        onError: () => {
          ErrorAlert("로그인 실패", "아이디 혹은 비밀번호를 다시 확인해주세요.");
        },
      }
    );
  };

  return (
    <StyledLoginWrapper>
      <StyledLoginContainer>
        <StyledLoginTitle>Only 채팅</StyledLoginTitle>
        <CustomInput type={"email"} value={id} onChange={setId} placeholder={"아이디를 입력해주세요."} />
        <CustomInput type={"password"} value={pw} onChange={setPw} placeholder={"패스워드를 입력해주세요."} />
        <CustomButton onClick={() => handleLogin(id, pw)}>로그인</CustomButton>
        <StyledLoginSignUpBox>
          <Link href={"/signup"}>
            <StyledLoginSignUpLink>회원가입</StyledLoginSignUpLink>
          </Link>
        </StyledLoginSignUpBox>
      </StyledLoginContainer>
    </StyledLoginWrapper>
  );
};

export default Login;
