import { AbstractView } from './AbstractView.js';

export class Settings extends AbstractView {
    constructor() {
        super();
        this.setTitle('Settings');
    }

    override async getHtml(): Promise<string> {
        return `
        <h1>Settings!</h1>
        `;
    }
}
