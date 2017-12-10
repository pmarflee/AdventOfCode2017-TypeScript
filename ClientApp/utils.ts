export default class Utils {
    static *pairs(input: number[]) {
        for (var i = 0; i < input.length; i++) {
            for (var j = 0; j < input.length; j++) {
                if (i !== j) yield [input[i], input[j]];
            }
        }
    }
}