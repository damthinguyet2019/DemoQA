import * as fs from 'fs';
import * as path from 'path';
function readDataFromCSV(filePath: string){
    const content = fs.readFileSync(filePath, 'utf-8');
    const [headerLine, ...lines] = content.trim().split('\n');
    const headers = headerLine.split(',');
    return lines.map(line => {
    const values = line.split(',');
    return headers.reduce((obj, header, index) => {
        obj[header.trim()] = values[index].trim();
        return obj;
    }, {} as Record<string, string>);   
}   
);
}