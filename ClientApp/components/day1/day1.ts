import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Checksum from './checksum';

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
                this.part1 = Checksum.calculate(data, 1);
                this.part2 = Checksum.calculate(data, 2);
            });
    }
}