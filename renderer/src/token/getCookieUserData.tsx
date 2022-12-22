import { getCookie } from "cookies-next";
import { userInfo } from "../interface/commonInfo";

export const getCookieUserData: userInfo = JSON.parse(JSON.stringify(getCookie("userData")));
