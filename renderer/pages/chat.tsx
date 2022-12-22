import { GetServerSideProps } from "next";
import { userInfo } from "../src/interface/commonInfo";

const ChatHome = ({ userData }): JSX.Element => {
  console.log("토큰 : ", userData);

  return <div>ㅎㅇㅎㅇ</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData: userInfo = JSON.parse(context.req.cookies["userData"]);
  console.log("유저 데이터 : ", userData);
  return {
    props: {
      userData: userData,
    },
  };
};
export default ChatHome;
