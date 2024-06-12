import "../styles/index.scss";

import { getSpentTime } from "./common";

const buttonWithoutWW = document.getElementById("bWithoutWW");
const buttonWithWW = document.getElementById("bWithWW");
const spinner = document.getElementById("spinner");
const result = document.getElementById("result");
const timeSpent = document.getElementById("timeSpent");
const withoutWW = document.getElementById("withoutWW");
const withWW = document.getElementById("withWW");

buttonWithoutWW.addEventListener("click", () => {
  preStart();
  nonWebWorker();
});

buttonWithWW.addEventListener("click", () => {
  preStart();
  withWebWorker();
});

function nonWebWorker() {
  const time = getSpentTime();

  console.log(time);

  afterStop(time, false);
}

function withWebWorker() {
  // register the service worker which locates in ./worker.js

  // add onmessage event handler and call 'afterStop(e.data, true);' method inside
  // this method will handle end of service worker work

  // call service worker's method postMessage with message 'start' here
  // it will trigger service worker
  // Check if the browser supports Service Worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./worker.js")
        .then((registration) => {
          const worker = registration.waiting || registration.active;
          if (worker) {
            // sending a 'start' message to service worker
            worker.postMessage("start");

            // listening for messages sent back by service worker
            navigator.serviceWorker.addEventListener("message", (event) =>
              afterStop(event.data, true)
            );
          }
        })
        .catch((err) =>
          console.log("Service Worker Registration Failed: ", err)
        );
    });
  } else {
    console.log("Service Worker is not supported by browser.");
  }
}

function preStart() {
  result.classList.add("hidden");
  withWW.classList.add("hidden");
  withoutWW.classList.add("hidden");
  spinner.classList.remove("hidden");
}

function afterStop(time, mode) {
  timeSpent.innerText = `${time}ms`;
  spinner.classList.add("hidden");

  if (mode) {
    withWW.classList.remove("hidden");
    withoutWW.classList.add("hidden");
  } else {
    withoutWW.classList.remove("hidden");
    withWW.classList.add("hidden");
  }

  result.classList.remove("hidden");
}
