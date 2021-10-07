import { Global } from '@emotion/react';
import AppLayout from 'Components/AppLayout';
import TodoContainer from 'Pages/List/TodoContainer';
import { TodoProvider } from 'store/Todo';
import Reset from 'Styles/Reset';

const App: React.FC = () => {
  return (
    <>
      <Global styles={Reset} />
      <TodoProvider>
        <AppLayout>
          <TodoContainer />
        </AppLayout>
      </TodoProvider>
    </>
  );
};

export default App;
