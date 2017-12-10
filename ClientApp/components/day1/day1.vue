<template>
    <div>
        <h1>Day 1</h1>
        <h2 v-if="input.length">Part 1: {{ part1 }}</h2>
        <h2 v-if="input.length">Part 2: {{ part2 }}</h2>
        <p v-else>Loading...</p>
    </div>
</template>

<script lang="ts" src="./checksum.ts"></script>
<script lang="ts" src="./day1.ts"></script>