import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
    @Input('color') color: string = 'white';
    @Input('id') id: string;
    @Input('check-mark') mark: boolean = false;

    @Output('check')
    check = new EventEmitter<any>();
    public checked: number = -1;

    constructor() {}

    handleChange(e) {
        this.checked *= -1;

        let obj: { id: string; check: number; event: Event } = {
            id: this.id,
            check: this.checked,
            event: e
        };

        console.log(obj);
        this.check.emit(obj);
    }
    ngOnInit(): void {}
}
