export default class Checksum {
    static calculate(input: number[][], part: number): number {
        return input.reduce((acc, c) => acc + this.minmaxdiff(c), 0);
    }

    private static minmaxdiff(line: number[]): number {
        var min = line[0], max = line[0];
        for (var num of line) {
            if (num < min) min = num;
            if (num > max) max = num;
        }
        return max - min;
    }
}