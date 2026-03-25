const audio = document.getElementById("bgm");
const toggle = document.getElementById("audioToggle");
const slider = document.getElementById("volumeSlider");

const consent = document.getElementById("audioConsent");
const acceptBtn = document.getElementById("acceptAudio");
const declineBtn = document.getElementById("declineAudio");

// Startlautstärke
audio.volume = 0.75;
slider.oninput = () => {
  audio.volume = parseFloat(slider.value);
};

toggle.onclick = () => {
  if (audio.paused) {
    audio.play();
    toggle.textContent = "⏸ Sound";
  } else {
    audio.pause();
    toggle.textContent = "▶ Sound";
  }
};

const items = document.querySelectorAll(".menu-item");
const contents = document.querySelectorAll(".content");

items.forEach(item=>{
  item.onclick=()=>{
    items.forEach(i=>i.classList.remove("active"));
    item.classList.add("active");

    const target=item.dataset.target;
    const visibility=item.dataset.visibility;

    document.documentElement.style.setProperty("--visibility",visibility);

    contents.forEach(c=>{
      c.classList.remove("active");
      if(c.id===target){
        c.classList.add("active");
      }
    });
  };
});

document.addEventListener("mousemove",(e)=>{
  const x=(e.clientX/window.innerWidth-0.5)*40;
  const y=(e.clientY/window.innerHeight-0.5)*40;

  document.documentElement.style.setProperty("--mouseX",`${x}px`);
  document.documentElement.style.setProperty("--mouseY",`${y}px`);
});

/* LEGAL */
const legal = document.getElementById("legalOverlay");

document.getElementById("openLegal").onclick = () => {
  legal.classList.remove("hidden");
};

document.getElementById("closeLegal").onclick = () => {
  legal.classList.add("hidden");
};

legal.onclick = (e)=>{
  if(e.target===legal){
    legal.classList.add("hidden");
  }
};


acceptBtn.onclick = () => {
  audio.volume = parseFloat(slider.value);
  audio.play();
  toggle.textContent = "⏸ Sound";
  consent.style.display = "none";
};

declineBtn.onclick = () => {
  consent.style.display = "none";
};
