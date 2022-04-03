import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import Router from "next/router";
import { useInput } from "@/hooks/useInput";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { FormSubmitEvent } from "@/types/event";
import { login } from "@/apis/user";

export default function Login() {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const emailRef = useRef();

  const onSubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();

    const { result } = await login({ email, password });

    if (result !== 100) return alert("!");

    Router.push("/admin");
  };

  useEffect(() => {}, []);

  return (
    <Background>
      <LoginForm onSubmit={onSubmit}>
        <Title>LogIn</Title>
        <Input label="email" value={email} onChange={setEmail} />
        <Input
          label="password"
          value={password}
          type="password"
          onChange={setPassword}
        />
        <Button label="LogIn" type="submit" />
      </LoginForm>
    </Background>
  );
}

const Background = styled.div`
  background-color: rgb(14, 18, 23);
  width: 100vw;
  height: 100vh;
`;

const LoginForm = styled.form`
  background-color: rgb(28, 31, 38);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 28rem;
  height: auto;
  color: white;
  border-radius: 10px;
  padding: 1rem 4rem;

  & > * {
    margin-bottom: 3.5rem;
  }
`;

const Title = styled.h1`
  /* background: linear-gradient(to right, #fbcac9, #8ca6ce); */
  /* background-color: red; */

  /* Create the gradient. */
  /* background-image: linear-gradient(45deg, #f3ec78, #af4261); */

  /* Set the background size and repeat properties. */
  /* background-size: 100%;
  background-repeat: repeat; */

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent; */
  font-size: 3rem;
  text-align: center;
  color: white;
`;
