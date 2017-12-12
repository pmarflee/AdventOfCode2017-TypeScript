<template>
    <div>
        <h1>Day 5</h1>
        <div>
            <form>
                <div class="form-group">
                    <label for="testinput">Input</label>
                    <input id="testinput" type="text" class="form-control" placeholder="Enter test input" v-model="testinput"> 
                </div>
                <div>Part 1 (Test): {{ testpart1 }}</div>
                <div>Part 1: {{ part1 }}</div>
                <div>Part 2 (Test): {{ testpart2 }}</div>
                <div>Part 2: {{ part2 }}</div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" src="./day5.ts"></script>