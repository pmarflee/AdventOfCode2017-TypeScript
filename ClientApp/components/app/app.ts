import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import VueScrollbar from 'vue2-scrollbar';
Vue.component('vue-scrollbar', VueScrollbar);
import 'vue2-scrollbar/dist/style/vue2-scrollbar.css';

@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue'),
    }
})
export default class AppComponent extends Vue {
}
