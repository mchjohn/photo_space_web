import LogoCamera from '../../assets/undraw_camera.svg';
import Logo from '../../assets/logo.svg';

import { FormLogin } from '../../components/FormLogin/';
import { SocialButton } from '../../components/SocialButton/';

import { Container, Form, Arte } from './styles';

export function Login() {
  return (
    <Container>
      <Form>
        <img src={Logo} alt="Logo Photo Space" />

        <SocialButton provider='google' />
        <SocialButton provider='facebook' />

        <span>ou entre com email</span>
        
        <FormLogin />
      </Form>

      <Arte>
        <img src={LogoCamera} alt="Logo Camera" />
      </Arte>
    </Container>
  )
}