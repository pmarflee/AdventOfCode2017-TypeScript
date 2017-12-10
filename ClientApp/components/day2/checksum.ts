import Utils from '../../utils';

export default class Checksum {
    static calculate(input: number[][], getResult: (line: number[]) => number): number {
        return input.reduce((acc, c) => acc + getResult(c), 0);
    }

    static minmaxdiff(line: number[]): number {
        var min = line[0], max = line[0];
        for (var num of line) {
            if (num < min) min = num;
            if (num > max) max = num;
        }
        return max - min;
    }

    static evenlydivide(line: number[]): number {
        for (let [a, b] of Utils.pairs(line)) {
            if (a % b === 0) return a / b;
        }
        throw new Error('No pair of numbers was evenly divisible');
    }
}