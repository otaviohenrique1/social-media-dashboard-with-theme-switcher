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
  position:relative;

  &:nth-child(3):before {
    content:'';
    position:absolute;
    width:100%;
    height:8px;
    background: linear-gradient(to right , hsl(37, 97%, 70%), hsl(329, 70%, 58%));
    top:-8px;
    left:0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
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

const SocialUsuarioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5em;
  color: hsl(228, 34%, 66%);
`;

export default function SocialCard(props: SocialCardProps) {
  const { borderTopColor, icone, usuario, dado, label, variacao } = props;
  const variacaoImagem = (variacao > 0) ? setaCima : setaBaixo;
  

  return (
    <SocialCardEstilizado borderTopColor={borderTopColor}>
      <SocialUsuarioContainer>
        <img src={icone} alt="Icone rede social" />
        <span>{usuario}</span>
      </SocialUsuarioContainer>
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