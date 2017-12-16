import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import Utils from '../../utils';

interface IState {
    cycles: number,
    history: {}
}

@Component
export default class Day6Component extends Vue {
    loaded: boolean = false;
    testinput: string = '0 2 7 0';
    testpart1: number = 0;
    part1: number = 0;
    testpart2: number = 0;
    part2: number = 0;
    getResultPart1: (state: IState, input: number[]) => number = (state, input) => state.cycles;
    getResultPart2: (state: IState, input: number[]) => number = (state, input) =>
        state.cycles - state.history[this.toCsv(input)];

    mounted() {
        this.testInputChanged();
        fetch('./day6/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                var numbers = this.parse(data, '\t');
                this.part1 = this.solve(numbers, this.getResultPart1);
                this.part2 = this.solve(numbers, this.getResultPart2);
                this.loaded = true;
            });
    }

    @Watch('testinput')
    testInputChanged() {
        var numbers = this.parse(this.testinput, ' ');
        this.testpart1 = this.solve(numbers, this.getResultPart1);
        this.testpart2 = this.solve(numbers, this.getResultPart2);
    }

    parse(input: string, separator: string): number[] {
        return Utils.parseAsNumbers(input, undefined, separator)[0];
    }

    solve(input: number[], getResult: (state: IState, input: number[]) => number): number {
        var state: IState = { cycles: 0, history: {} },
            getNextIndex = (i: number) => this.getNextIndex(i, input.length);
        do {
            state.history[this.toCsv(input)] = state.cycles;
            var bank = this.getBankWithMostBlocks(input),
                index = getNextIndex(bank.i);
            input[bank.i] = 0;
            for (var i = 0; i < bank.n; i++) {
                input[index] = input[index] + 1;
                index = getNextIndex(index);
            }
            state.cycles++;
        } while (!state.history[this.toCsv(input)])
        return getResult(state, input);
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