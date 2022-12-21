import Link from "next/link";
import { useRouter } from "next/router";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import useInput from "../hooks/useInput";
import { StyledSignUpBox, StyledSignUpContainer, StyledSignUpErrorMSG, StyledSignUpLink, StyledSignUpTitle, StyledSignUpWrapper } from "../styles/StyledSignUp";

const SignUp = (): JSX.Element => {
  const [id, setId] = useInput("");
  const [pw, setPw] = useInput("");
  const [subPw, setSubPw] = useInput("");
  const router = useRouter();
  const handleSignUp = () => {
    console.log("회원가입 완료 ㅋ");
  };
  const goBack = (): void => {
    router.back();
  };
  return (
    <StyledSignUpWrapper>
      <StyledSignUpContainer>
        <StyledSignUpTitle>Only 채팅</StyledSignUpTitle>
        <CustomInput value={id} type="email" onChange={setId} placeholder={"아이디를 입력해주세요 (ex : park@tae.yong)"} />
        <CustomInput value={pw} type="password" onChange={setPw} placeholder={"패스워드를 입력해주세요 (ex : taeyong0416)"} />
        <CustomInput value={subPw} type="password" onChange={setSubPw} placeholder={"다시 한 번 패스워드를 입력해주세요."} />
        <StyledSignUpErrorMSG>{}</StyledSignUpErrorMSG>
        <CustomButton onClick={handleSignUp}>회원가입</CustomButton>
        <StyledSignUpBox>
          <span onClick={() => goBack()}>
            <StyledSignUpLink>뒤로가기</StyledSignUpLink>
          </span>
        </StyledSignUpBox>
      </StyledSignUpContainer>
    </StyledSignUpWrapper>
  );
};

export default SignUp;
