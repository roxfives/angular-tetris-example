export interface Piece {
    x: number;
    y: number;
    color: string;
    shape: number[][];

    draw: (blockSize: number) => void;
}