import { Container } from './styles';

export function FormLogin() {
  return (
    <Container>
      <input placeholder='Seu email *' />
      <input placeholder='Sua senha *' />

      <a href="#">Esqueci minha senha</a>

      <button>
        <span>Entrar</span>
      </button>

      <span>
        Não tem uma conta? <a href="#">Criar conta</a>
      </span>
    </Container>
  );
}