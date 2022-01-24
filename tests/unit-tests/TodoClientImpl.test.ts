// unit test for TodoClientImpl class which mocks the http call

// mock node-fetch
jest.mock('node-fetch');

import fetch from 'node-fetch';
import { TodoClientImpl } from '../../src/classes';
import { Todo } from '../../src/data';

describe('TodoClientImpl tests', () => {
    let mockTodos: Todo[] = new Array(new Todo(1, 3, 'buy groceries', false), new Todo(2, 5, 'do laundry', true), new Todo(1, 7, 'mow lawn', false));
    let todoClient: TodoClientImpl;
    const todoUrl = 'https://jsonplaceholder.typicode.com/todos';

    beforeEach(() => {
        todoClient = new TodoClientImpl();
    });

    it('Should return an array of todos', async () => {
        // mock the fetch implementation (http call) to return mock todos
        fetch.mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockTodos),
            })
        );

        expect(todoClient).toBeInstanceOf(TodoClientImpl);

        // invoke todoClient's getTodos method
        const returnedTodos = await todoClient.getTodos(todoUrl);

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(todoUrl);
        expect(returnedTodos).toBeDefined();
        expect(returnedTodos.length).toEqual(3);
        expect(returnedTodos[0].userId).toEqual(mockTodos[0].userId);
        expect(returnedTodos[0].id).toEqual(mockTodos[0].id);
        expect(returnedTodos[0].title).toEqual(mockTodos[0].title);
        expect(returnedTodos[0].completed).toEqual(mockTodos[0].completed);
        expect(returnedTodos[1].userId).toEqual(mockTodos[1].userId);
        expect(returnedTodos[1].id).toEqual(mockTodos[1].id);
        expect(returnedTodos[1].title).toEqual(mockTodos[1].title);
        expect(returnedTodos[1].completed).toEqual(mockTodos[1].completed);
        expect(returnedTodos[2].userId).toEqual(mockTodos[2].userId);
        expect(returnedTodos[2].id).toEqual(mockTodos[2].id);
        expect(returnedTodos[2].title).toEqual(mockTodos[2].title);
        expect(returnedTodos[2].completed).toEqual(mockTodos[2].completed);
    });
});
