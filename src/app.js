/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let excusa = document.getElementById("excuse");
  excusa.innerHTML = `${who[getRandomInt(who.length)]} 
    ${action[getRandomInt(action.length)]} 
    ${what[getRandomInt(what.length)]} 
    ${when[getRandomInt(when.length)]}`;
};
