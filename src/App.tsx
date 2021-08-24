import { Global } from '@emotion/react';
import AppLayout from 'Components/AppLayout';
import Delete from 'Pages/Delete/Delete';
import TodoContainer from 'Pages/List/TodoContainer';
import Reset from 'Styles/Reset';

function App() {
  return (
    <>
      <Global styles={Reset} />
      <AppLayout>
        <TodoContainer />
        <Delete />
      </AppLayout>
    </>
  );
}

export default App;
