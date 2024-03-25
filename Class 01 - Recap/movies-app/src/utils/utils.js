import { fileURLToPath } from "url";
import path from "path";

export const createPath = (pathFragments) => {
    const currentFileURL = import.meta.url;
    const currentFilePath = fileURLToPath(currentFileURL);
    const filePathDirectory = path.dirname(currentFilePath);
    return path.join(filePathDirectory, "..", ...pathFragments);
};