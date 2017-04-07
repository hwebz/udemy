import {Component} from 'angular2/core';

@Component({
    selector: 'my-template-driven',
    template: `
        <div class="container">
            <h2>Sign-up form</h2>
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <div>
                    <label for="mail">Mail</label>
                    <input ngControl="email" type="text" id="mail" required #email="ngForm">
                    <span class="validation-error" *ngIf="!email.valid">Not valid</span>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input ngControl="password" type="password" id="password" required #password="ngForm">
                    <span class="validation-error" *ngIf="!password.valid">Not valid</span>
                </div>
                <div>
                    <label for="confirm-password">Confirm password</label>
                    <input ngControl="confirm-password" type="password" id="confirm-password" required #confirmPassword="ngForm">
                    <span class="validation-error" *ngIf="!confirmPassword.valid">Not valid</span>
                </div>
                <input type="submit" value="Submit" [disabled]="!f.valid || password.value !== confirmPassword.value">
            </form>

            <div class="container" *ngIf="user != null">
                <h2>You submitted</h2>
                <p>Mail: {{user.mail}}</p>
                <p>Password: {{user.password}}</p>
            </div>
        </div>
    `
})

export class TemplateDrivenFormComponent {
    user = null;

    onSubmit(form) {
        console.log(form.controls);

        this.user = {
            mail: form.value['email'],
            password: form.controls['password'].value
        };
    }
}