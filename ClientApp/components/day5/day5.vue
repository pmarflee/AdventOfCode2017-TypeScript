<template>
    <div>
        <h1>Day 5</h1>
        <h2 v-if="loaded">Part 1: {{ part1 }}</h2>
        <h2 v-if="loaded">Part 2: {{ part2 }}</h2>
        <p v-else>Loading...</p>
    </div>
</template>

<script lang="ts" src="./day5.ts"></script>