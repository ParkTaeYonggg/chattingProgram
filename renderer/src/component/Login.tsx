import Link from "next/link";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import useInput from "../hooks/useInput";
import { StyledLoginContainer, StyledLoginSignUpBox, StyledLoginSignUpLink, StyledLoginTitle, StyledLoginWrapper } from "../styles/StyledLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { ErrorAlert } from "../utils/alerts";

const Login = (): JSX.Element => {
  const [id, setId] = useInput("");
  const [pw, setPw] = useInput("");

  const handleLogin = (id: string, pw: string) => {
    signInWithEmailAndPassword(auth, id, pw)
      .then((userCredential) => {
        console.log("로그인 성공");
        const user = userCredential.user;
      })
      .catch((error) => {
        ErrorAlert("로그인 실패", "계정이 없거나 아이디 혹은 비밀번호를 확인해주세요!");
      });
  };

  return (
    <StyledLoginWrapper>
      <StyledLoginContainer>
        <StyledLoginTitle>Only 채팅</StyledLoginTitle>
        <CustomInput type={"email"} value={id} onChange={setId} placeholder={"아이디를 입력해주세요."} />
        <CustomInput type={"password"} value={pw} onChange={setPw} placeholder={"패스워드를 입력해주세요."} />
        <CustomButton onClick={handleLogin}>로그인</CustomButton>
        <StyledLoginSignUpBox>
          <Link href={"/signUp"}>
            <StyledLoginSignUpLink>회원가입</StyledLoginSignUpLink>
          </Link>
        </StyledLoginSignUpBox>
      </StyledLoginContainer>
    </StyledLoginWrapper>
  );
};

export default Login;
