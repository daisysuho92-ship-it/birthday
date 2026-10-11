// ========================================
// PRELOADER PERCENTAGE
// ========================================

const loadingPercent =
  document.getElementById("loadingPercent");

let percent = 0;

const percentCounter = setInterval(() => {

  percent++;

  if (loadingPercent) {
    loadingPercent.textContent = percent + "%";
  }

  if (percent >= 100) {
    clearInterval(percentCounter);
  }

}, 40);


// ========================================
// GIFT POPUP
// ========================================

const giftButton =
  document.getElementById("giftButton");

const giftOverlay =
  document.getElementById("giftOverlay");

const giftContent =
  document.getElementById("giftContent");

const giftBox =
  document.getElementById("giftBox");


// ========================================
// OPEN YOUR SURPRISE
// ========================================

if (giftButton && giftOverlay) {

  giftButton.addEventListener("click", () => {

    giftOverlay.classList.remove("hidden");

    giftOverlay.classList.add("flex");

  });

}


// ========================================
// CLICK THE GIFT
// ========================================

if (giftBox) {

  giftBox.addEventListener("click", () => {

    // Gift animation

    giftBox.classList.add(
      "scale-125",
      "animate-bounce"
    );


    // Fade popup

    setTimeout(() => {

      if (giftContent) {

        giftContent.classList.add(
          "scale-150",
          "opacity-0"
        );

      }

    }, 400);


    // Close popup and open letter

    setTimeout(() => {

      if (giftOverlay) {

        giftOverlay.classList.add("hidden");

        giftOverlay.classList.remove("flex");

      }


      if (giftContent) {

        giftContent.classList.remove(
          "scale-150",
          "opacity-0"
        );

      }


      giftBox.classList.remove(
        "scale-125",
        "animate-bounce"
      );


      // Open NEW letter page

      openLoveLetter();

    }, 1000);

  });

}


// ========================================
// OPEN LOVE LETTER IN NEW PAGE
// ========================================

function openLoveLetter() {

  const letterWindow =
    window.open("", "_blank");


  // Check if browser blocked popup

  if (!letterWindow) {

    alert(
      "Please allow pop-ups for this website ❤️"
    );

    return;

  }


  // Write the new page

  letterWindow.document.write(`

<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>A Letter For You ❤️</title>


  <script src="https://cdn.tailwindcss.com"></script>


  <style>

    * {
      box-sizing: border-box;
    }

    body {

      margin: 0;

      min-height: 100vh;

      background:
        linear-gradient(
          135deg,
          #fff7fa,
          #ffe4ef,
          #fff1f6
        );

      font-family:
        Georgia,
        "Times New Roman",
        serif;

      padding: 40px 20px;

    }


    .letter {

      width: 100%;

      max-width: 750px;

      margin: auto;

      background: white;

      border-radius: 30px;

      padding: 50px;

      box-shadow:
        0 25px 60px rgba(190, 24, 93, 0.15);

      animation:
        letterAppear 1.2s ease forwards;

    }


    @keyframes letterAppear {

      from {

        opacity: 0;

        transform:
          translateY(40px)
          scale(0.95);

      }

      to {

        opacity: 1;

        transform:
          translateY(0)
          scale(1);

      }

    }


    .heart {

      text-align: center;

      font-size: 60px;

      margin-bottom: 20px;

    }


    .small-title {

      text-align: center;

      font-family: Arial, sans-serif;

      font-size: 13px;

      letter-spacing: 5px;

      text-transform: uppercase;

      color: #ec4899;

    }


    h1 {

      text-align: center;

      font-size: 48px;

      color: #374151;

      margin-top: 15px;

      margin-bottom: 45px;

    }


    .letter-text {

      font-size: 20px;

      line-height: 2;

      color: #4b5563;

    }


    .letter-text p {

      margin-bottom: 25px;

    }


    .signature {

      color: #db2777;

      font-size: 22px;

      margin-top: 35px;

    }


    .bottom-hearts {

      text-align: center;

      font-size: 28px;

      margin-top: 40px;

    }


    @media (max-width: 600px) {

      body {

        padding: 20px 12px;

      }


      .letter {

        padding: 30px 22px;

        border-radius: 22px;

      }


      h1 {

        font-size: 36px;

      }


      .letter-text {

        font-size: 17px;

        line-height: 1.8;

      }

    }

  </style>

</head>


<body>


  <div class="letter">


    <div class="heart">
      💗
    </div>


    <div class="small-title">
      A Beautiful Letter For You
    </div>


    <h1>
      To My Sadaf 💗
    </h1>


    <div class="letter-text">


     <p>
          MY LOVE,
        </p>

        <p>
          I LOVE YOU MY SADAF 💗. I love you more than words can explain and more than Anything. You are my everything, my heart, my soul, my peace , my home and the reason behind my smile 💗✨.
        </p>

        <p>
          With you i feel complete, and i want to spend every moment of my life with you MY SADAF 💗. You are the most precious to me most beautiful gift, and and I love every sec when im with you , you really means a lot to me my begum ✨
        </p>

        <p>
          I appriciate all the things you do for me the way you make me smile 😌💕 , make me laugh ✨, take care of me 💗 , get anger with me 😂💗 and many more 😋😌💗 and and ik this surpise is not enough but i will do everything for you to make you happy and see your smile , and also believe me this suprise is too too too small for the love i have for you my darling 💗✨.
        </p>

        <p>
          IM ALWAYSS BY YOUR SIDE , NO MATTER WHAT YOU ALWAYSS FOUND ME WITH YOU FOREVER EVER ❤️
        </p>

        <p>
          And a very very very big HAPPY BIRTHDAY to you MY SADAF and I HOPE TODAY IS AS BEAUTIFUL AS YOU ARE 💗✨ and its brings you smile and make you happay as you make me happy 😌💗
        </p>

        <p>
          Again Happy Birthday, my SHREEK E HAYAT. 💗
        </p>

        <p class="pt-4 font-serif text-xl text-pink-600">
          With all my love,<br />
          Your Subhan 💗
        </p>



    </div>


    <div class="bottom-hearts">
      💗 ✨ 💗
    </div>


  </div>


</body>

</html>

  `);


  letterWindow.document.close();

}


