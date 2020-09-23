import { Injectable } from '@angular/core';
import { State, Action, StateContext, Store, Selector } from '@ngxs/store';
import { Board } from './board.actions';

export class BoardStateModel {
  public board!: number[][];
}

const defaults = {
  board: [[]]
};

@State<BoardStateModel>({
  name: 'board',
  defaults
})
@Injectable()
export class BoardState {

  private initBoard(cols: number, rows: number) {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
  }

  @Selector()
  static board(state: BoardStateModel) {
    return state.board;
  }

  @Action(Board.Init)
  // @Immutable()
  initiateBoard({ setState }: StateContext<BoardStateModel>, { rows, cols }: Board.Init) {
    const board = this.initBoard(cols, rows);

    setState({board: board});
  }
}
