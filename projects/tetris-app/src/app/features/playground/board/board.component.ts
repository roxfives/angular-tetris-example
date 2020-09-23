import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

import { first, tap, finalize } from 'rxjs/operators';

import { BoardService } from '../../../core/service/board.service';
import { Piece } from '../pieces/piece';
import { PieceImpl } from '../pieces/piece-j';


@Component({
  selector: 'tetris-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  columns!: number;
  rows!: number;
  blockSize!: number;
  
  piece!: Piece;
  
  @ViewChild('board')
  boardRef!: ElementRef<HTMLCanvasElement>;
  board$!: Observable<number[][]>;

  ctx!: CanvasRenderingContext2D;
  points!: number;
  lines!: number;
  level!: number;
  
  constructor(private boardService: BoardService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initBoardParams().pipe(
      finalize(() => 
        this.initBoard())
    )
    .subscribe();
  }

  private initBoard() {
    this.board$ = this.boardService.board$;
    this.board$.subscribe(board => 
      console.log(board));
    // Get the 2D context that we draw on.
    const aux = this.boardRef.nativeElement.getContext('2d');
    if (aux) {
      this.ctx = aux;
      console.log(this.ctx);
    } else {
      console.log('Canvas context is null');
      return;
    }

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = this.columns * this.blockSize;
    this.ctx.canvas.height = this.rows * this.blockSize;
  }

  private initBoardParams() {
    const column$ = this.boardService.columns$.pipe(first());
    const row$ = this.boardService.rows$.pipe(first());
    const block$ = this.boardService.blockSize$.pipe(first());

    return combineLatest([column$, row$, block$])
      .pipe(
        tap(([cols, rows, blocks]) => {
          this.columns = cols;
          this.rows = rows;
          this.blockSize = blocks;
        })
      );
  }

  play() {
    this.boardService.initBoard(this.rows, this.columns);

    this.piece = new PieceImpl(this.ctx);
    this.piece.draw(this.blockSize);
  }
}
