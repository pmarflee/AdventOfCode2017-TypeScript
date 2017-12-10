import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Parser from './parser';
import Checksum from './checksum';

@Component
export default class Day2Component extends Vue {
    test: number = 0;
    input: string = '';
    part1: number = 0;
    part2: number = 0;

    mounted() {
        var testInput = [
            [5, 1, 9, 5],
            [7, 5, 3],
            [2, 4, 6, 8]
        ];
        this.test = Checksum.calculate(testInput, 1);
        fetch('./day2/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                this.input = data;
                let numbers = Parser.parse(data);
                this.part1 = Checksum.calculate(numbers, 1);
                this.part2 = 0;
            });
    }
}