import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Day2Component extends Vue {
    input: number = 1;

    mounted() {
        /*for (var i = 0; i < this.input; i++) {

        }*/
    }

    get position(): [number, number] {
        var x = 0, y = 0, direction = 0, step = 1;

        for (var i = 1, j = 1; i < this.input; i++) {
            switch (direction) {
                case 0:
                    x++;
                    break;
                case 1:
                    y++;
                    break;
                case 2:
                    x--;
                    break;
                case 3:
                    y--;
                    break;
            }
            if (j === step || j === step * 2) {
                direction = (direction + 1) % 4;
            }
            if (j === step * 2) {
                step++;
                j = 1;
            } else {
                j++;
            }
        }

        return [x, y];
    }

    get part1(): number {
        var [x, y] = this.position;
        return Math.abs(x) + Math.abs(y);
    }

    get part2(): number {
        return 0;
    }
}