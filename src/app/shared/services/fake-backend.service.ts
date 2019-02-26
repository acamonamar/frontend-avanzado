import { InMemoryDbService } from 'angular-in-memory-web-api';
export class FakeBackendService implements InMemoryDbService {
    createDb() {
        const users = [
            {
                id: 1,
                user: 'alejandro',
                password: '1234'
            },
            {
                id: 2,
                user: 'admin',
                password: '1234'
            }
        ];
        return {
            users: users
        };
    }
}
