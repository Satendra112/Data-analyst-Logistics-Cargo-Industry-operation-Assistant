function openMenu(){
  document.querySelector(".dropdown").style.transform = "translateY(0)";
}

function closeMenu(){
  document.querySelector(".dropdown").style.transform = "translateY(-100%)";
}

/* TYPEWRITER */
const texts = [
  "Aspiring Data Analyst",
  "Power BI Dashboard Developer",
  "SQL & Python Learner"
];

let index = 0;
let char = 0;
const speed = 100;
const target = document.querySelector(".typewriter-text");

function type(){
  if(char < texts[index].length){
    target.innerHTML += texts[index].charAt(char);
    char++;
    setTimeout(type, speed);
  }else{
    setTimeout(erase, 1500);
  }
}

function erase(){
  if(char > 0){
    target.innerHTML = texts[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 50);
  }else{
    index = (index + 1) % texts.length;
    setTimeout(type, 500);
  }
}

window.onload = type;
/* SKILL BAR ANIMATION ON LOAD */
window.addEventListener("load", () => {
  const skillBars = document.querySelectorAll(".skill-fill");

  skillBars.forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = percent;
  });
});
