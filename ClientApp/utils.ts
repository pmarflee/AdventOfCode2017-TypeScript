export default class Utils {
    static parse(input: string, lineSeparator: string = '\r\n', wordSeparator: string): number[][] {
        return input.split('\r\n').map(line => line.split(wordSeparator).map(n => parseInt(n)));
    }
    static *pairs(input: number[]) {
        for (var i = 0; i < input.length; i++) {
            for (var j = 0; j < input.length; j++) {
                if (i !== j) yield [input[i], input[j]];
            }
        }
    }
}