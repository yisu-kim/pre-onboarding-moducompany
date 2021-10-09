import styled from '@emotion/styled';

import Header from './Header';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }: AppLayoutProps) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

const Main = styled.main`
  margin: 0 auto;
  padding: 0 10px;
  max-width: 700px;
`;

export default AppLayout;
