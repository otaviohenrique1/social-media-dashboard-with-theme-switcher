import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import { useState } from 'react';
import Switch from 'react-switch';
import setaCima from "./assets/images/icon-up.svg";
import setaBaixo from "./assets/images/icon-down.svg";
import iconFacebook from "./assets/images/icon-facebook.svg";
import iconInstagram from "./assets/images/icon-instagram.svg";
import iconTwitter from "./assets/images/icon-twitter.svg";
import iconYoutube from "./assets/images/icon-youtube.svg";

/*
  #### Dark Theme
  - Very Dark Blue (BG): hsl(230, 17%, 14%)
  - Very Dark Blue (Top BG Pattern): hsl(232, 19%, 15%)
  - Dark Desaturated Blue (Card BG): hsl(228, 28%, 20%)
  - Desaturated Blue (Text): hsl(228, 34%, 66%)
  - White (Text): hsl(0, 0%, 100%)

  #### Light Theme
  - White (BG): hsl(0, 0%, 100%)
  - Very Pale Blue (Top BG Pattern): hsl(225, 100%, 98%)
  - Light Grayish Blue (Card BG): hsl(227, 47%, 96%)
  - Dark Grayish Blue (Text): hsl(228, 12%, 44%)
  - Very Dark Blue (Text): hsl(230, 17%, 14%)
*/

const fundoCor = "hsl(230, 17%, 14%)";
const fundoCorTopo = "hsl(232, 19%, 15%)";
const fundoCard = "hsl(228, 28%, 20%)";
const textoTituloCor = "hsl(0, 0%, 100%)";
const textoSubtituloCor = "hsl(228, 34%, 66%)";

const Fundo = styled.div`
  z-index: 0;
  background-color: ${fundoCor};
  position: relative;
`;

const FundoTopo = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  height: 200px;
  width: 100%;
  background-color: ${fundoCorTopo};
`;

const Container = styled.div`
  height: 100vh;
  width: 1000px;
  /* width: 1440px; */
  max-width: 100%;
  margin: 0 auto;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  padding-bottom: 3em;
`;

const SwitchEstilizado = styled(Switch)`
  svg {
    display: none;
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const SwitchLabel = styled.label`
  color: ${textoTituloCor};
  font-weight: 700;
`;

const HeaderTituloContainer = styled.div``;

const HeaderTitulo = styled.h1`
  margin: 0;
  color: ${textoTituloCor};
  margin-bottom: .4em;
  font-size: 2.5em;
  font-weight: 700;
`;

const HeaderSubtitulo = styled.h2`
  margin: 0;
  color: ${textoSubtituloCor};
  font-size: 1.5em;
  font-weight: 700;
`;

const SocialContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 2em;
`;

const OverviewContainer = styled.section`
  display: grid;
`;

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  return (
    <Fundo>
      <FundoTopo />
      <Container>
        <EstilosGlobais />
        <HeaderContainer>
          <HeaderTituloContainer>
            <HeaderTitulo>Social Media Dashboard</HeaderTitulo>
            <HeaderSubtitulo>Total Followers: 23,004</HeaderSubtitulo>
          </HeaderTituloContainer>
          <SwitchContainer>
            <SwitchLabel>Dark Mode</SwitchLabel>
            <SwitchEstilizado
              onChange={handleChange}
              checked={checked}
              className="react-switch"
            />
          </SwitchContainer>
        </HeaderContainer>
        <SocialContainer>
          <SocialCard
            borderTopColor="blue"
            icone={iconFacebook}
            usuario="@nathanf"
            dado="1987"
            label="Followers"
            variacao={12}
          />
          <SocialCard
            borderTopColor="blue"
            icone={iconInstagram}
            usuario="@nathanf"
            dado="1044"
            label="Followers"
            variacao={99}
          />
          <SocialCard
            borderTopColor="blue"
            icone={iconTwitter}
            usuario="@realnathanf"
            dado="11k"
            label="Followers"
            variacao={1099}
          />
          <SocialCard
            borderTopColor="blue"
            icone={iconYoutube}
            usuario="Nathan F."
            dado="8239"
            label="Subscribers"
            variacao={144}
          />
        </SocialContainer>
        <OverviewContainer></OverviewContainer>
      </Container>
    </Fundo>
  )
}

export default App

interface SocialCardProps {
  borderTopColor: string;
  icone: string;
  usuario: string;
  dado: string;
  label: string;
  variacao: number;
}

interface SocialCardEstilizadoProps {
  borderTopColor: string;
}

const SocialCardEstilizado = styled.div<SocialCardEstilizadoProps>`
  height: 216px;
  border: 1px solid;
  border-top: 8px solid ${(props) => props.borderTopColor};
  box-sizing: border-box;
  background-color: ${fundoCard};
  border-radius: .5em;
`;

function SocialCard(props: SocialCardProps) {
  const { borderTopColor, icone, usuario, dado, label, variacao } = props;
  const variacaoImagem = (variacao > 0) ? setaCima : setaBaixo;
  

  return (
    <SocialCardEstilizado borderTopColor={borderTopColor}>
      <div>
        <img src={icone} alt="Icone rede social" />
        <span>{usuario}</span>
      </div>
      <div>
        <span>{dado}</span>
        <span>{label}</span>
      </div>
      <div>
        <img src={variacaoImagem} alt="Icone de seta da variacao" />
        <span>{variacao}</span>
        <span>Today</span>
      </div>
    </SocialCardEstilizado>
  );
}
