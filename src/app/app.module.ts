import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {TableComponent} from "./table/table.component";
import {DataComponent} from "./data/data.component";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
