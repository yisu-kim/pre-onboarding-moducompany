import styled from '@emotion/styled';
import { SiTodoist } from 'react-icons/si';
import TodoForm from './TodoForm';

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
  left: 0;
  margin-bottom: 40px;
  padding: 30px 40px;
  border-bottom: 1px solid #eee;
  h1 {
    display: flex;
    align-items: center;
    color: #0099fd;
    svg {
      margin-right: 10px;
    }
    span {
      line-height: 1;
    }
  }
`;

export default Header;
