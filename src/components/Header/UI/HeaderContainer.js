import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #31644a;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.5rem;
  position: sticky;
  top: 0;
  z-index: 100;

  & img {
    width: 64px;
    height: 64px;
  }

  & span {
    font-size: 20px;
    color: whitesmoke;
  }
`;

export const HeaderTwo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default HeaderContainer;
