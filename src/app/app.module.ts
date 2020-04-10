import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmojiSeparatorComponent } from './emoji-separator/emoji-separator.component';

@NgModule({
  declarations: [
    AppComponent,
    EmojiSeparatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
