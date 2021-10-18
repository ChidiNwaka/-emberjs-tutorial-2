import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ItemController extends Controller {

    @tracked
    color = "red";

    get sourceImage() {
        return `/assets/images/beats-solo-${this.color}.png`;
    }

    @action
    onChangeColor(newColor) {
        this.color = newColor;
    }

}
