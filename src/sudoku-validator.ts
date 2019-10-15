/*!
 * Source https://github.com/donmahallem/SudokuNode
 */

import { SudokuField, ValidValue } from "./sudoku-field";

export interface ISudokuValidatorResultError {
    column: number;
    row: number;
}

export interface ISudokuValidatorResult {
    valid: boolean;
    errors?: ISudokuValidatorResultError[];
}
export class SudokuValidator {

    public static validate(field: SudokuField): ISudokuValidatorResult {
        return {
            valid: false,
        };
    }

    public static checkLines(field: SudokuField, y: number): ISudokuValidatorResultError[] {
        const errors: ISudokuValidatorResultError[] = [];
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