// ========================================
// DON'T WANT THE GIFT
// ========================================

const dontWantButton =
  document.getElementById("dontWantButton");

const openGiftButton =
  document.getElementById("giftButton");

let dontWantClicks = 0;


if (dontWantButton && openGiftButton) {

  dontWantButton.addEventListener("click", () => {

    dontWantClicks++;


    // ========================================
    // FIRST CLICK
    // ========================================

    if (dontWantClicks === 1) {

      dontWantButton.classList.remove(
        "px-7",
        "py-3"
      );

      dontWantButton.classList.add(
        "px-5",
        "py-2",
        "text-sm"
      );


      openGiftButton.classList.remove(
        "px-8",
        "py-4"
      );

      openGiftButton.classList.add(
        "px-10",
        "py-5",
        "text-lg"
      );

    }


    // ========================================
    // SECOND CLICK
    // ========================================

    else if (dontWantClicks === 2) {

      dontWantButton.classList.remove(
        "px-5",
        "py-2",
        "text-sm"
      );

      dontWantButton.classList.add(
        "px-3",
        "py-1",
        "text-xs"
      );


      openGiftButton.classList.remove(
        "px-10",
        "py-5",
        "text-lg"
      );

      openGiftButton.classList.add(
        "px-12",
        "py-6",
        "text-xl"
      );

    }


    // ========================================
    // THIRD CLICK
    // ========================================

    else if (dontWantClicks >= 3) {

      dontWantButton.classList.add(
        "scale-0",
        "opacity-0"
      );


      openGiftButton.classList.remove(
        "px-12",
        "py-6",
        "text-xl"
      );

      openGiftButton.classList.add(
        "px-14",
        "py-7",
        "text-xl"
      );


      setTimeout(() => {

        dontWantButton.remove();

      }, 500);

    }

  });

}


// ========================================
// SECRET MESSAGE
// ========================================

const secretButton =
  document.getElementById("secretButton");

const secretBefore =
  document.getElementById("secretBefore");

const secretAfter =
  document.getElementById("secretAfter");


if (secretButton) {

  secretButton.addEventListener("click", () => {

    if (secretBefore) {

      secretBefore.classList.add("hidden");

    }


    if (secretAfter) {

      secretAfter.classList.remove("hidden");

      secretAfter.classList.add(
        "animate-fade-up"
      );

    }

  });

}


