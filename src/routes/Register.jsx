import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";
import FormError from "../components/FormError";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);
  const { required, patternEmail, minLength, validateTrim, validateEquals } = formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm({
    defaultValues: {
      email: "bluuweb1@test.com",
      password: "123123",
      repassword: "123123",
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navigate("/");
    } catch (error) {
      const { code, message } = erroresFirebase(error);
      setError(code, { message });
    }
  };

  return (
    <>
      <Title title="Register" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          label="Ingrese Email"
          placeholder="Ingresa un email"
          {...register("email", {
            required: { value: true, message: "Este campo es requerido" },
            pattern: { value: patternEmail, message: "Ingresa un email válido" },
          })}
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          label="Ingrese Password"
          placeholder="Ingresa un password"
          {...register("password", {
            minLength: { value: minLength, message: "La contraseña debe tener al menos 6 caracteres" },
            validate: { validateTrim },
          })}
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type="password"
          label="Repita Password"
          placeholder="Repita password"
          {...register("repassword", {
            validate: { validateEquals: validateEquals(getValues("password")) },
          })}
          error={errors.repassword}
        >
          <FormError error={errors.repassword} />
        </FormInput>

        <Button text="Register" />
      </form>
    </>
  );
};

export default Register;
