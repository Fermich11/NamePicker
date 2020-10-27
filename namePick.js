var nameArray = [];
let first = '';
let second = '';
let third = '';

$('#pick').click(function() {
    // Get the input value
  var names = document.getElementById('names').value;
  console.log(names)
  
  // Seperate the names and push them into the array
  var nameArray = names.split(',');
  
  // Get a random name, the winner
  let winners = ['', '', ''];
  if (first != '') {
    winners[2] = first;
    const newArray = nameArray.filter(name => name != first);
    nameArray = newArray;
  } else if(second != '') {
    winners[1] = second;
    const newArray = nameArray.filter(name => name != second);
    nameArray = newArray;
  } else if(third != '') {
    winners[0] = third;
    const newArray = nameArray.filter(name => name != third);
    nameArray = newArray;
  }



  for (let count = 0; count <= 2 ; count++ ) {
        if(winners[count] == '') {
            const winnerName = nameArray[Math.floor(Math.random()*nameArray.length)];
            winners[count] = winnerName;
            const newArray = nameArray.filter(name => name != winnerName);
            nameArray = newArray;
        }
  }

  winners = winners.reverse();
  
  winner = `<span>🎉 The winners are 🎉</span><br><h1>🥇 ${first}</h1><br><h2>🥈 ${second}<h2><br><h3>🥉 ${third}<h3>`;
  
  // Display winner
  $('#world').addClass('open');
  $('#winner').addClass('open');
  $('#close').addClass('open');
  $('#winner').html(winner);
});
  
$('#close').click(function() {
  $('#world').removeClass('open');
  $('#winner').removeClass('open');
  $('#close').removeClass('open');
});

// Confetti
(function() {
  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

  NUM_CONFETTI = 350;

  COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];

  PI_2 = 2 * Math.PI;

  canvas = document.getElementById('world');

  context = canvas.getContext('2d');

  window.w = 0;

  window.h = 0;

  resizeWindow = function() {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight;
  };const first = '';
  const second = '';
  const third = '';

  window.addEventListener('resize', resizeWindow, false);

  window.onload = function() {
    return setTimeout(resizeWindow, 0);
  };

  range = function(a, b) {
    return (b - a) * Math.random() + a;
  };

  drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
  };

  xpos = 0.5;

  document.onmousemove = function(e) {
    return xpos = e.pageX / w;
  };

  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  Confetti = class Confetti {
    constructor() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
      this.r = ~~range(2, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }

    replace() {
      this.opacity = 0;
      this.dop = 0.03 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.7 * this.r + range(-1, 1);
    }

    draw() {
      var ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (ref = this.x) && ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
    }

  };

  confetti = (function() {
    var j, ref, results;
    results = [];
    for (i = j = 1, ref = NUM_CONFETTI; (1 <= ref ? j <= ref : j >= ref); i = 1 <= ref ? ++j : --j) {
      results.push(new Confetti);
    }
    return results;
  })();

  window.step = function() {
    var c, j, len, results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    results = [];
    for (j = 0, len = confetti.length; j < len; j++) {
      c = confetti[j];
      results.push(c.draw());
    }
    return results;
  };

  step();

}).call(this);


// Modal Handler
const closeModal = $('span.close');
const modal = $('div.modal');
const displayModal = $('div.navWrapper');

displayModal.click(() => {
  modal.css('display', 'block');
});

closeModal.click(() => {
  modal.css('display', 'none');
});

const firstInput = $('input[name="first"]');
firstInput.on('change', () => {
  first = firstInput.val();
});

const secondInput = $('input[name="second"]');
secondInput.on('change', () => {
  second = secondInput.val();
});

const thirdInput = $('input[name="third"]');
thirdInput.on('change', () => {
  third = thirdInput.val();
});