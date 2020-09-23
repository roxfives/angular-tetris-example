export namespace Board {
  export class Init {
    static readonly type = '[Board] Initializing board';
    constructor(public rows: number, public cols: number) { }
  }
}
