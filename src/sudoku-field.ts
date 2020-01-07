/*!
 * Source https://github.com/donmahallem/SudokuNode
 */

export type ValidCoordinate = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type ValidValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export class SudokuField {
    private readonly field: ValidValue[][];
    private readonly validValueRow: ValidValue[][];
    public constructor() {
        this.field = new Array(9).fill(0).map((val) => new Array(9).fill(0));
    }
    public getCell(x: ValidCoordinate, y: ValidCoordinate): ValidValue {
        return this.field[x][y];
    }

    public setCell(x: ValidCoordinate, y: ValidCoordinate, value: ValidValue): void {
        this.field[x][y] = value;
    }

    public rowContains(y: ValidCoordinate, value: ValidValue): boolean {
        return false;
    }

    public calculateBlocks(): any {
        const row: ValidValue[][] = new Array(9).fill([]);
        const col: ValidValue[][] = new Array(9).fill([]);
        const blo: ValidValue[][] = new Array(9).fill([]);
        for (let x: ValidCoordinate = 0; x < 9; x++) {
            for (let y: ValidCoordinate = 0; y < 9; y++) {
                if (this.field[x][y] === 0) {
                    continue;
                }
                row[y].push(this.field[x][y]);
                col[x].push(this.field[x][y]);
                const blockId: ValidCoordinate = this.coordinateToBlock(x as ValidCoordinate, y as ValidCoordinate);
                blo[blockId].push(this.field[x][y]);
            }
        }
        return [row, col, blo];
    }
    public columnContains(x: ValidCoordinate, value: ValidValue): boolean {
        return false;
    }

    public coordinateToBlock(x: ValidCoordinate, y: ValidCoordinate): ValidCoordinate {
        return ((y * 3) + (x % 3)) as ValidCoordinate;
    }
}
