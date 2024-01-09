import ReactDOM from "react-dom";
import Button from "../UI/button/Button";
import styled from "styled-components";

export const Modal = ({ onClose, id, onDeleteExpenseList }) => {
  return (
    <>
      <Backdrop />

      {ReactDOM.createPortal(
        <StyledContainer>
          <Title>Вы точно хотите удалить этот расход? </Title>
          <StyledButtonsContainer>
            <Button onClick={onClose}>нет</Button>
            <Button onClick={() => onDeleteExpenseList(id)}>да</Button>
          </StyledButtonsContainer>
        </StyledContainer>,
        document.getElementById("modal")
      )}
    </>
  );
};
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const StyledContainer = styled("div")`
  width: 400px;
  height: 200px;
  position: fixed;
  top: 35%;
  left: 38%;
  /* transform: translate(-50%, -50%); */
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 40px;
`;
const Title = styled("p")`
  font-size: 18px;
  font-weight: 600px;
  text-align: center;
`;

const StyledButtonsContainer = styled("div")`
  display: flex;
  gap: 40px;
  button {
    width: 100px;
  }
`;
