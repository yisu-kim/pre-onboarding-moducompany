import { css } from '@emotion/react';

const Reset = css`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @keyframes DocumentPalette {
    0% {
      background: #90f1ef;
    }
    25% {
      background: #ffd6e0;
    }
    50% {
      background: #ffef9f;
    }
    75% {
      background: #c1fba4;
    }
    100% {
      background: #cddafd;
    }
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'GmarketSansMedium';
  }

  button {
    border: none;
    background: none;
  }
`;

export default Reset;
