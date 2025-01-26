import axios from "axios";
import asyncStorageService from "./async-storage";

const login = async (form: { usuario: string; contra: string }) => {
  try {
    const response = await axios.post(
      "http://192.168.68.100:5000/auth/login/",
      form
    );
    if (response.status === 200 || response.status === 201) {
      await asyncStorageService.storeData("token", response.data.object.token);
      console.log(response.data.object.token);
      console.log(form);
      return true;
    }
  } catch (error) {
    return false;
  }
};

const register = async (form: {
  nombre: string;
  usuario: string;
  contra: string;
}) => {
  axios
    .post("http://192.168.68.100:5000/auth/register/", form)
    .then((response) => {
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {
        if (error.response?.status === 400) {
            console.log('Solicitud incorrecta. Por favor, verifica los datos enviados.');
          }
    });
};

const loginRegisterService = { login, register };

export default loginRegisterService;