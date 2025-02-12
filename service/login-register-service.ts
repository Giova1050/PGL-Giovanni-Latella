import axios, { AxiosError } from "axios";
import {asyncStorageService} from "./async-storage";
import Toast from "react-native-toast-message";

const login = async (email: string, pswd: string) => {
  let status = 500;
  try {
    const response = await axios.post(
      "http://192.168.68.100:5000/auth/login",
      {
        email,
        pswd,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const token = response.data.object.token;
    await asyncStorageService.storeData(token);
    Toast.show({
      type: "success",
      text1: "Bienvenido",
    });

    return response.status;
  } catch (error) {
    if (error instanceof AxiosError && error.status === 401) {
      Toast.show({
        type: "error",
        text1: "Error",
      });
      status = error.status;
    } else if (error instanceof AxiosError && error.status === 400) {
      Toast.show({
        type: "error",
        text1: "Error",
      });
      status = error.status;
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Error del servidor",
      });
    }
    return status;
  }
};

const register = async (fullName: string, email: string, pswd: string) => {
  let status = 500;
  try {
    const response = await axios.post(
      "http://192.168.68.100:5000/auth/register",
      {
        fullName,
        email,
        pswd,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    Toast.show({
      type: "success",
      text1: "Te has registrado correctamente",
    });

    return response.status;
  } catch (error) {
    if (error instanceof AxiosError && error.status === 409) {
      Toast.show({
        type: "error",
        text1: "Error",
      });
      status = error.status;
    } else if (error instanceof AxiosError && error.status === 400) {
      Toast.show({
        type: "error",
        text1: "Error",
      });
      status = error.status;
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
      });
    }
  }
  return status;
};

const loginRegisterService = { login, register };

export default loginRegisterService;
