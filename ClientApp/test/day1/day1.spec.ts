import { AsyncTest, Expect, Test, TestCase, TestFixture } from 'alsatian';
import Checksum from '../../components/day1/checksum';

@TestFixture('Day 1')
export class Day1Tests {

    @TestCase('1111', 1, 4)
    public checksumTest(input: string, part: number, expected: number) {
        Expect(Checksum.calculate(input, part)).toBe(expected);
    }
}