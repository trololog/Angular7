import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() itemClicked: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  selectItem(recipe: Recipe) {
    console.log(recipe);
    this.itemClicked.emit();
  }
}
