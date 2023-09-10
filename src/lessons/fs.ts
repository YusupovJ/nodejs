import fs, { mkdir } from "node:fs";
import path from "node:path";

/* Ад колбэков */
fs.mkdir(path.join(__dirname, "dir"), { recursive: true }, (err) => {
	if (err) return console.log(err);

	console.log("папка создана");

	fs.writeFile(path.join(__dirname, "dir", "style.css"), "* {\n\tpadding: 0px;\n}", (err) => {
		if (err) return console.log(err);

		console.log("Стили созданы");
	});
});

/* Создаем async версии фунций или юзаем fs/promises */

const mkdirAsync = (path: string, recursive: boolean = false) => {
	return new Promise((resolve, reject) => {
		fs.mkdir(path, { recursive }, (err) => {
			if (err) return reject(err);

			resolve(null);
		});
	});
};

mkdirAsync(path.join(__dirname, "dir2"));

// .mkdir - создает папку
// .rmdir - удаляет папку
// .writeFile - создает файл и записывает туда инфо
// .appendFile - добавляет текст в конец файла
// .readFile - читает файл
// .rm - удаляет файл
