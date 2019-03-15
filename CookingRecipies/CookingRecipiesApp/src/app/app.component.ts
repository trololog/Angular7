import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  IsRecipeVisible: boolean;
  IsShoppingVisible: boolean;

  ngOnInit() {
    this.IsRecipeVisible = true;
    this.IsShoppingVisible = false;
  }

  onMenuClicked(event: any) {
    this.IsRecipeVisible = event === 'recipes';
    this.IsShoppingVisible = event === 'shoppingList';
  }
}
