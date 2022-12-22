import { userInfo } from "../interface/commonInfo";
import { useQuery } from "react-query";
import { getCookieUserData } from "../token/getterUserData";

const useQueryUserData = (token: string): userInfo => {
  const { data } = useQuery(["getUserData"], () => requestUserData(token), { staleTime: 300000 });
  return data;
};

const requestUserData = (token: string): Promise<userInfo> => {
  if (!token) {
    return new Promise(() => ({ id: "", token: "" } as userInfo));
  } else {
    return new Promise(() => {
      const { id } = getCookieUserData;
      return { id: id } as userInfo;
    });
  }
};
export default useQueryUserData;
