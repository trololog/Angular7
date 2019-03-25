import { Subject } from 'rxjs';

export class UsersService {
    private activeUsers: string[] = ['Max', 'Anna', 'Chris', 'Manu'];
    private inactiveUsers: string[] = [];
    private activeUsersUpdated = new Subject<string[]>();
    private inactiveUsersUpdated = new Subject<string[]>();

    changeUserStatus(index: number, isActive: boolean) {
        if (isActive) {
            this.inactiveUsers.push(this.activeUsers[index]);
            this.activeUsers.splice(index, 1);
        } else {
            this.activeUsers.push(this.inactiveUsers[index]);
            this.inactiveUsers.splice(index, 1);
        }

        this.activeUsersUpdated.next([...this.activeUsers]);
        this.inactiveUsersUpdated.next([...this.inactiveUsers]);
    }

    getActiveUsersListener() {
        return this.activeUsersUpdated.asObservable();
    }

    getInactiveUsersListener() {
        return this.inactiveUsersUpdated.asObservable();
    }

    getActiveUsers() {
        return [...this.activeUsers];
    }

    getInactiveUsers() {
        return [...this.inactiveUsers];
    }
}
