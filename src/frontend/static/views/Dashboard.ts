import { AbstractView } from './AbstractView.js';

export class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle('Dashboard');
    }

    override async getHtml() {
        return `hello world!`;
    }
}
