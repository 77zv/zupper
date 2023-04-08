import * as fflate from 'fflate';
import fs from 'fs/promises';
import {readdir} from 'node:fs/promises';

// read a file from disk and compress it
export class Zupper {

    private static async compress(directory: string): Promise<Uint8Array[]> {
        const files = await readdir(directory);
        const compressedArray: Uint8Array[] = [];

        for (let i = 0; i < files.length; i++) {
            const file = await fs.readFile(`${directory}/${files[i]}`);
            compressedArray.push(await new Uint8Array(file));
        }
        return compressedArray;
    }


    private static async zip(massiveFile: Uint8Array[], path: string) {
        // this creates an object for the shit that needs be passed into .zipSync
        const zipData = Object.fromEntries(massiveFile.map((file, index) => [`zippedFile${index}.docx`, file]));

        const zip = fflate.zipSync(zipData, {level: 9});
        await fs.writeFile(path, zip);
    }

    public static async zipAndCompressDirectory(directory: string, path: string): Promise<void> {
        const massiveFiles = await Zupper.compress(directory);
        await Zupper.zip(massiveFiles, path);
    }
}