import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users-service.service';
import { CounterService } from '../counter-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];
  private counter = 0;

  constructor(private userService: UsersService, private counterService: CounterService) {}

  ngOnInit() {
    this.counter = this.counterService.getCounter();
    this.counterService.getCounterListener()
      .subscribe((counter: number) => {
        this.counter = counter;
      });
  }

  onSetToActive(id: number) {
    this.userService.changeUserStatus(id, false);
    this.counterService.count();
  }
}
