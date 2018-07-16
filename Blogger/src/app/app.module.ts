import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { TableOperationComponent } from './table-operation/table-operation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeftPanelComponent,
    RightPanelComponent,
    TableOperationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
