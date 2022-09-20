import styled from "styled-components"

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 9;
    transition: all 250ms ease;
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props => props.theme.isAlpha ? "rgba(238,238,238,0)": "rgba(238,238,238,1)"};
    background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)": "rgba(255,255,255,1)"};
  }

  .top {
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 24px;
  }

  .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
  }
`

export const SearchAreaPlaceholder = styled.div`
  height: ${props => props.isSearch ? "100px": "0"};
  transition: height 250ms ease;
`
