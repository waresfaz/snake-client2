const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "135.23.222.148",
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected!');
    conn.write("Name: WF");
    // conn.write("Move: up");
    // conn.write("Move: left");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 500);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 100);
  });

  conn.on('data', (data) => { // receives data from server; if snake idles serves send string to client (me)
    console.log(data);        // "you ded cuz you idled"
  });

  return conn;
}

module.exports = connect;