export declare class RepositoryService {
    private obj;
    constructor();
    readJson(resource: string, id: string): any;
    writeToJson(resource: string, id: string, data: any): void;
    findOnePopulate(id: string): any;
    findOnePopulateLeight(id: string): any;
}
