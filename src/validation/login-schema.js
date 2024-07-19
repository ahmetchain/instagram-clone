import Yup from "./validate";

export const LoginScheama = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});
