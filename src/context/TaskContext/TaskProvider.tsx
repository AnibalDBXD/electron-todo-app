import { ReactNode, useEffect, useReducer } from "react";
import useLocalStorage from "react-use-localstorage";
import ITask from "../../pages/Home/List/Task/types";
import TaskActions from "./TaskActions";
import { initialState, TaskContext } from "./TaskContext";
import TaskReducer from "./TaskReducer";

interface IProps {
    children: ReactNode;
}

const TaskProvider = ({ children }: IProps): JSX.Element => {
  const [storedTasks, setValue] = useLocalStorage("TASKS");
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
  const setTasks = (newTasks: ITask[]): void => {
    dispatch({ payload: newTasks, type: TaskActions.SET_TASKS });
  };

  useEffect(() => {
    if (JSON.stringify(Tasks) !== "[]") setValue(JSON.stringify(Tasks));
  }, [Tasks]);

  useEffect(() => {
    setTasks(JSON.parse(storedTasks || "[]"));
  }, []);

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
