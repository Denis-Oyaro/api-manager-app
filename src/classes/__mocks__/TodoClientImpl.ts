// mocks ToClientImpl class
import { TodoClient } from '../../interfaces';
import { Todo } from '../../data';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { integrationMockTodos } from '../../data/mockTodos';

@injectable()
export default class TodoClientImpl implements TodoClient {
    public async getTodos(url: string): Promise<Todo[]> {
        return Promise.resolve(integrationMockTodos);
    }
}
