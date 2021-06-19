import TaskActions from "./TaskActions";
import { ITaskState, ITaskActions } from "./types";

const TaskReducer = (state: ITaskState, action: ITaskActions): ITaskState => {
  const { payload, type } = action;

  switch (type) {
    case TaskActions.ADD_TASK:
      return {
        ...state,
        Tasks: [payload, ...state.Tasks],
      };
    default:
      return state;
  }
};

export default TaskReducer;
