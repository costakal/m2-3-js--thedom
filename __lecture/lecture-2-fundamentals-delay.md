# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
setTimeout(function () {
  alert("Hello");
}, 3000);

setTimeout(function () {
  console.log("Hello");
}, 3000);
```

## setTimeout has two parameters. A function and a time in miliseconds

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
setInterval(function () {
  alert("Hello");
}, 3000);
```

setInterval has two parameters. A function and a time in miliseconds, but it will repeat itself. this could be spamy

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
const makeBacon = function () {
  const amount = Math.floor(Math.random() * 6);
  let output = "";
  for (let i = 0; i < amount; i++) {
    output += "🥓";
  }
  console.log(output);
};
const baconInterval = setInterval(makeBacon, 2000);
```

---

Workshop time!
