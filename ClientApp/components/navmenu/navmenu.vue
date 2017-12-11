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
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/" :exact="true">
                            <span class="glyphicon glyphicon-home"></span> Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/day1" :exact="true">
                            <span class="glyphicon glyphicon-calendar"></span> Day 1
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/day2" :exact="true">
                            <span class="glyphicon glyphicon-calendar"></span> Day 2
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/day3" :exact="true">
                            <span class="glyphicon glyphicon-calendar"></span> Day 3
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/day4" :exact="true">
                            <span class="glyphicon glyphicon-calendar"></span> Day 4
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style src="./navmenu.css" />
