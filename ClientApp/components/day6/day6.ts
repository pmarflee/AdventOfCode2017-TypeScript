import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import Utils from '../../utils';

@Component
export default class Day6Component extends Vue {
    loaded: boolean = false;
    testinput: string = '0 2 7 0';
    testpart1: number = 0;
    part1: number = 0;
    testpart2: number = 0;
    part2: number = 0;

    mounted() {
        this.testInputChanged();
        fetch('./day6/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                var numbers = this.parse(data, '\t');
                this.part1 = this.solve(numbers);
                this.part2 = 0;
                this.loaded = true;
            });
    }

    @Watch('testinput')
    testInputChanged() {
        var numbers = this.parse(this.testinput, ' ');
        this.testpart1 = this.solve(numbers);
        this.testpart2 = 0;
    }

    parse(input: string, separator: string): number[] {
        return Utils.parseAsNumbers(input, undefined, separator)[0];
    }

    solve(input: number[]): number {
        var history = {}, redistributions = 0;
        do {
            history[this.toCsv(input)] = 1;
            var bank = this.getBankWithMostBlocks(input),
                getNextIndex = (i: number) => this.getNextIndex(i, input.length),
                index = getNextIndex(bank.i);
            input[bank.i] = 0;
            for (var i = 0; i < bank.n; i++) {
                input[index] = input[index] + 1;
                index = getNextIndex(index);
            }
            redistributions++;
        } while (!history[this.toCsv(input)])
        return redistributions;
    }

    toCsv(input: number[]): string {
        return input.join(',');
    }

    getBankWithMostBlocks(input: number[]): { n: number, i: number } {
        return input.reduce((acc, n, i) => n > acc.n || n === acc.n && i < acc.i ? { n, i } : acc, { n: 0, i: 0 });
    }

    getNextIndex(index: number, count: number): number {
        return (index + 1) % count;
    }
}