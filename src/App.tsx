import { Global } from '@emotion/react';
import AppLayout from 'Components/AppLayout';
import Delete from 'Pages/Delete/Delete';
import TodoList from 'Pages/List/TodoList';
import Reset from 'Styles/Reset';

function App() {
  return (
    <>
      <Global styles={Reset} />
      <AppLayout>
        <TodoList />
        <Delete />
      </AppLayout>
    </>
  );
}

export default App;
