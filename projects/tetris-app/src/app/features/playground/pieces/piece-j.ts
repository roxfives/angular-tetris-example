import { Piece } from "./piece";


export class PieceImpl 
    implements Piece {
    
    x!: number;
    y!: number;
    color!: string;
    shape!: number[][];
  
    constructor(private ctx: CanvasRenderingContext2D) {
      this.spawn();
    }
  
    spawn() {
      this.color = 'blue';
      this.shape = [[2, 0, 0], [2, 2, 2], [0, 0, 0]];
  
      // Position where the shape spawns.
      this.x = 3;
      this.y = 0;
    }

    draw(blockSize: number) {
        this.ctx.fillStyle = this.color;
        this.ctx.scale(blockSize, blockSize);
        
        this.shape.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value > 0) {
              // this.x & this.y = position on the board
              // x & y position are the positions of the shape
              this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
            }
          });
        });
    }
}