import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { navbar } from 'src/app/classes/fetchers/shared/navbar';
import { ScriptService } from 'src/app/script/script.service';
import { OrderService } from '../../services/order.service';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    styles: [``]
})
export class NavbarComponent implements OnInit {
    @Input('navbar') navbar: navbar;
    numberItems: number = 0;
    change: boolean = false;
    constructor(
        private readonly scripty: ScriptService,
        private readonly orderService: OrderService
    ) {
        this.numberItems = orderService.length;
    }

    ngOnInit(): void {
        //onchange of the current command
        this.orderService.onCurrentChange().subscribe((value) => {
            this.numberItems = value;
        });
    }
    ngAfterViewInit(): void {
        //external script loader
        this.scripty
            .load('nav', 'perlin', 'navbar')
            .then((data) => {
                console.log('script loaded ', data);
            })
            .catch((error) => console.log(error));
    }
}
