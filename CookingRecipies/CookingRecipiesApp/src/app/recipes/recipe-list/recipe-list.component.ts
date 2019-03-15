import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test','https://hips.hearstapps.com/del.h-cdn.co/assets/18/06/1600x800/landscape-1517928338-delish-mongolian-ramen-and-meatballs-still001.jpg?resize=640:*')
  ];

  @Output() listItemClicked: EventEmitter<Recipe> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onItemClicked(event: Recipe) {
    this.listItemClicked.emit(event);
  }
}
