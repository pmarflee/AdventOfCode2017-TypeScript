import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import Utils from '../../utils';

@Component
export default class Day5Component extends Vue {
    loaded: boolean = false;
    testinput: string = '0 3 0 1 -3';
    testpart1: number = 0;
    part1: number = 0;
    part2: number = 0;

    mounted() {
        this.testInputChanged();
        fetch('./day5/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                var parsed = Utils.parseAsNumbers(data, undefined, ' ').map(line => line[0]);
                this.part1 = this.getSteps(parsed);
                this.loaded = true;
            });
    }

    @Watch('testinput')
    testInputChanged() {
        var parsed = Utils.parseAsNumbers(this.testinput, undefined, ' ');
        this.testpart1 = this.getSteps(parsed[0]);
    }

    getSteps(input: number[]): number {
        var steps = 0, position = 0;

        do {
            let next = position + input[position];
            input[position] = input[position] + 1;
            position = next;
            steps++;
        } while (position < input.length);

        return steps;
    }
}