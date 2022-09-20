import styled from "styled-components";

export const BannerWrapper = styled.div`
  height: 529px;
  background: url(${require("@/assets/img/cover_01.jpeg")}) center / cover;

  .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(to bottom,rgba(0, 0, 0, .3) 0%,rgba(0, 0, 0, .0) 300px,rgba(0, 0, 0, 0) 100%);
  }
`
