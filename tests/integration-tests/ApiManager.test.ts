// integration test for ApiManager to validate that the client was injected correctly
import TodoClientImpl from '../../src/classes/TodoClientImpl';
import container from '../../src/config/ioc_config';
import SERVICE_IDENTIFIER from '../../src/constants/identifiers';
import { ApiCall, TodoClient } from '../../src/interfaces';
import { Todo } from '../../src/data';
import { integrationMockTodos } from '../../src/data/mockTodos';

jest.mock('../../src/classes/TodoClientImpl');

describe('ApiManager tests', () => {
    const dataUrl = 'https://jsonplaceholder.typicode.com/todos';
    let apiManager: ApiCall;

    beforeAll(() => {
        container.rebind<TodoClient>(SERVICE_IDENTIFIER.TodoClient).to(TodoClientImpl);
        apiManager = container.get<ApiCall>(SERVICE_IDENTIFIER.ApiCall);
    });

    it('ApiManager should call TodoClient', async () => {
        const returnedData = (await apiManager.fetchData(dataUrl)) as Todo[];

        expect(returnedData).toBeDefined();
        expect(returnedData.length).toEqual(1);
        expect(returnedData[0].userId).toEqual(integrationMockTodos[0].userId);
        expect(returnedData[0].id).toEqual(integrationMockTodos[0].id);
        expect(returnedData[0].title).toEqual(integrationMockTodos[0].title);
        expect(returnedData[0].completed).toEqual(integrationMockTodos[0].completed);
    });
});
