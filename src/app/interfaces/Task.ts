export interface Task {
  id?: number; // ? means optional
  task: string;
  day: string;
  reminder: Boolean;
}
