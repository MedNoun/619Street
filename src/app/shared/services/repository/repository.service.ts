import { Injectable } from '@angular/core';
import homePopulation from '../../../../assets/database/homepage/populate.json';

@Injectable()
// this service enables you to read and write to the local database
// the database is in json format in the assests folder
export class RepositoryService {
    constructor() {}

    readJson(src: string) {
        console.log(homePopulation);
    }
}
