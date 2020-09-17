import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MainLayoutContainer } from './layout/main-layout/main-layout.container';



@NgModule({
  declarations: [MainLayoutComponent, MainLayoutContainer],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule { }
