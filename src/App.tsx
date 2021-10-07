import { Global } from '@emotion/react';
import AppLayout from 'components/AppLayout';
import TodoContainer from 'pages/todo/TodoContainer';
import { TodoProvider } from 'store/todo';
import Reset from 'styles/reset';

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
