export default class Utils {
    static parseAsNumbers(input: string, lineSeparator: string = '\r\n', wordSeparator: string): number[][] {
        return Utils.parse(input, lineSeparator, wordSeparator, word => parseInt(word));
    }
    static parseAsWords(input: string, lineSeparator: string = '\r\n', wordSeparator: string): string[][] {
        return Utils.parse(input, lineSeparator, wordSeparator, word => word);
    }
    static parse<T>(input: string, lineSeparator: string = '\r\n', wordSeparator: string,
        wordParser: (word: string) => T): T[][] {
        return input.split('\r\n').map(line => line.split(wordSeparator).map(word => wordParser(word)));
    }
    static *pairs(input: number[]) {
        for (var i = 0; i < input.length; i++) {
            for (var j = 0; j < input.length; j++) {
                if (i !== j) yield [input[i], input[j]];
            }
        }
    }
}