import { Injectable } from '@angular/core';
import { State, Selector } from '@ngxs/store';

import { of } from 'rxjs';


export class BoardSettingsStateModel {
  public board: {
    cols: number;
    rows: number;
    blockSize: number;
  };

  constructor () {
    this.board = {
      cols: 10,
      rows: 20,
      blockSize: 30,
    };
  }
}

const defaults = new BoardSettingsStateModel();

@State<BoardSettingsStateModel>({
  name: 'boardSettings',
  defaults,
})
@Injectable()
export class BoardSettingsState {
  
  @Selector()
  static columns(state: BoardSettingsStateModel) {
    return state.board.cols;
  }
  
  @Selector()
  static rows(state: BoardSettingsStateModel) {
    return state.board.rows;
  }
  
  @Selector()
  static blockSize(state: BoardSettingsStateModel) {
    return state.board.blockSize;
  }
}
