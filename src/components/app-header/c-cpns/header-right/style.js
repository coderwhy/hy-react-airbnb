import styled from "styled-components"

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.isAlpha ? "#fff": "#484848"};
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;

    .btn {
      height: 18px;
      line-height: 18px;
      box-sizing: content-box;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    color: #484848;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;

    /* transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    } */

    ${props => props.theme.mixin.boxShadow}
  }
`