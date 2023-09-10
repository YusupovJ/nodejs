import path from "node:path";

console.log(`Глобальный путь до папки: ${__dirname}`);
console.log(`Глобальный путь до файла: ${__filename}`);

console.log(`Склеивает пути: ${path.join("first", "second")}`);
console.log(`Получить абсолютный путь: ${path.resolve("first", "second")}`);
console.log(`Проверка на абсолютный путь: ${path.isAbsolute(__dirname)}`);
console.log(`Парсинг путей: `, path.parse(__filename));
console.log(`Имя папки: ${path.basename(__dirname)}`);
console.log(`Разделитель в OC: ${path.sep}`);
console.log(`Расширение файла: ${path.extname(__filename)}`);
