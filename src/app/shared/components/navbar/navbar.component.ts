import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { navbar } from 'src/app/classes/fetchers/shared/navbar';
import { ScriptService } from 'src/app/script/script.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @Input('navbar') navbar: navbar;

    constructor(private readonly scripty: ScriptService) {}
    ngOnInit(): void {
        this.scripty
            .load('nav', 'perlin')
            .then((data) => {
                console.log('script loaded ', data);
            })
            .catch((error) => console.log(error));
    }
}
