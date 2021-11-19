import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 60px;
  background-color: ghostwhite;
  color: gray;
  text-align: center;
  border-top: 1px solid lightgray;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 34px;
    height: 34px;
    margin-right: 10px;
  }

  & .textcontainer {
    opacity: 0.8;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & .facebook {
    margin-right: 1rem;
  }

  & .facebook:hover {
    opacity: 0.4;
  }

  & .linkedin:hover {
    opacity: 0.4;
  }
`;

export default FooterContainer;
