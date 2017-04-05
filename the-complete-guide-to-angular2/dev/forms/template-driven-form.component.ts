import {Component} from 'angular2/core';

@Component({
    selector: 'my-template-driven',
    template: `
        <div class="container">
            <h2>Sign-up form</h2>
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <div>
                    <label for="mail">Mail</label>
                    <input ngControl="email" type="text" id="mail" required>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input ngControl="password" type="password" id="password" required>
                </div>
                <div>
                    <label for="confirm-password">Confirm password</label>
                    <input ngControl="confirm-password" type="password" id="confirm-password" required>
                </div>
                <input type="submit" value="Submit">
            </form>
        </div>
    `
})

export class TemplateDrivenFormComponent {
    onSubmit(form) {
        console.log(form.value);
    }
}