import { createContext, useContext } from "react";
import { ITaskState } from "./types";

export const initialState: ITaskState = {
  Tasks: [],
};

export const TaskContext = createContext<ITaskState>(initialState);

export const useTaskContext = (): ITaskState => useContext(TaskContext);
