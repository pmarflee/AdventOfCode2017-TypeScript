export default class Parser {
    static parse(input: string): number[][] {
        return input.split('\r\n').map(line => line.split('\t').map(n => parseInt(n)));
    }
}