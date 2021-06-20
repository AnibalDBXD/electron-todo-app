import { Dayjs } from "dayjs";

interface ITask {
    color: string;
    name: string;
    time: Dayjs;
    id: string;
    isChecked: boolean;
}

export default ITask;
