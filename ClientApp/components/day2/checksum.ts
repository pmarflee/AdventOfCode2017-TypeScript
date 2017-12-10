export default class Checksum {
    static calculate(input: number[][], part: number): number {
        var result = part === 1 ? this.minmaxdiff : this.evenlydivide;
        return input.reduce((acc, c) => acc + result(c), 0);
    }

    private static minmaxdiff(line: number[]): number {
        var min = line[0], max = line[0];
        for (var num of line) {
            if (num < min) min = num;
            if (num > max) max = num;
        }
        return max - min;
    }

    private static evenlydivide(line: number[]): number {
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