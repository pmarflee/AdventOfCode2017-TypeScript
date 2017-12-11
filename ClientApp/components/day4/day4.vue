<template>
    <div>
        <h1>Day 4</h1>
        <h2 v-if="loaded">Part 1: {{ part1 }}</h2>
        <h2 v-if="loaded">Part 2: {{ part2 }}</h2>
        <p v-else>Loading...</p>
    </div>
</template>

<script lang="ts" src="./day4.ts"></script>