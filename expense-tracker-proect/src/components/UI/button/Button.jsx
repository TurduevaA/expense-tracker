import styled from "styled-components";

const Button = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
const StyledButton = styled.button`
  padding: 16px 18px;
  border-radius: 10px;
  background-color: #4a026b;
  border: none;
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  box-shadow: 2px 1px 15px #3b055ee3;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #861ecbbc;
  }
  &:active {
    background: #600a87;
  }
`;
