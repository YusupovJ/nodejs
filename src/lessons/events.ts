import Events from "events";

const events = new Events();

const printMessage = (message: string) => {
    console.log(message);
};

events.on("message", printMessage);
events.once("message once", printMessage);

events.emit("message", "Message 1");
events.emit("message", "Message 2");
events.emit("message once", "Message 3");
events.emit("message once", "Message 4"); // - events.once - обрабатывает только один emit

events.removeListener("message once", printMessage);

events.emit("message", "Message 5");

events.removeAllListeners();

events.emit("message", "Message 6");
events.emit("message", "Message 7");
