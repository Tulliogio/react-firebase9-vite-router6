import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";
import ButtonLoading from "../components/ButtonLoading";

const Login = () => {
  const { loginUser, loading, setLoading } = useContext(UserContext);
  const navigate = useNavigate();
  const { required, patternEmail, minLength, validateTrim } = formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "bluuweb1@test.com",
      password: "123123",
    },
  });

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      await loginUser(email, password);
      navigate("/");
    } catch (error) {
      const { code, message } = erroresFirebase(error.code);
      setError(code, { message });
    } finally {
      setLoading(false);
    }
  };

  const buttonSubmit = loading ? (
    <ButtonLoading />
  ) : (
    <Button text="Login" type="submit" />
  );

  return (
    <>
      <Title title="Login" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Ingresa tu correo"
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required: { value: true, message: "Este campo es requerido" },
            pattern: { value: patternEmail, message: "Ingresa un email válido" },
          })}
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          label="Ingresa contraseña"
          type="password"
          placeholder="Ingrese Password"
          {...register("password", {
            minLength: { value: minLength, message: "La contraseña debe tener al menos 6 caracteres" },
            validate: { validateTrim },
          })}
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>

        {buttonSubmit}
      </form>
    </>
  );
};

export default Login;