// ========================================
// REPLAY
// ========================================

const replayButton = document.getElementById("replayButton");

if (replayButton) {
  replayButton.addEventListener("click", () => {
    window.location.href = window.location.pathname;
  });
}


// ========================================
// BLOW THE CANDLES
// ========================================

const blowCandleButton =
  document.getElementById("blowCandleButton");

const wishMessage =
  document.getElementById("wishMessage");

const blowHint =
  document.getElementById("blowHint");

const cakeArea =
  document.getElementById("cakeArea");

const celebrationLeft =
  document.getElementById("celebrationLeft");

const celebrationRight =
  document.getElementById("celebrationRight");


let candlesBlown = false;


if (blowCandleButton) {

  blowCandleButton.addEventListener("click", () => {

    // Prevent clicking multiple times

    if (candlesBlown) {
      return;
    }

    candlesBlown = true;


    // ========================================
    // BLOW OUT FLAMES
    // ========================================

    const flames = [
      document.getElementById("flame1"),
      document.getElementById("flame2"),
      document.getElementById("flame3")
    ];


    flames.forEach((flame, index) => {

      if (flame) {

        setTimeout(() => {

          flame.classList.add("flame-out");

        }, index * 150);

      }

    });


    // ========================================
    // CAKE CELEBRATION
    // ========================================

    if (cakeArea) {

      cakeArea.classList.add(
        "cake-celebrate"
      );

    }


    // ========================================
    // SHOW MAKE A WISH
    // ========================================

    setTimeout(() => {

      if (wishMessage) {

        wishMessage.classList.add(
          "wish-show"
        );

      }

    }, 400);


    // ========================================
    // CHANGE BUTTON
    // ========================================

    blowCandleButton.innerHTML =
      "🎉 My SADAF! ❤️";

    blowCandleButton.classList.remove(
      "bg-pink-600"
    );

    blowCandleButton.classList.add(
      "bg-pink-500"
    );


    if (blowHint) {

      blowHint.textContent =
        "HEHE I LOVE YOU AND AND IM ALWAYSS WITH YOU ✨";

    }


    // ========================================
    // LEFT CELEBRATION
    // ========================================

    createCelebration(
      celebrationLeft,
      "left"
    );


    // ========================================
    // RIGHT CELEBRATION
    // ========================================

    createCelebration(
      celebrationRight,
      "right"
    );

  });

}


// ========================================
// CREATE CELEBRATION
// ========================================

function createCelebration(container, side) {

  if (!container) {
    return;
  }


  const emojis = [
    "🎉",
    "🎊",
    "✨",
    "💕",
    "💗",
    "💖",
    "🌸",
    "⭐"
  ];


  for (let i = 0; i < 18; i++) {

    const particle =
      document.createElement("span");


    particle.className =
      "celebration-particle";


    particle.textContent =
      emojis[
        Math.floor(
          Math.random() * emojis.length
        )
      ];


    // Random vertical position

    const y =
      (Math.random() * 500 - 250);


    // Random horizontal distance

    let x;


    if (side === "left") {

      x =
        Math.random() * 350 + 100;

    } else {

      x =
        -(Math.random() * 350 + 100);

    }


    particle.style.setProperty(
      "--x",
      `${x}px`
    );


    particle.style.setProperty(
      "--y",
      `${y}px`
    );


    // Random size

    particle.style.fontSize =
      `${20 + Math.random() * 20}px`;


    // Random animation delay

    particle.style.animationDelay =
      `${Math.random() * 0.3}s`;


    container.appendChild(
      particle
    );


    // Remove after animation

    setTimeout(() => {

      particle.remove();

    }, 2200);

  }

}
// ========================================
// BALLOON POPUP
// ========================================

const balloons =
  document.querySelectorAll(".balloon");

const balloonPopup =
  document.getElementById("balloonPopup");

const balloonPopupContent =
  document.getElementById("balloonPopupContent");

const balloonMessage =
  document.getElementById("balloonMessage");


