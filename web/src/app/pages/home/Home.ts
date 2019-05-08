import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './Home.html';

declare var require: any;

@WithRender
@Component({})
export default class PageHome extends Vue {
}
