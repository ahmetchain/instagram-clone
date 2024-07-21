import Yup from "./validate";

export const RegisterScheama = Yup.object().shape({
  email: Yup.string().email().required(),
  full_name: Yup.string().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
});
