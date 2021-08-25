import { FC } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import useTodo from 'hooks/useTodo';
import dateFormat from 'Utils/Date';

const TodoForm: FC = () => {
  const { todo, handleChange } = useTodo();
  const { taskName } = todo;

  return (
    <form>
      <h2>{dateFormat({ targetDate: new Date() })}</h2>
      <p>
        <input name="taskName" value={taskName} onChange={handleChange} />
        <button type="button">
          <FaCalendarAlt />
        </button>
      </p>
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
