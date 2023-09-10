import dotenv from "dotenv";

/* dotenv - расширение, которое позволяет получить переменные окружения из файла .env */
/* cross-env - расширение, которое позволяет получить переменные окружения во время запуска скрипта */

dotenv.config(); // - чтобы, dotenv работал

console.log(process.env.PORT); // - с помощью cross-env
console.log(process.env.NODE_ENV); // - с помощью dotenv
console.log(process.pid); // - id процесса
console.log(process.argv); // - массив аргументов получаемые с запуском скрипта

const exit = (): void => {
	if (Math.random() > 0.5) {
		setTimeout(exit, 1000);
		console.log("программа работает...");
	} else {
		console.log("работа программы завершена!");
		process.exit(); // - завершает текущий процесс
	}
};

exit();
