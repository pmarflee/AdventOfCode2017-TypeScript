import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Day4Component extends Vue {
    input: string = '';
    part1: number = 0;

    mounted() {
        fetch('./day4/input.txt')
            .then(response => response.text() as Promise<string>)
            .then(data => {
                this.input = data;
            });
    }
}