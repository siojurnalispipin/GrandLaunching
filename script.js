function message() {
  const message = "officially  launched",
    messageText = document.querySelectorAll(".message__text"),
    messageSplit = message.split(" "),
    messageContainer = document.querySelector(".message"),
    messageBtn = document.querySelector(".message__btn"),
    //Audio
    buttonAudio = document.getElementById("button");
  dramatisAudio = document.getElementById("dramatis");
  duarAudio = document.getElementById("duar");
  applauseAudio = document.getElementById("applause");

  //Other Button
  (messageBtn1 = document.querySelector(".message__btn1")),
    (messageBtn2 = document.querySelector(".message__btn2")),
    (reloadBtn = document.querySelector(".reload")),
    //hidden msg
    (hasilBtn = document.querySelector(".hasil1"));
  hasilBtn2 = document.querySelector(".hasil2");

  startwallpaper = document.querySelector(".awal");

  endwallpaper = document.querySelector(".akhir");

  tengah = document.querySelector(".tengah");

  (hasilBtn.style.display = "none"),
    (endwallpaper.style.display = "none"),
    (hasilBtn2.style.display = "none"),
    (particlesContainer = document.getElementById("particles-js"));

  const colors = ["#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54"];
  let i = 0;

  //Default
  messageBtn.addEventListener("click", openMessage);
  reloadBtn.addEventListener("click", openMessage);

  //Other Button
  messageBtn1.addEventListener("click", openMsg1);
  function openMsg1() {
    messageBtn1.style.display = "none";
    buttonAudio.play();
    hasilBtn.style.display = "block";
  }

  messageBtn2.addEventListener("click", openMsg2);
  function openMsg2() {
    messageBtn2.style.display = "none";
    buttonAudio.play();
    hasilBtn2.style.display = "block";
  }

  //Open Message
  function openMessage() {
    if (messageContainer.classList.contains("clicked")) {
      messageContainer.classList.remove("clicked");
      reloadBtn.style.display = "none";
      particlesContainer.classList.remove("show");
      tengah.style.display = "none";
      duarAudio.play();
      dramatisAudio.play();
      applauseAudio.play();
    } else {
      messageContainer.classList.add("clicked");
      reloadBtn.style.display = "block";
      endwallpaper.style.display = "block";
      startwallpaper.style.display = "none";
      tengah.style.display = "none";
      duarAudio.play();
      dramatisAudio.play();
      applauseAudio.play();
      setTimeout(() => {
        particlesContainer.classList.add("show");
      }, 300);
    }
  }

  // Get Message ans Split Chars
  messageSplit.forEach(function (el) {
    let template = `
      <p class="message__letters">
         <span class="message__letterMain">${el}</span>
         <span class="message__letterShadow">${el}</span>
      </p>`;

    messageText.forEach(function (el) {
      el.insertAdjacentHTML("beforeend", template);
    });
  });

  // Add colours to Letters
  const letterMain = document.querySelectorAll(".message__letterMain");
  letterMain.forEach(function (el) {
    if (i == colors.length) i = 0;
    el.style.color = colors[i];
    i++;
  });
}

message();

/// Particle JS

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: {
      value: [
        "#f7b267",
        "#f79d65",
        "#f4845f",
        "#f27059",
        "#f25c54",
        "#ffffff",
        "#cc444b",
        "#ff6b6b",
        "#e63946",
      ],
    },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 6,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 150, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
