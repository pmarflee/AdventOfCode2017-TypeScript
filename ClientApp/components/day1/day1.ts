import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Day1Component extends Vue {
    input: string = '';
    part1: number = 0;
    part2: number = 0;

    mounted() {
        fetch('./day1/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                this.input = data;
                this.part1 = this.calculateChecksum(1);
                this.part2 = this.calculateChecksum(2);
            });
    }

    calculateChecksum(part: number): number {
        var nextDigit = (i: number) => i % this.input.length,
            next = part === 1
                ? (i: number) => nextDigit(i + 1)
                : (i: number) => nextDigit(i + this.input.length / 2);

        return [...this.input].reduce((acc, c, i, arr) => c == this.input[next(i)] ? acc + parseInt(c) : acc, 0);
    }
}