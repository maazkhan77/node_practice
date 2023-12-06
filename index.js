const fsPromises = require("fs").promises;
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'files', 'reply.txt'), "This is reply text")
        await fsPromises.appendFile(path.join(__dirname, 'files', 'reply.txt'), "\n\n Ok I understand")
        await fsPromises.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'newReply.txt'), 'utf8')
        console.log(newData)
    } catch (error) {
        console.error(error);
    }
}

fileOps()

//exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
