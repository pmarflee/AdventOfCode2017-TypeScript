import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Utils from '../../utils';

@Component
export default class Day4Component extends Vue {
    loaded: boolean = false;
    part1: number = 0;
    part2: number = 0;

    mounted() {
        fetch('./day4/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                var words = Utils.parseAsWords(data, undefined, ' ');
                this.part1 = this.countValidPasscodes(words, word => word);
                this.part2 = this.countValidPasscodes(words, word => [...word].sort().toString());
                this.loaded = true;
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

    countValidPasscodes(words: string[][], getKey: (word: string) => string): number {
        return words.filter(line => line.every(this.mustBeAValidPasscode({}, getKey))).length;
    }
}