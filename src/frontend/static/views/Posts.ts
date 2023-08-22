import { AbstractView } from './AbstractView.js';

export class Posts extends AbstractView {
    constructor() {
        super();
        this.setTitle('Posts');
    }

    async getHtml(): Promise<string> {
        return `
        <h1>Posts!</h1>
        `;
    }
}
