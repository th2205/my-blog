import styled from "@emotion/styled";
import Input from "../../components/Input";

export default function Login() {
  return (
    <Background>
      <LoginForm>
        <Title>LogIn</Title>
        <Input label="email" value="sd" onChange={(e) => console.log(e)} />
        <Input
          label="password"
          value="sd"
          type="password"
          onChange={(e) => console.log(e)}
        />
        <button>LogIn</button>
      </LoginForm>
    </Background>
  );
}

const Background = styled.div`
  background-color: rgb(14, 18, 23);
  width: 100vw;
  height: 100vh;
`;

const LoginForm = styled.div`
  background-color: rgb(28, 31, 38);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: auto;
  color: white;
  border-radius: 10px;
  padding: 1rem 4rem;

  & > * {
    margin-bottom: 3rem;
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
