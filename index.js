const fs = require('fs');

const filePath = './original/spells_en.txt';
const spellFileContent = fs.readFileSync(filePath, 'utf-8');

let changedLines = [];

spellFileContent.split(/\r?\n/).forEach(line => {
    let lineSplit = line.split('^');   
    if (lineSplit[6].length > 0) {
        lineSplit[6] = `${lineSplit[6]} (${lineSplit[1]})`;
    }

    if (lineSplit[7].length > 0) {
        lineSplit[7] = `${lineSplit[7]} (${lineSplit[1]})`;
    }

    if (lineSplit[8].length > 0) {
        lineSplit[8] = `${lineSplit[8]} (${lineSplit[1]})`;
    }
    
    changedLines.push(lineSplit.join('^'));
});

const changedFileContents = changedLines.join('\n');
fs.writeFileSync('./changed/spells_en.txt', changedFileContents, (err) => {
    if (err) {
        console.error(`Error writing to file: ${err}`);
    } else {
        console.log(`File successfully written`);
    }
})
