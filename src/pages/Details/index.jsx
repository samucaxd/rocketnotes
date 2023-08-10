import { Container } from "./styles"
import { Button } from "../../components/Button"

export function Details() {

  return (
    <Container>
      <h1>Hello World!</h1>
      <p>Samuel P. Santos</p>

      <Button name="Entrar" loading/>
      <Button name="Cadastrar"/>
      <Button name="Voltar"/>
    </Container>
  )
}
