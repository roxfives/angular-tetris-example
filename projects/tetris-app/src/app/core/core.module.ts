import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainLayoutContainer } from './layout/main-layout/main-layout.container';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { BoardSettingsState } from './state/board-settings.state';


@NgModule({
  declarations: [MainLayoutContainer, ToolbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    NgxsModule.forRoot([BoardSettingsState]),

    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MainLayoutContainer
  ],
})
export class CoreModule { }
