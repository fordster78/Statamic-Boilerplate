import SlideoutMenu from './components/SlideoutMenu.vue';

/**
 * First we will load all of this project's JavaScript dependencies.
 * We make no assumptions as to what you need or want to use.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('slideout-menu', SlideoutMenu);


const site = new Vue({
    el: '#site',
    data: {
        isOpen: false
    }
});
