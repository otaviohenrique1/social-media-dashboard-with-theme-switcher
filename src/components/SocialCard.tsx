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

const SocialCardEstilizado = styled.div<{color: string}>`
  height: 216px;
  /* border-top: 8px solid; */
  /* border-top-color: ${(props) => props.color}; */
  /* border-top: 8px solid ${(props) => props.color}; */
  box-sizing: border-box;
  background-color: hsl(228, 28%, 20%);
  border-radius: .5em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position:relative;
  padding: 1em 0;

  &:before {
    content:'';
    position: absolute;
    width: 100%;
    height: 8px;
    background: ${(props) => props.color};
    top: 0;
    left: 0;
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
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

const SocialVariacaoContainer = styled.span<{color: string}>`
  display: flex;
  align-items: center;
  gap: .2em;
  color: ${(props) => props.color};

  img {
    height: 6px;
  }
`;

export default function SocialCard(props: SocialCardProps) {
  const { borderTopColor, icone, usuario, dado, label, variacao } = props;
  const variacaoImagem = (variacao > 0) ? setaCima : setaBaixo;
  const variacaoCorFonte = (variacao > 0) ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)";
  const variacaoRemoveSinal = (variacao > 0) ? variacao : variacao * -1;

  return (
    <SocialCardEstilizado color={borderTopColor}>
      <SocialUsuarioContainer>
        <img src={icone} alt="Icone rede social" />
        <span>{usuario}</span>
      </SocialUsuarioContainer>
      <SocialDadoContainer>
        <SocialDado>{dado}</SocialDado>
        <SocialLabel>{label}</SocialLabel>
      </SocialDadoContainer>
      <SocialVariacaoContainer color={variacaoCorFonte}>
        <img src={variacaoImagem} alt="Icone de seta da variacao" />
        <span>{variacaoRemoveSinal}</span>
        <span>Today</span>
      </SocialVariacaoContainer>
    </SocialCardEstilizado>
  );
}