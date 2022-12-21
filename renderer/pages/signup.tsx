import CustomHead from "../src/common/CustomHead";
import SignUp from "../src/component/SignUp";

const SignUpHome = (): JSX.Element => {
  return (
    <>
      <CustomHead title="only채팅 - 회원가입" />
      <SignUp />
    </>
  );
};

export default SignUpHome;
