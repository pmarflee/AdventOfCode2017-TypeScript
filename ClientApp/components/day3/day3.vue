<template>
    <div>
        <h1>Day 3</h1>
        <div>
            <form>
                <div class="form-group">
                    <label for="input">Input</label>
                    <input id="input" type="number" class="form-control-lg" placeholder="Enter input" v-model="input" min="0"> 
                </div>
                <div>Position: {{ position }}</div>
                <div>Part 1: {{ part1 }}</div>
                <div>Part 2: {{ part2 }}</div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" src="./day3.ts"></script>