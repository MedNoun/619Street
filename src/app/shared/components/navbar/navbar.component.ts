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
    ad: number = -1;
    constructor(
        private readonly scripty: ScriptService,
        private readonly orderService: OrderService
    ) {
        this.numberItems = orderService.length;
    }

    animate() {
        this.change = true;
        this.ad = 1;
        setTimeout(() => {
            this.change = false;
        }, 2000);
        setTimeout(() => {
            this.ad = -1;
        }, 1200);
    }

    ngOnInit(): void {
        //onchange of the current command
        this.orderService.onCurrentChange().subscribe((value) => {
            this.numberItems = value;
            this.animate();
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
