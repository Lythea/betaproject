import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; // Import CommonModule

@NgModule({
  declarations: [
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppComponent // Include CommonModule if you're using directives like *ngIf
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
