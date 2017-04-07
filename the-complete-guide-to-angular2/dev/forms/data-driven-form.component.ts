import { Component, OnInit } from 'angular2/core';
import { FormBuilder, ControlGroup, Validators, Control } from 'angular2/common';

@Component({
    selector: 'my-data-driven',
    template: `
        <div class="container">
            <h2>Sign-up form</h2>
            <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                <div>
                    <label for="mail">Mail</label>
                    <input [ngFormControl]="myForm.controls['email']" type="text" id="mail" #mail="ngForm">
                    <span class="validation-error" *ngIf="!mail.valid">Not valid</span>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input [ngFormControl]="myForm.controls['password']" type="password" id="password" #password="ngForm">
                    <span class="validation-error" *ngIf="!password.valid">Not valid</span>
                </div>
                <div>
                    <label for="confirm-password">Confirm password</label>
                    <input [ngFormControl]="myForm.controls['confirmPassword']" type="password" id="confirm-password" #confirmPassword="ngForm">
                    <span class="validation-error" *ngIf="!confirmPassword.valid">Not valid</span>
                </div>
                <input type="submit" value="Submit" [disabled]="!myForm.valid || myForm.value.password !== myForm.value.confirmPassword">
            </form>

            <div class="container" *ngIf="user != null">
                <h2>You submitted</h2>
                <p>Mail: {{user.email}}</p>
                <p>Password: {{user.password}}</p>
            </div>
        </div>
    `
})

export class DataDrivenFormComponent implements OnInit {
    myForm: ControlGroup;
    user = null;

    constructor(private _formBuilder: FormBuilder) {

    }

    onSubmit(form) {
        console.log(this.myForm);
        this.user = this.myForm.value;
    }

    ngOnInit() {
        this.myForm = this._formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.compose([
                Validators.required,
                hasNumbers
            ])],
            'confirmPassword': ['', Validators.required]
        });
    }
}

function hasNumbers(control: Control): {[s: string]: boolean} {
    if (!control.value.match('\\d+')) {
        return {noNumbers: true};
    }
}