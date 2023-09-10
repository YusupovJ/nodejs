import fs from "node:fs";
import path from "node:path";

const text1 = path.join(__dirname, "..", "..", "files", "text.txt");
const text2 = path.join(__dirname, "..", "..", "files", "text2.txt");

const readableStream = fs.createReadStream(text1);

readableStream.on("data", (chunk: string) => {
	console.log(chunk);
	console.log("-----------------------------------------------------------");
});

readableStream.on("open", () => console.log("Start"));
readableStream.on("end", () => console.log("End"));
readableStream.on("error", (err) => console.log(err));

const writebleStream = fs.createWriteStream(text2);

for (let i = 0; i < 20; i++) {
	writebleStream.write(i + "\n", (err) => {
		if (err) {
			return console.log(err);
		}
	});
}

writebleStream.end();
