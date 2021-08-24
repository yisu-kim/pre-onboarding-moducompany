import { Global } from '@emotion/react';

import AppLayout from 'Components/AppLayout';
import Reset from 'Styles/Reset';

function App() {
  return (
    <>
      <Global styles={Reset} />
      <AppLayout>투두 리스트 영역</AppLayout>
    </>
  );
}

export default App;
