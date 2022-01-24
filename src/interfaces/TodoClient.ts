import { Todo } from '../data';

//interface with a getTodos method
export interface TodoClient {
    getTodos(url: string): Promise<Todo[]>;
}
