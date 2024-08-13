export interface Task {
    id: number;
    title: string;
    description: string;
    favorite: boolean;
    color: string;
}

export type TaskUpdate = Partial<Omit<Task, 'id'>>;
