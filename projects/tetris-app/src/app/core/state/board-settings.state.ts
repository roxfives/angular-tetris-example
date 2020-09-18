import { Injectable } from '@angular/core';
import { State, Selector } from '@ngxs/store';

import { of } from 'rxjs';

export class BoardStateModel {
  public board: {
    cols: number;
    rows: number;
    blockSize: number;
  };
}

const defaults: BoardStateModel = {
  board: {
    cols: 10,
    rows: 20,
    blockSize: 30,
  },
};

@State<BoardStateModel>({
  name: 'boardSettings',
  defaults,
})
@Injectable()
export class BoardState {
  
  @Selector()
  static columns(state: BoardStateModel) {
    return of(state.board.cols);
  }
  
  @Selector()
  static rows(state: BoardStateModel) {
    return of(state.board.rows);
  }
  
  @Selector()
  static blockSize(state: BoardStateModel) {
    return of(state.board.blockSize);
  }
}
