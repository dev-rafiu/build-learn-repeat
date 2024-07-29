export type Task = {
  id: string;
  title: string;
};

export type TState = {
  taskList: Task[];
  totalItems: number;
};
