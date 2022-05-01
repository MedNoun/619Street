import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { cartItem } from 'src/app/classes/models/cartItem';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    currentCommand: cartItem[] = [];
    addedCommand: Subject<number> = new Subject<number>();

    constructor() {
        this.currentCommand = JSON.parse(localStorage.getItem('items') || '[]');
    }

    onCurrentChange() {
        return this.addedCommand.asObservable();
    }
    get length(): number {
        return this.currentCommand.length;
    }
    get items() {
        return this.currentCommand.slice(0);
    }

    add(item: cartItem) {
        const index: number = _.findIndex(this.currentCommand, (e) => {
            return (
                e.id === item.id &&
                e.color === item.color &&
                e.size === item.size
            );
        });

        if (index === -1) {
            this.currentCommand.push(item);
        } else {
            this.currentCommand[index].quantity += item.quantity;
        }

        this.addedCommand.next(this.length);
        this.syncItems();
    }
    syncItems() {
        // sync the data in the local storage
        localStorage.setItem('items', JSON.stringify(this.currentCommand));
    }
}
