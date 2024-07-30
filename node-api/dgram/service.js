const dgram = require("dgram");
const server = dgram.createSocket("udp4");

server.on("error", (err) => {
  console.log(`服务器异常: \n${err.stack}`);
  server.close();
});

server.on("message", (mes, rinfo) => {
  console.log(`服务器接收到来自 ${rinfo.address}:${rinfo.port} 的 ${mes}`);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`服务器监听 ${address.address}:${address.port}`);
});

server.bind(41234);
