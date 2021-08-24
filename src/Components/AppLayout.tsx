import styled from '@emotion/styled';

import Header from './Header';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

const Main = styled.main`
  margin: 0 auto;
  max-width: 700px;
  background: skyblue;
`;

export default AppLayout;
