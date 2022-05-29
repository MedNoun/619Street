
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navbar } from '../classes/fetchers/shared/navbar';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
    public navbar: navbar = new navbar();
    constructor(
        private readonly activatedRoute: ActivatedRoute,
        readonly router: Router
    ) {
        this.activatedRoute.data.subscribe(
            (data: { content: { navbar: navbar } }) => {
                this.navbar = data.content.navbar;
            }
        );
    }

    ngOnInit(): void {}
}