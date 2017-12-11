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
                this.part1 = this.countValidPasscodes(this.mustNotContainDuplicates);
                this.part2 = this.countValidPasscodes(this.mustNotContainAnagrams);
            });
    }

    mustNotContainDuplicates(dict: any): (word: string, dict: any) => boolean {
        return word => {
            if (dict[word]) return false;
            dict[word] = word;
            return true;
        }
    };

    mustNotContainAnagrams(dict: any): (word: string, dict: any) => boolean {
        return word => {
            var sorted = [...word].sort().toString();
            if (dict[sorted]) return false;
            dict[sorted] = word;
            return true;
        }
    }

    countValidPasscodes(condition: (dict: any) => (word: string, dict: any) => boolean): number {
        return Utils.parseAsWords(this.input, undefined, ' ')
            .filter(line => line.every(condition({})))
            .length;
    }
}