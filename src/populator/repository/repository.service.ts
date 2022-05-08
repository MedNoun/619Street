import { Injectable } from "@nestjs/common";
import * as fs from "fs";

@Injectable()
export class RepositoryService {
  private obj;
  constructor() {
    this.obj = this.readJson("shared", "populate");
  }
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
  findOnePopulate(id: string) {
    return { ...this.obj, ...this.readJson(id, "populate") };
  }
  findOnePopulateLeight(id: string) {
    return this.readJson(id, "populate");
  }
}
