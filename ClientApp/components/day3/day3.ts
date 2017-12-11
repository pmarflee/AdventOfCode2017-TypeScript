import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

interface Square {
    index: number,
    position: [number, number],
    score: number
}

@Component
export default class Day3Component extends Vue {
    input: number = /*361527*/10;
    part1: number = 0;
    part2: number = 0;

    mounted() {
        this.calculateResults();
    }

    @Watch('input')
    inputChanged() {
        this.calculateResults();
    }

    calculateResults() {
        this.part1 = this.getResult(
            (i, pos) => Math.abs(pos[0]) + Math.abs(pos[1]),
            square => square.index === this.input);
        this.part2 = this.getResult(
            this.scorePart2(),
            square => square.score > this.input);
    }

    getResult(score: (i: number, pos: [number, number]) => number, canScore: (square: Square) => Boolean): number {
        for (var square of this.squares(score)) {
            if (canScore(square)) return square.score;
        }
        return 0;
    }

    scorePart2(): (i: number, pos: [number, number]) => number {
        var scores: any = {};
        return (i: number, pos: [number, number]) => {
            var score: number;
            if (i === 1) {
                score = 1;
            } else {
                score = 0;
                let offsets = [-1, 0, 1];
                for (var xOffset of offsets) {
                    for (var yOffset of offsets) {
                        let offsetPos: [number, number] = [pos[0] + xOffset, pos[1] + yOffset],
                            offsetScore = scores[offsetPos.toString()];
                        score += offsetScore | 0;
                    }
                }
            }
            scores[pos.toString()] = score;
            return score;
        };
    }

    *squares(score: (i: number, pos: [number, number]) => number) {
        var x = 0, y = 0, direction = 0, step = 1;
        for (var i = 1, j = 1; i <= this.input; i++) {
            let pos: [number, number] = [x, y];
            yield { index: i, position: pos, score: score(i, pos) };
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
    }
}