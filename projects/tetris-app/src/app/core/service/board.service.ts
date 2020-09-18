import { Injectable } from '@angular/core';

import { Select } from '@ngxs/store';

import { Observable } from 'rxjs';

import { BoardSettingsState } from '../state/board-settings.state';


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
}
