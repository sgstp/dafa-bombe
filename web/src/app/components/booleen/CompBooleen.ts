import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './CompBooleen.html';
import { Prop } from 'vue-property-decorator';

@WithRender
@Component({})
export default class CompBooleen extends Vue {
    @Prop()
    val: boolean;

    get styleIcone() {
        let css = 'fa fa-lg';
        if (this.val) {
            css += ' fa-check text-success';
        } else {
            css += ' fa-times text-danger';
        }
        return css;
    }
}
