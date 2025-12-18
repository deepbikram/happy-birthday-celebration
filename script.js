// Fungsi untuk memulai musik
function playMusic() {
  const music = document.getElementById('background-music');
  music.play();
}
window.addEventListener('DOMContentLoaded', function () {
  playMusic();
});
document.body.addEventListener('click', playMusic, { once: true });

// Skip functionality - check for /skip or #skip in URL
const SECRET_PHRASE = 'khul ja sim sim';
let countdownInterval = null;

function checkForSkipRoute() {
  const hash = window.location.hash.toLowerCase();
  const path = window.location.pathname.toLowerCase();

  // Check if URL contains /skip or #skip
  if (hash === '#skip' || hash === '#/skip' || path.endsWith('/skip') || path.includes('/skip')) {
    showSkipPopup();
  }
}

function showSkipPopup() {
  const skipPopup = document.getElementById('skipPopup');
  const skipInput = document.getElementById('skipPasswordInput');
  const skipSubmitBtn = document.getElementById('skipSubmitBtn');
  const skipError = document.getElementById('skipError');

  // Show the popup
  skipPopup.classList.remove('d-none');
  skipPopup.style.display = 'flex';

  // Focus on input
  setTimeout(() => {
    skipInput.focus();
  }, 500);

  // Handle submit button click
  skipSubmitBtn.addEventListener('click', function () {
    validateSecretPhrase();
  });

  // Handle Enter key in input
  skipInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      validateSecretPhrase();
    }
  });

  // Hide error when typing
  skipInput.addEventListener('input', function () {
    skipError.classList.add('d-none');
  });
}

function validateSecretPhrase() {
  const skipInput = document.getElementById('skipPasswordInput');
  const skipError = document.getElementById('skipError');
  const skipPopup = document.getElementById('skipPopup');
  const skipModal = skipPopup.querySelector('.skip-popup-modal');
  const inputValue = skipInput.value.toLowerCase().trim();

  if (inputValue === SECRET_PHRASE) {
    // Success! Skip the countdown
    skipModal.classList.add('skip-success');
    skipInput.style.borderColor = '#2ecc71';
    skipInput.style.boxShadow = '0 0 20px rgba(46, 204, 113, 0.5)';

    // Change button to success state
    const skipSubmitBtn = document.getElementById('skipSubmitBtn');
    skipSubmitBtn.textContent = 'Unlocked! ✓';
    skipSubmitBtn.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';

    // Hide popup after short delay and trigger birthday celebration
    setTimeout(() => {
      skipPopup.style.animation = 'fadeIn 0.5s ease-out reverse';
      setTimeout(() => {
        skipPopup.classList.add('d-none');
        skipPopup.style.display = 'none';
        skipCountdownAndProceed();
      }, 500);
    }, 1000);
  } else {
    // Wrong phrase - show error
    skipError.classList.remove('d-none');
    skipInput.style.borderColor = '#ff6b6b';

    // Reset error after animation
    setTimeout(() => {
      skipInput.style.borderColor = 'rgba(138, 43, 226, 0.4)';
    }, 500);
  }
}

function skipCountdownAndProceed() {
  // Clear the countdown interval
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  // Hide the timer
  const timer = document.getElementById('timer');
  timer.classList.add('d-none');

  // Start the confetti and celebration!
  confetti();
  _slideSatu();
}

// Check for skip route when page loads
window.addEventListener('DOMContentLoaded', checkForSkipRoute);
// Also check when hash changes
window.addEventListener('hashchange', checkForSkipRoute);

const content = document.getElementById('content');
const footer = document.getElementsByTagName('footer')[0];
const timer = document.getElementById('timer');

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
let countDown = new Date('Oct 25, 2026 00:00:00').getTime();
countdownInterval = setInterval(function () {
  let now = new Date().getTime(),
    distance = countDown - now;
  document.getElementById('days').innerText = Math.floor(distance / (day)),
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

  if (distance < 0) {

    timer.classList.add('d-none');
    confetti();
    clearInterval(countdownInterval);
    _slideSatu();
  }

}, second)


const _slideSatu = function () {
  const tap = document.getElementById('tap');
  const slideSatu = document.getElementById('slideSatu');
  slideSatu.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    tap.classList.add('animate__pulse', 'animate__infinite');
    document.body.addEventListener('click', function () {
      tap.classList.add('d-none');
      tap.classList.remove('animate__pulse', 'animate__infinite');
      _slideDua();
    }, { once: true })
  }, 3500);
};

