//6.1 write a function which takes a message and time. The function should print that message every X interval.

const printMsg = (name, delay) => {
    setInterval(() => console.log(name), delay);
}
