export declare class RepositoryService {
    constructor();
    readJson(resource: string, id: string): any;
    writeToJson(resource: string, id: string, data: any): void;
    findOne(id: string): any;
    findCategoriePageContent(): void;
}