const _slideDua = function () {
  const slideSatu = document.getElementById('slideSatu');
  const tap = document.getElementById('tap');
  const slideDua = document.getElementById('slideDua');

  setTimeout(function () {
    slideSatu.classList.replace('animate__slideInDown', 'animate__backOutDown');
    tap.classList.add('d-none');
    setTimeout(function () {
      slideSatu.classList.add('d-none');
    }, 1000);
  }, 1000);

  slideDua.classList.remove('d-none');

  // Tap button will be shown by TypeIt afterComplete callback
  document.body.addEventListener('click', function () {
    slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
    slideDua.classList.remove('animate__delay-2s', 'animate__slow');
    tap.classList.add('d-none');
    tap.classList.remove('animate__pulse', 'animate__infinite');
    setTimeout(function () {
      slideDua.remove();
      _slideTiga();
    }, 1000);
  }, { once: true });
};

const _slideTiga = function () {
  const tap = document.getElementById('tap');
  const slideTiga = document.getElementById('slideTiga');

  slideTiga.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    tap.classList.add('animate__pulse', 'animate__infinite');
    document.body.addEventListener('click', function () {
      slideTiga.classList.remove('animate__delay-2s', 'animate__slow');
      slideTiga.classList.replace('animate__fadeInRight', 'animate__fadeOut');
      tap.classList.remove('animate__pulse', 'animate__infinite');
      tap.remove();
      setTimeout(function () {
        slideTiga.remove();
        _slideEmpat();
      }, 1000);
    }, { once: true })
  }, 21500);
}

function getRandomPosition(element) {
  // Get viewport dimensions with minimal padding
  var maxTop = window.innerHeight - element.clientHeight - 20;
  var maxLeft = window.innerWidth - element.clientWidth - 20;

  // Generate random positions across the ENTIRE screen with minimal edge padding
  var randomTop = Math.floor(Math.random() * (maxTop - 20)) + 10;
  var randomLeft = Math.floor(Math.random() * (maxLeft - 20)) + 10;

  return [randomTop, randomLeft];
};

const _slideEmpat = function () {
  const slideEmpat = document.getElementById('slideEmpat');
  const btnNo = document.getElementById('gak');
  const btnYes = document.getElementById('suka');
  slideEmpat.classList.remove('d-none');

  // Add transition for smooth movement (will apply to future movements)
  slideEmpat.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

  // NO button - make it move around with animation
  btnNo.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent event bubbling

    // Add a shake animation class temporarily
    slideEmpat.classList.add('animate__animated', 'animate__headShake', 'animate__fast');

    // Remove the animation class after it completes
    setTimeout(() => {
      slideEmpat.classList.remove('animate__headShake', 'animate__fast');

      // Move to new random position (both top and left)
      var xy = getRandomPosition(slideEmpat);
      slideEmpat.style.top = xy[0] + 'px';
      slideEmpat.style.left = xy[1] + 'px';
      slideEmpat.style.transform = 'none'; // Remove centering transform
    }, 500);
  });

  // YES button - proceed to happy ending
  btnYes.addEventListener('click', function () {
    slideEmpat.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideEmpat.classList.remove('animate__delay-2s');
    setTimeout(function () {
      slideEmpat.remove()
      setTimeout(() => {
        _slideLimaYes();
      }, 500);
    }, 1000);
  })
};

// Response when user clicks YES
const _slideLimaYes = function () {
  const slideLima = document.getElementById('slideLimaYes');
  slideLima.classList.remove('d-none');
  const trims = document.getElementById('trimsYes');

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);

  // Show exit notification after 30 seconds
  setTimeout(() => {
    showExitNotification();
  }, 20000);

  // Keep the message visible forever - no fade out, no removal
  // The heart icon and message will stay on screen permanently
};

// Show exit notification popup
function showExitNotification() {
  const exitNotification = document.getElementById('exitNotification');
  const dismissBtn = document.getElementById('exitDismissBtn');

  // Show the notification
  exitNotification.classList.remove('d-none');

  // Handle dismiss button click
  dismissBtn.addEventListener('click', function () {
    exitNotification.classList.add('hiding');
    setTimeout(() => {
      exitNotification.classList.add('d-none');
      exitNotification.classList.remove('hiding');
    }, 400);
  }, { once: true });
}

