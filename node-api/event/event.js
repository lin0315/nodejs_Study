const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  setTimeout(() => {
    console.log("事件触发1");
  }, 0);
});

myEmitter.on("event", () => {
  console.log("事件触发2");
});

myEmitter.emit("event");
