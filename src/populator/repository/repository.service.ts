import { Injectable } from "@nestjs/common";
import * as fs from "fs";

@Injectable()
export class RepositoryService {
  constructor() {}
  readJson(resource: string, id: string) {
    let url: string = "src/assets/database/" + resource + "/" + id + ".json";
    const fileContent = fs.readFileSync(url, "utf-8");
    const json = JSON.parse(fileContent);

    return json;
  }
  writeToJson(resource: string, id: string, data) {
    let url: string = "src/assets/database/" + resource + "/" + id + ".json";
    fs.writeFileSync(url, JSON.stringify(data));
  }
  findOne(id: string) {
    return this.readJson(id, "populate");
  }
  findCategoriePageContent() {
    this.readJson("categoriepage", "populate");
  }
}
