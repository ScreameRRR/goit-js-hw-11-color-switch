import {colors} from "./colors.js";

const refs ={
  bodyRef : document.querySelector('body'),
  buttonStartRef : document.querySelector('button[data-action="start"]'),
  buttonStopRef : document.querySelector('button[data-action="stop"]'),
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

let timerId = null;

const onHandleStartClick = () => {
timerId = setInterval(()=>{
  let randomIndex = randomIntegerFromInterval(0, colors.length-1);
    refs.bodyRef.style.backgroundColor = colors[randomIndex]
  }, 1000);
  refs.buttonStartRef.disabled = true;
  refs.buttonStopRef.disabled = false;
}

const onHandleStopClick = () => {
  clearInterval(timerId)
  refs.buttonStartRef.disabled = false;
  refs.buttonStopRef.disabled = true;

}

  refs.buttonStartRef.addEventListener('click', onHandleStartClick);
  refs.buttonStopRef.addEventListener('click', onHandleStopClick);