import styled from 'styled-components';
import setaCima from "../assets/images/icon-up.svg";
import setaBaixo from "../assets/images/icon-down.svg";

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
  border-top: 8px solid;
  border-top-color: ${(props) => props.borderTopColor};
  /* border-top: 8px solid ${(props) => props.borderTopColor}; */
  box-sizing: border-box;
  background-color: hsl(228, 28%, 20%);
  border-radius: .5em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SocialDado = styled.span`
  color: hsl(0, 0%, 100%);
  font-size: 4em;
  font-weight: 700;
`;

const SocialLabel = styled.span`
  color: hsl(228, 34%, 66%);
  letter-spacing: .5em;
  text-transform: uppercase;
  font-weight: 400;
`;

const SocialDadoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default function SocialCard(props: SocialCardProps) {
  const { borderTopColor, icone, usuario, dado, label, variacao } = props;
  const variacaoImagem = (variacao > 0) ? setaCima : setaBaixo;
  

  return (
    <SocialCardEstilizado borderTopColor={borderTopColor}>
      <div>
        <img src={icone} alt="Icone rede social" />
        <span>{usuario}</span>
      </div>
      <SocialDadoContainer>
        <SocialDado>{dado}</SocialDado>
        <SocialLabel>{label}</SocialLabel>
      </SocialDadoContainer>
      <div>
        <img src={variacaoImagem} alt="Icone de seta da variacao" />
        <span>{variacao}</span>
        <span>Today</span>
      </div>
    </SocialCardEstilizado>
  );
}