import styled from 'styled-components';

interface TextProps {
  readonly weight?: number;
  readonly size?: number;
  readonly mb?: number;
  readonly mt?: number;
  readonly ml?: number;
  readonly mr?: number;
}

const Text = styled.p<TextProps>`
  font-size: ${(props) => props.size || 1.8}rem;
  font-weight: ${(props) => props.weight || 500};
  margin-bottom: ${(props) => props.mb}rem;
  margin-top: ${(props) => props.mt}rem;
  margin-left: ${(props) => props.ml}rem;
  margin-right: ${(props) => props.mr}rem;
`;

export default Text;
