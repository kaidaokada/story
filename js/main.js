const items=document.querySelectorAll(".menu-item");
const contents=document.querySelectorAll(".content");

items.forEach(item=>{
  item.addEventListener("click",()=>{
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
  });
});

/* Parallax */
document.addEventListener("mousemove",(e)=>{
  const x=(e.clientX/window.innerWidth-0.5)*40;
  const y=(e.clientY/window.innerHeight-0.5)*40;
  document.documentElement.style.setProperty("--mouseX",`${x}px`);
  document.documentElement.style.setProperty("--mouseY",`${y}px`);
});

/* Audio */
const audio=document.getElementById("bgm");
const btn=document.getElementById("audioToggle");
let playing=false;

btn.addEventListener("click",()=>{
  if(playing){audio.pause();btn.textContent="▶ Sound";}
  else{audio.play();btn.textContent="⏸ Sound";}
  playing=!playing;
});

/* Legal */
const open=document.getElementById("openLegal");
const close=document.getElementById("closeLegal");
const overlay=document.getElementById("legalOverlay");

open.onclick=()=>overlay.classList.remove("hidden");
close.onclick=()=>overlay.classList.add("hidden");
overlay.onclick=(e)=>{if(e.target===overlay)overlay.classList.add("hidden");};
