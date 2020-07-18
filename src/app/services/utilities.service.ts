import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";

@Injectable()
export class UtilitiesService {

  getFilename(path: string) {
    const parts = path.split("/");

    return parts[parts.length - 1];
  }

  documentsPath(filename: string) {
    return `${fs.knownFolders.documents().path}/${filename}`;
  }
}
