import { InMemoryDbService } from 'angular-in-memory-web-api';
export class FakeBackendService implements InMemoryDbService {
    createDb() {
        const users = [
            {
                id: 1,
                user: 'jandrocm@gmail.com',
                password: '1234'
            },
            {
                id: 2,
                user: 'admin@uoc.edu',
                password: '1234'
            }
        ];
        return {
            users: users
        };
    }
}
