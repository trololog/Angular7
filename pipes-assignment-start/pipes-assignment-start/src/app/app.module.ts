import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReversePipe } from './reverse-pipe.pipe';
import { CustomSortingPipe } from './custom-sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    CustomSortingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
