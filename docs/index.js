const headerContainer = document.getElementById("header")
const footerContainer = document.getElementById("footer")
const eventsContainer = document.getElementById("eventsContainer")
const activitiesContainer = document.getElementById("activitiesContainer")
import {GenerateHeader,GenerateFooter,GenerateEvents,GenerateActivities} from "./component.js"


const blob = document.getElementById("blob")
document.body.onpointermove = event => {
  const { clientX, clientY } = event

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1500, fill: "forwards" })
}


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null

let fontEffectElements = document.querySelectorAll(".fontEffect")
fontEffectElements.forEach((ele) => {
  ele.onmouseover = event => {
    let iteration = 0;
    let initialText = event.target.dataset.value
    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return initialText[index];
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

      if (iteration >= initialText) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }
})

let main_body = document.getElementById("main_body")
main_body.addEventListener('scroll', () => {

  const scrollPosition = main_body.scrollTop;
  const maxScroll = 1400
  // Calculate gradient shift based on scroll position
  const scrollPercentage = scrollPosition / maxScroll;
  const startColor = [30, 64, 175]; // Black107 114 128
  const endColor = [53, 41, 169]; // Blue-900

  // Interpolate between startColor and endColor
  const currentColor = startColor.map((start, index) =>
    Math.round(start + (endColor[index] - start) * scrollPercentage)
  );

  // Update background gradient
  const newGradient = `rgb(${currentColor.join(',')})`;
  document.body.style.background = `linear-gradient(to bottom, ${newGradient}, black)`;
});



GenerateHeader(headerContainer)
GenerateFooter(footerContainer)
GenerateEvents(eventsContainer) 
GenerateActivities(activitiesContainer) 



