import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Utils from '../../utils';

@Component
export default class Day4Component extends Vue {
    input: string = '';
    part1: number = 0;

    mounted() {
        fetch('./day4/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                this.input = data;
                this.part1 = this.calculatePart1();
            });
    }

    calculatePart1(): number {
        return Utils.parseAsWords(this.input, undefined, ' ')
            .filter(this.isAValidPasscode)
            .length;
    }

    isAValidPasscode(line: string[]): boolean {
        var dict: any = {};
        for (var word of line) {
            if (dict[word]) return false;
            dict[word] = word;
        }
        return true;
    }
}