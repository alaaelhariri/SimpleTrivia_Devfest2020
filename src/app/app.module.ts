import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/modules/material/material.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GameComponent, PlayerCreateComponent, QuestionsCreateComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    GameComponent,
    PlayerCreateComponent,
    QuestionsCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
