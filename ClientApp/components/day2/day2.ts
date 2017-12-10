import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Parser from './parser';
import Checksum from './checksum';

@Component
export default class Day2Component extends Vue {
    input: string = '';
    part1test: number = 0;
    part1: number = 0;
    part2test: number = 0;
    part2: number = 0;

    mounted() {
        var part1TestInput = [
            [5, 1, 9, 5],
            [7, 5, 3],
            [2, 4, 6, 8]
        ],
            part2TestInput = [
            [5, 2, 9, 8],
            [9, 4, 7, 3],
            [3, 8, 6, 5]
        ];
        this.part1test = Checksum.calculate(part1TestInput, 1);
        this.part2test = Checksum.calculate(part2TestInput, 2);
        fetch('./day2/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                this.input = data;
                let numbers = Parser.parse(data);
                this.part1 = Checksum.calculate(numbers, 1);
                this.part2 = Checksum.calculate(numbers, 2);
            });
    }
}