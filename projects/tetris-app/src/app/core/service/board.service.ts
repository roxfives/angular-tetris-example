import { Injectable } from '@angular/core';

import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

import { Observable } from 'rxjs';

import { BoardSettingsState } from '../state/board-settings.state';
import { Board } from '../state/board.actions';
import { BoardState } from '../state/board.state';


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  @Select(BoardSettingsState.columns)
  public columns$!: Observable<number>;

  @Select(BoardSettingsState.rows)
  public rows$!: Observable<number>;

  @Select(BoardSettingsState.blockSize)
  public blockSize$!: Observable<number>;

  @Select(BoardState.board)
  public board$!: Observable<number[][]>;

  @Dispatch()
  public initBoard(rows: number, cols: number) {
    return new Board.Init(rows, cols);
  }
}
