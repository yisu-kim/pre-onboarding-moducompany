import styled from '@emotion/styled';

const Header: React.FC = () => (
  <Head>
    <p>헤더</p>
    <p>헤더</p>
    <p>헤더</p>
  </Head>
);

const Head = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 50px 0;
  background: tomato;
`;

export default Header;
