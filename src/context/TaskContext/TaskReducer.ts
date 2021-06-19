import ITask from "../../pages/Home/List/Task/types";
import TaskActions from "./TaskActions";
import { ITaskState, ITaskActions } from "./types";

const TaskReducer = (state: ITaskState, action: ITaskActions): ITaskState => {
  const { payload, type } = action;

  const insertEditedTask = (editedTask: ITask) => {
    const stateTasks = [...state.Tasks];
    const editedTaskId = stateTasks.findIndex(({ id }) => id === editedTask.id);

    stateTasks[editedTaskId] = editedTask;
    return stateTasks;
  };

  switch (type) {
    case TaskActions.ADD_TASK:
      return {
        ...state,
        Tasks: [payload, ...state.Tasks],
      };
    case TaskActions.EDIT_TASK:
      return {
        ...state,
        Tasks: insertEditedTask(payload),
      };
    default:
      return state;
  }
};

export default TaskReducer;
