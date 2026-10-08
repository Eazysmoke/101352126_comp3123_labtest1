const fs = require('fs');
const path = require('path');

const logsPath = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsPath)) {
    const files = fs.readdirSync(logsPath);

    for (const fileName of files) {
        console.log(`delete files...${fileName}`);
        fs.unlinkSync(path.join(logsPath, fileName));
    }

    fs.rmdirSync(logsPath);
} else {
    console.log('Logs directory does not exist.');
}
