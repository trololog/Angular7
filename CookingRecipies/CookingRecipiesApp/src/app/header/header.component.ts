import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    isAuth = false;
    private userSubs: Subscription;

    @Output() menuclicked: EventEmitter<string> = new EventEmitter();

    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

    ngOnInit() {
      this.userSubs = this.authService.user.subscribe(user => {
        this.isAuth = !!user;
      });
    }

    ngOnDestroy() {
      this.userSubs.unsubscribe();
    }

    selectOption(option: string) {
        this.menuclicked.emit(option);
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
      this.dataStorageService.fetchRecipes().subscribe();
    }
}
