<template>
    <div>
        <h1>Day 2</h1>
        <h2 v-if="input.length">Test: {{ test }}</h2>
        <h2 v-if="input.length">Part 1: {{ part1 }}</h2>
        <h2 v-if="input.length">Part 2: {{ part2 }}</h2>
        <p v-else>Loading...</p>
    </div>
</template>

<script lang="ts" src="./day2.ts"></script>