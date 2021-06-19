import { ReactNode, useReducer } from "react";
import ITask from "../../pages/Home/List/Task/types";
import TaskActions from "./TaskActions";
import { initialState, TaskContext } from "./TaskContext";
import TaskReducer from "./TaskReducer";

interface IProps {
    children: ReactNode;
}

const TaskProvider = ({ children }: IProps): JSX.Element => {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const addTask = (newTask: ITask): void => {
    dispatch({ payload: newTask, type: TaskActions.ADD_TASK });
  };

  return (
    <TaskContext.Provider
      value={{
        Tasks: state.Tasks,
        addTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
