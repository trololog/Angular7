import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { HttpResponse } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService) {}

    @Output() menuclicked: EventEmitter<string> = new EventEmitter();

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