balloons.forEach((balloon) => {

  balloon.addEventListener("click", () => {

    // Get message from balloon

    const message =
      balloon.getAttribute("data-message");


    // Put message inside popup

    balloonMessage.textContent =
      message;


    // ========================================
    // POP BALLOON
    // ========================================

    balloon.classList.add(
      "balloon-pop"
    );


    // ========================================
    // SHOW POPUP
    // ========================================

    setTimeout(() => {

      balloonPopup.classList.remove(
        "hidden"
      );

      balloonPopup.classList.add(
        "flex"
      );


      // Small delay so animation works

      setTimeout(() => {

        balloonPopupContent.classList.remove(
          "scale-90",
          "opacity-0"
        );

        balloonPopupContent.classList.add(
          "scale-100",
          "opacity-100"
        );

      }, 50);

    }, 300);

  });

});


// ========================================
// CLOSE POPUP BY CLICKING ANYWHERE
// ========================================

balloonPopup.addEventListener(
  "click",
  () => {

    balloonPopupContent.classList.remove(
      "scale-100",
      "opacity-100"
    );

    balloonPopupContent.classList.add(
      "scale-90",
      "opacity-0"
    );


    setTimeout(() => {

      balloonPopup.classList.add(
        "hidden"
      );

      balloonPopup.classList.remove(
        "flex"
      );

    }, 500);

  }
);
/* =================================
   START HERO ANIMATION AFTER PRELOADER
================================= */

// const heroHeading = document.getElementById("heroHeading");

// const preloader = document.getElementById("preloader");

// if (preloader) {
//   preloader.addEventListener("animationend", (event) => {
//     if (event.animationName === "preloaderExit") {
//       if (heroHeading) {
//         heroHeading.classList.add("show");
//       }
//     }
//   });
// }

const heroHeading = document.getElementById("heroHeading");
const heroName = document.getElementById("heroName");
const preloader = document.getElementById("preloader");

function animateText(element, callback) {
  if (!element) {
    if (callback) callback();
    return;
  }

  const text = element.textContent.trim();

  element.innerHTML = "";
  element.classList.add("typing");

  [...text].forEach((character, index) => {
    const span = document.createElement("span");

    span.className = "char";
    span.textContent =
      character === " " ? "\u00A0" : character;

    span.style.animationDelay = `${index * 0.08}s`;

    element.appendChild(span);
  });

  // Calculate when this line finishes
  const animationTime = text.length * 80 + 450;

  setTimeout(() => {
    if (callback) callback();
  }, animationTime);
}


function startHeroAnimation() {

  // First: Happy Birthday
  animateText(heroHeading, () => {

    // Then: My Sadaf
    animateText(heroName);

  });

}


// Start after preloader
setTimeout(() => {
  startHeroAnimation();
}, 5300);

/* ================================
   CUSTOM SQUARE CURSOR
================================ */

/* ================================
   CUSTOM SQUARE CURSOR
================================ */

const customCursor = document.getElementById("customCursor");

if (customCursor) {

  let mouseX = 0;
  let mouseY = 0;

  let cursorX = 0;
  let cursorY = 0;

  // Get mouse position
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    customCursor.style.opacity = "1";
  });


  // Smooth cursor movement
  function animateCursor() {

    // 0.08 = smooth/slightly slow
    cursorX += (mouseX - cursorX) * 0.14;
    cursorY += (mouseY - cursorY) * 0.14;

    customCursor.style.left = `${cursorX}px`;
    customCursor.style.top = `${cursorY}px`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();


  // Enlarge when hovering clickable elements
  const clickableElements = document.querySelectorAll(
    "button, a, img"
  );

  clickableElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

      customCursor.style.width = "22px";
      customCursor.style.height = "22px";
      customCursor.style.borderRadius = "6px";
      customCursor.style.background = "#C39BD5";

    });


    element.addEventListener("mouseleave", () => {

      customCursor.style.width = "16px";
      customCursor.style.height = "16px";
      customCursor.style.borderRadius = "3px";
      customCursor.style.background = "#031C44";

    });

  });


  // Hide cursor when leaving the page
  document.addEventListener("mouseleave", () => {
    customCursor.style.opacity = "0";
  });


  document.addEventListener("mouseenter", () => {
    customCursor.style.opacity = "1";
  });

}

// ========================================
// MAGNETIC EFFECT FOR ALL BUTTONS
// ========================================

const magneticButtons = document.querySelectorAll("button");

magneticButtons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Magnetic strength
    const strength = 0.25;

    button.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

