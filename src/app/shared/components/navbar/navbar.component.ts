import { Component, Input, OnInit } from '@angular/core';
import { navbar } from 'src/app/classes/fetchers/shared/navbar';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @Input('navbar') navbar: navbar;
    constructor() {}
    ngOnInit(): void {}
}
