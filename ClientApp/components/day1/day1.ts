import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Day1Component extends Vue {
    input: string = '';
    part1: number = 0;
    part2: number = 0;

    mounted() {
        fetch('./day1/input.txt', { mode: 'no-cors' })
            .then(response => response.text() as Promise<string>)
            .then(data => {
                this.input = data;
                this.part1 = this.calculateChecksum(this.input, 1);
                this.part2 = this.calculateChecksum(this.input, 2);
            });
    }

    calculateChecksum(input: string, part: number): number {
        var nextDigit = (i: number) => i % input.length,
            next = part === 1
                ? (i: number) => nextDigit(i + 1)
                : (i: number) => nextDigit(i + input.length / 2),
            result = 0;

        for (var i = 0; i < input.length; i++) {
            if (input[i] === input[next(i)]) {
                result += parseInt(input[i]);
            }
        }

        return result;
    }
}