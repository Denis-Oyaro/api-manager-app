import container from './config/ioc_config';
// entry point file of app
import SERVICE_IDENTIFIER from './constants/identifiers';
import { ApiCall } from './interfaces';

const dataUrl = 'https://jsonplaceholder.typicode.com/todos';

// Composition root
const apiManager = container.get<ApiCall>(SERVICE_IDENTIFIER.ApiCall);

// fetch data from dataUrl
apiManager
    .fetchData(dataUrl)
    .then((data) => {
        console.log(JSON.stringify(data, null, 2));
    })
    .catch((error) => console.log(error?.message ?? 'could not fetch data!'));
