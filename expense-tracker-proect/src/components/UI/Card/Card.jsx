import styled from "styled-components";

const Card = ({ children }) => {
  return <StyleCard>{children}</StyleCard>;
};

export default Card;

const StyleCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  padding: 30px 30px;
`;
