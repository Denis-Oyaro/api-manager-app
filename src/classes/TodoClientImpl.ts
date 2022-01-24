// A TodoClient class - class implementing TodoClient interface
import { TodoClient } from '../interfaces';
import { Todo } from '../data';
import fetch from 'node-fetch';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export default class TodoClientImpl implements TodoClient {
    public async getTodos(url: string): Promise<Todo[]> {
        try {
            const response = await fetch(url);
            const todos = (await response.json()) as Promise<Todo[]>;
            return todos;
        } catch (error) {
            throw new Error('Could not fetch todos!');
        }
    }
}
