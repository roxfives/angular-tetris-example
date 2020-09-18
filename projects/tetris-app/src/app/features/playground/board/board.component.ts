import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { BoardService } from '../../../core/service/board.service';


@Component({
  selector: 'tetris-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  columns$!: Observable<number>;
  rows$!: Observable<number>;
  block$!: Observable<number>;
  
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.columns$ = this.boardService.columns$;
    this.rows$ = this.boardService.rows$;
    this.block$ = this.boardService.blockSize$;
  }
}
