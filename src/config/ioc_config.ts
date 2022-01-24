import { Container } from 'inversify';
import 'reflect-metadata';
import SERVICE_IDENTIFIER from '../constants/identifiers';
import { ApiManager, TodoClientImpl } from '../classes';
import { ApiCall, TodoClient } from '../interfaces';

// instantiate IoC Container
const container = new Container();

// set up binds between the classes and interfaces they implement
container.bind<ApiCall>(SERVICE_IDENTIFIER.ApiCall).to(ApiManager);
container.bind<TodoClient>(SERVICE_IDENTIFIER.TodoClient).to(TodoClientImpl);

export default container;