// Response when user clicks NO (but they can't really click it!)
const _slideLimaNo = function () {
  const slideLima = document.getElementById('slideLimaNo');
  slideLima.classList.remove('d-none');
  const trims = document.getElementById('trimsNo');

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);

  slideLima.addEventListener('animationend', () => {
    slideLima.classList.add('animate__delay-3s')
    slideLima.classList.replace('animate__fadeIn', 'animate__fadeOut');
    trims.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');
    setTimeout(() => {
      trims.remove();
      setTimeout(() => {
        slideLima.remove();
        // No completion slide for NO response - just ends here
      }, 1000);
    }, 6000);
  });
};

// Final completion slide - shows goodbye button after YES
const _slideComplete = function () {
  const slideComplete = document.getElementById('slideComplete');
  slideComplete.classList.remove('d-none');

  // Bye button - no action needed, just a farewell message
  const byeBtn = document.getElementById('byeBtn');
  if (byeBtn) {
    byeBtn.addEventListener('click', function () {
      // Optional: could reload or do nothing
      // For now, just let it be a nice goodbye message
    });
  }
};


new TypeIt("#teks1", {
  strings: ["Today, I send all my best prayers for you.", "May the things that make you fall also become reasons for you to keep growing.", "May the world always protect you wherever you are.", "May your days always be accompanied by love that has no limits.", "May every step you take be made easier until you achieve what you desire."],
  startDelay: 4000,
  speed: 75,
  waitUntilVisible: true,
  afterComplete: function () {
    // Show tap button only after all typing is complete
    const tap = document.getElementById('tap');
    if (tap && document.getElementById('slideDua') && !document.getElementById('slideDua').classList.contains('d-none')) {
      tap.classList.remove('d-none');
      tap.classList.add('animate__pulse', 'animate__infinite');
    }
  }
}).go();

new TypeIt("#teks2", {
  strings: ["With or without me, may the universe always make you happy in any way.", " ", "May God bless you, thank you for holding on this far.", " ", "- Wishing you all the best"],
  startDelay: 2000,
  speed: 75,
  waitUntilVisible: true
}).go();


// Message for YES response
new TypeIt("#trimsYes", {
  strings: ["Yay! I'm so glad you liked it! 💕", "Thank you for being amazing!", "Happy Birthday! 🎉"],
  startDelay: 2000,
  speed: 100,
  loop: false,
  waitUntilVisible: true,
}).go();

// Message for NO response
new TypeIt("#trimsNo", {
  strings: ["Aww, that's okay!", "I tried my best for you...", "Hope you still have a wonderful birthday! 💙"],
  startDelay: 2000,
  speed: 100,
  loop: false,
  waitUntilVisible: true,
}).go();



'use strict';

var onlyOnKonami = false;

function confetti() {
  // Globals
  var $window = $(window),
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined,
    confetti = [];

  var runFor = 2000
  var isRunning = true

  setTimeout(() => {
    isRunning = false
  }, runFor);

  // Settings
  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    pointer = 0;

  var particles = 150,
    spread = 20,
    sizeMin = 5,
    sizeMax = 12 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = .13,
    dyMax = .18,
    dThetaMin = .4,
    dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function () {
      return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0);
    },
    function () {
      var black = 200 * random() | 0;
      return color(200, black, black);
    },
    function () {
      var black = 200 * random() | 0;
      return color(black, 200, black);
    },
    function () {
      var black = 200 * random() | 0;
      return color(black, black, 200);
    },
    function () {
      return color(200, 100, 200 * random() | 0);
    },
    function () {
      return color(200 * random() | 0, 200, 200);
    },
    function () {
      var black = 256 * random() | 0;
      return color(black, black, black);
    },
    function () {
      return colorThemes[random() < .5 ? 1 : 2]();
    },
    function () {
      return colorThemes[random() < .5 ? 3 : 5]();
    },
    function () {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];

  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1 / eccentricity,
    radius2 = radius + radius;

  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1];
    while (measure) {
      var dart = measure * random(),
        i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;

      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }

    return spline.sort();
  }

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777,
        i = 0,
        j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }


  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti

      var theme = colorThemes[onlyOnKonami ? colorThemes.length * random() | 0 : 0],
        count = 0;

      (function addConfetto() {

        if (onlyOnKonami && ++count > particles)
          return timer = undefined;

        if (isRunning) {
          var confetto = new Confetto(theme);
          confetti.push(confetto);

          container.appendChild(confetto.outer);
          timer = setTimeout(addConfetto, spread * random());
        }
      })(0);


      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();

        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  $window.keydown(function (event) {
    pointer = konami[pointer] === event.which ?
      pointer + 1 :
      +(event.which === konami[0]);
    if (pointer === konami.length) {
      pointer = 0;
      poof();
    }
  });

  if (!onlyOnKonami) poof();
};
