import { User } from '@/typing';


const users: User[] = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
    { id: '3', name: 'Charlie', email: 'charlie@example.com' },
];

export class UserService {
    static getUsers(): User[] {
        return users;
    }

    static getUser(id: string): User | undefined {
        return users.find((user) => user.id === id);
    }

    static createUser(name: string, email: string): User {
        const user: User = { id: String(users.length + 1), name, email };
        users.push(user);
        return user;
    }

    static updateUser(id: string, name: string, email: string): User | undefined {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            return undefined;
        }
        const user: User = { id, name, email };
        users[userIndex] = user;
        return user;
    }

    static deleteUser(id: string): void {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
        }
    }
}
