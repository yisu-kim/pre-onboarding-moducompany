import styled from '@emotion/styled';

const Head = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 50px 0;
  background: tomato;
`;

const Header: React.FC = () => <Head>헤더</Head>;

export default Header;
