import { Container, Links, Content } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, dicta quos. Tenetur enim officiis sed, dolore iusto, 
            architecto aliquam voluptatem sapiente corporis impedit itaque expedita minus iste adipisci deserunt similique.</p>

          <Section title="Links Úteis">
            <Links>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button name="Voltar"/>

        </Content>
      </main>
    </Container>
  )
}
