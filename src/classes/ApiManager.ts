// ApiManager class, which implements interface with fetchData method
import { ApiCall } from '../interfaces/ApiCall';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import SERVICE_IDENTIFIER from '../constants/identifiers';
import { TodoClient } from '../interfaces';

@injectable()
export default class ApiManager implements ApiCall {
    private todoClient: TodoClient;

    public constructor(@inject(SERVICE_IDENTIFIER.TodoClient) todoClient: TodoClient) {
        this.todoClient = todoClient;
    }

    public async fetchData(url: string): Promise<Object> {
        try {
            const data = await this.todoClient.getTodos(url);
            return data;
        } catch (error) {
            throw new Error(error?.message ?? 'Could not fetch data!');
        }
    }
}
