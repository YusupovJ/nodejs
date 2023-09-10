import os from "node:os";
import cluster from "node:cluster";

// console.log(`OS: ${os.platform()}`);
// console.log(`Arch: ${os.arch()}`);
// console.log(`CPUs length: ${os.cpus().length}`);

/* ------------------------------------ */

if (cluster.isPrimary) {
	os.cpus().forEach(() => {
		cluster.fork(); // запускает процесс в многопоточном режиме
	});
}

cluster.on("exit", (worker) => {
	console.log(`Воркер ${worker.process.pid} умер`);
	cluster.fork();
});

cluster.on("fork", (worker) => {
	console.log(`Воркер ${worker.process.pid} запущен`);
});
