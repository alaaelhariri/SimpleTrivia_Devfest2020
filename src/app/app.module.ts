import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/modules/material/material.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameComponent, PlayerCreateComponent, QuestionsCreateComponent } from './components';
import { PlayerPipe } from './pipes/player.pipe';
import { SecretDirective } from './directives/secret.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    GameComponent,
    PlayerCreateComponent,
    QuestionsCreateComponent,
    PlayerPipe,
    SecretDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
