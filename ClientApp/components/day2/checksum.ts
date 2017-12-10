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
        for (var i = 0; i < line.length; i++) {
            for (var j = 0; j < line.length; j++) {
                if (i !== j && line[i] % line[j] === 0) {
                    return line[i] / line[j];
                }
            }
        }
        return 0;
    }
}