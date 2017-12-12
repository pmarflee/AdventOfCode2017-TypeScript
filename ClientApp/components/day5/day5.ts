import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Day5Component extends Vue {
    loaded: boolean = false;
    part1: number = 0;
    part2: number = 0;

    mounted() {
        fetch('./day5/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                this.loaded = true;
            });
    }
}