import fs from 'fs';

fs.readFile('src/poem.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});