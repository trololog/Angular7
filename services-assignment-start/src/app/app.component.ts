import { Component,
        OnInit } from '@angular/core';
import { UsersService } from './users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  private activeUsers: string[] = [];
  private inactiveUsers: string[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.getActiveUsers();
    this.inactiveUsers = this.usersService.getInactiveUsers();
    this.usersService.getActiveUsersListener()
      .subscribe((users: string[]) => {
        this.activeUsers = users;
      });
    this.usersService.getInactiveUsersListener()
      .subscribe((users: string[]) => {
        this.inactiveUsers = users;
      });
  }
}
