import http, { ServerResponse } from "http";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 4000;
const viewsUrl = [__dirname, "..", "views"];

const route = (page: string, response: ServerResponse) => {
    fs.readFile(
        path.resolve(...viewsUrl, page + ".html"),
        { encoding: "utf-8" },
        (err, content) => {
            if (err) throw err;

            response.end(content);
        },
    );
};

const server = http.createServer((request, response) => {
    if (request.method === "GET") {
        response.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8",
        });

        if (request.url === "/") route("index", response);
        if (request.url === "/about") route("about", response);
    } else if (request.method === "POST") {
        const body: Buffer[] = [];
        response.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8",
        });

        request.on("data", (data) => {
            body.push(data);
        });

        request.on("end", () => {
            const message = body[0].toString().split("=")[1];

            response.end(`<h1>Your message: ${message}</h1>`);
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server has been started on url http://localhost:${PORT}/`);
});
