import { Component, OnInit, Input } from '@angular/core';
import { form } from 'src/app/classes/fetchers/registration/form';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input('form') form: form;
    constructor() {}

    ngOnInit(): void {}
}
