export default class Checksum {
    static calculate(input: string, part: number): number {
        var nextDigit = (i: number) => i % input.length,
            next = part === 1
                ? (i: number) => nextDigit(i + 1)
                : (i: number) => nextDigit(i + input.length / 2);
        return [...input].reduce((acc, c, i, arr) => c == input[next(i)] ? acc + parseInt(c) : acc, 0);
    }
}