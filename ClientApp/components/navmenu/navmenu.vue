<template>
    <div class="main-nav">
        <div class="navbar navbar-inverse">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">Advent of Code 2017</a>
            </div>
            <div class="clearfix"></div>
            <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
                <div class="navbar-collapse collapse scroll-me">
                    <ul class="nav navbar-nav">
                        <li>
                            <router-link to="/" :exact="true">
                                <span class="glyphicon glyphicon-home"></span> Home
                            </router-link>
                        </li>
                        <li v-for="day in 31">
                            <router-link :to="`/day${day}`" :exact="true">
                                <span class="glyphicon glyphicon-calendar"></span> Day {{day}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </vue-scrollbar>
        </div>
    </div>
</template>

<style src="./navmenu.css" />

<style>
    /* Vue JS Scrollbar */

    /*The Wrapper*/
    .my-scrollbar {
        width: 35%;
        min-width: 300px;
        max-height: 650px;
    }

    /*The Content*/
    .scroll-me {
        min-width: 300px;
    }
</style>
