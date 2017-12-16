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
                var parsed = this.parse(data);
                this.part1 = 0;
                this.part2 = 0;
                this.loaded = true;
            });
    }

    @Watch('testinput')
    testInputChanged() {
        var parsed = this.parse(this.testinput);
        this.testpart1 = 0;
        this.testpart2 = 0;
    }

    parse(input: string): number[] {
        return Utils.parseAsNumbers(input, undefined, '\t')[0];
    }
}