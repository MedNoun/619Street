import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { cartItem } from 'src/app/classes/models/cartItem';
import { product } from 'src/app/classes/models/product';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    _currentCommand: cartItem[] = [];
    _wishlist: product[] = [];
    addedCommand: Subject<number> = new Subject<number>();
    constructor() {
        this._currentCommand = JSON.parse(
            localStorage.getItem('items') || '[]'
        );
        this._wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    }

    onCurrentChange() {
        return this.addedCommand.asObservable();
    }
    get length(): number {
        return this._currentCommand.length;
    }
    get wishlist() {
        return this._wishlist.slice(0);
    }
    get currentCommand() {
        return this._currentCommand.slice(0);
    }
    copyObj(src: any, dest: any) {
        Object.assign(dest, src);
    }
    findIndex(array: any[], item: any, ...args: string[]): number {
        const index: number = _.findIndex(array, (e) => {
            let test: boolean = true;
            for (let arg of args) {
                test = e[arg] === item[arg];
                if (!test) return false;
            }
            return true;
        });
        return index;
    }
    //cart operations
    add(item: cartItem) {
        const index: number = this.findIndex(
            this._currentCommand,
            item,
            'id',
            'color',
            'size'
        );
        if (index === -1) {
            this._currentCommand.push(item);
        } else {
            this._currentCommand[index].quantity += item.quantity;
        }

        this.addedCommand.next(this.length);
        this.syncItems('items', this._currentCommand);
    }
    remove(item: cartItem) {
        const index: number = this.findIndex(this._currentCommand, item, 'id');
        if (index !== -1) {
            this._currentCommand.splice(index, 1);
            this.addedCommand.next(this.length);
            this.syncItems('items', this._currentCommand);
        }
    }
    //wishlist operations

    like(item: product) {
        const index: number = this.findIndex(this.wishlist, item, 'id');
        if (index === -1) {
            this._wishlist.push(item);
            this.syncItems('wishlist', this._wishlist);
        }
    }
    unlike(item: product) {
        const filteredList: product[] = this._wishlist.filter((e) => {
            return e.id !== item.id;
        });
        this._wishlist = filteredList;
        console.log(this.wishlist, 'wishlist ! ');
        this.syncItems('wishlist', this._wishlist);
    }

    // sync the data in the local storage
    syncItems(name: string, items: cartItem[] | product[]) {
        localStorage.setItem(name, JSON.stringify(items));
    }
}
