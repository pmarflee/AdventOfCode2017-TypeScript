import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import Utils from '../../utils';

@Component
export default class Day5Component extends Vue {
    loaded: boolean = false;
    testinput: string = '0 3 0 1 -3';
    testpart1: number = 0;
    part1: number = 0;
    testpart2: number = 0;
    part2: number = 0;
    getNextOffsetPart1: (offset: number) => number = offset => offset + 1;
    getNextOffsetPart2: (offset: number) => number = offset => offset >= 3 ? offset - 1 : offset + 1;

    mounted() {
        this.testInputChanged();
        fetch('./day5/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                var parsed = Utils.parseAsNumbers(data, undefined, ' ').map(line => line[0]);
                this.part1 = this.getSteps(Utils.clone(parsed), this.getNextOffsetPart1);
                this.part2 = this.getSteps(Utils.clone(parsed), this.getNextOffsetPart2);
                this.loaded = true;
            });
    }

    @Watch('testinput')
    testInputChanged() {
        var parsed = Utils.parseAsNumbers(this.testinput, undefined, ' ')[0];
        this.testpart1 = this.getSteps(Utils.clone(parsed), this.getNextOffsetPart1);
        this.testpart2 = this.getSteps(Utils.clone(parsed), this.getNextOffsetPart2);
    }

    getSteps(input: number[], nextOffset: (offset: number) => number): number {
        var steps = 0, position = 0;
        while (position < input.length) {
            let offset = input[position],
                next = position + offset;
            input[position] = nextOffset(offset);
            position = next;
            steps++;
        } 
        return steps;
    }
}