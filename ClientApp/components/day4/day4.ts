import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Utils from '../../utils';

@Component
export default class Day4Component extends Vue {
    input: string = '';
    part1: number = 0;
    part2: number = 0;

    mounted() {
        fetch('./day4/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                this.input = data;
                this.part1 = this.countValidPasscodes(word => word);
                this.part2 = this.countValidPasscodes(word => [...word].sort().toString());
            });
    }

    mustBeAValidPasscode(dict: any, getKey: (word: string) => string): (word: string, dict: any) => boolean {
        return word => {
            var key = getKey(word);
            if (dict[key]) return false;
            dict[key] = word;
            return true;
        }
    } 

    countValidPasscodes(getKey: (word: string) => string): number {
        return Utils.parseAsWords(this.input, undefined, ' ')
            .filter(line => line.every(this.mustBeAValidPasscode({}, getKey)))
            .length;
    }
}