import { SudokuField, ValidValue } from "./sudoku-field";

export interface SudokuValidatorResultError {
    column: number;
    row: number;
}

export interface SudokuValidatorResult {
    valid: boolean;
    errors?: SudokuValidatorResultError[];
}
export class SudokuValidator {

    public static validate(field: SudokuField): SudokuValidatorResult {
        return {
            valid: false
        };
    }

    public static checkLines(field: SudokuField, y: number): SudokuValidatorResultError[] {
        const errors: SudokuValidatorResultError[] = [];
        let column: ValidValue[] = [];
        let row: ValidValue[] = [];
        for (let i = 0; i < 9; i++) {
            row = [];
            column = [];
            for (let j = 0; j < 9; j++) {
                if (column.includes(field[i][j])) {
                    errors.push({
                        column: j,
                        row: i,
                    });
                }
                if (row.includes(field[j][i])) {
                    errors.push({
                        column: i,
                        row: j,
                    });
                }
                row.push(field[j][i]);
                column.push(field[i][j]);
            }
        }
        return errors;
    }
}
