export interface TaskInterface {
  summary: string;
  description: string;
  rate: number;
  done: boolean;
}

export interface TaskDataInterface extends Omit<TaskInterface, 'done'> {}
