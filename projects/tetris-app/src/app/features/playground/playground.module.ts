import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NgxsModule } from '@ngxs/store';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';

import { BoardComponent } from './board/board.component';
import { BoardSettingsState } from '../../core/state/board-settings.state';


@NgModule({
  declarations: [PlaygroundComponent, BoardComponent],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    RouterModule,

    NgxsModule.forFeature([BoardSettingsState]),
  ]
})
export class PlaygroundModule { }
