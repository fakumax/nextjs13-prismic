import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
  h2, h3 {
    margin: 0;
    margin-bottom: 16px;
    text-align: center;
    color: ${(props) => props.theme.colors.bgColorSecondary};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      line-height: 44px;
      font-size: 34px;
      margin-bottom: 16px;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-right: 100px;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Button = styled.button`
    border-radius: 22px;
    height: 46px;
    padding: 10px 30px;
    border: transparent;
    font-size: 16px;
    margin-top: 18px;
    line-height: 24px;
    cursor: pointer; 
    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.bgColorQuaternary};
`;