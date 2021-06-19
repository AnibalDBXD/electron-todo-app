import { ReactNode, useEffect, useReducer } from "react";
import ITask from "../../pages/Home/List/Task/types";
import TaskActions from "./TaskActions";
import { initialState, TaskContext } from "./TaskContext";
import TaskReducer from "./TaskReducer";

interface IProps {
    children: ReactNode;
}

const TaskProvider = ({ children }: IProps): JSX.Element => {
  const [{ Tasks }, dispatch] = useReducer(TaskReducer, initialState);

  const addTask = (newTask: ITask): void => {
    dispatch({ payload: newTask, type: TaskActions.ADD_TASK });
  };

  const editTask = (editedTask: ITask): void => {
    dispatch({ payload: editedTask, type: TaskActions.EDIT_TASK });
  };

  const deleteTask = (taskId: string): void => {
    dispatch({ payload: taskId, type: TaskActions.DELETE_TASK });
  };

  useEffect(() => {
    console.log("consle punto log");
  }, [Tasks]);

  return (
    <TaskContext.Provider
      value={{
        Tasks,
        addTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
