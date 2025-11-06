const fs = require('fs');

const data = fs.readFileSync(
    '322_book.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);

console.log(data.replaceAll(" ", "(Oleh Onishchenko (⌣̀_⌣́)"));
