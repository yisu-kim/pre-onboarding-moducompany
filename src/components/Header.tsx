import styled from '@emotion/styled';
import { SiTodoist } from 'react-icons/si';
import TodoForm from 'pages/todo/TodoForm';

const Header: React.FC = () => (
  <Head>
    <h1>
      <SiTodoist /> <span>모두의 플래너</span>
    </h1>
    <TodoForm />
  </Head>
);

const Head = styled.header`
  position: sticky;
  top: 0;
  padding: 20px 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 9999;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    color: #0099fd;
    svg {
      margin-right: 10px;
    }
  }
`;

export default Header;
