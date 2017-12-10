import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Day2Component extends Vue {
    input: number = 1;
    data: any = {}; 

    get position(): [number, number] {
        var x = 0, y = 0,
            pos: [number, number] = [x, y],
            direction = 0, step = 1;

        for (var i = 1, j = 1; i <= this.input; i++) {
            pos = [x, y];
            this.data[pos.toString()] = this.score(pos);
            if (direction === 0) x++;
            else if (direction === 1) y++;
            else if (direction === 2) x--;
            else if (direction === 3) y--;
            if (j === step || j === step * 2) direction = (direction + 1) % 4;
            if (j === step * 2) {
                step++;
                j = 1;
            } else {
                j++;
            }
        }

        return pos;
    }

    score(position: [number, number]): number {
        return Math.abs(position[0]) + Math.abs(position[1]);
    }

    get part1(): number {
        return this.score(this.position);
    }

    get part2(): number {
        return 0;
    }
}