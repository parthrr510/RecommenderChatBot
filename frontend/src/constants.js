import { message} from 'antd';


export const REQUEST_ERROR = "Something went wrong!";
export const FORGOT_ERROR = "You forgot to enter something!";
export const BASE_URL = "http://192.168.29.192:8080";

export const showMessage = (text) => message.error(text);