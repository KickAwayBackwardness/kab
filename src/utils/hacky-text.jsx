function hackyText(tag, text) {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomLetter() {
    var alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    return alphabet[rand(0, alphabet.length - 1)];
  }
  function getRandomWord(word) {
    var text = word.innerHTML;

    var finalWord = "";
    for (var i = 0; i < text.length; i++) {
      finalWord += text[i] == " " ? " " : getRandomLetter();
    }

    return finalWord;
  }
  var word = tag;
  var interv = "undefined";
  var canChange = false;
  var globalCount = 0;
  var count = 0;
  var INITIAL_WORD = text;
  var isGoing = false;

  function init() {
    if (isGoing) return;

    isGoing = true;
    var randomWord = getRandomWord(word);
    word.innerHTML = randomWord;

    interv = setInterval(function () {
      var finalWord = "";
      for (var x = 0; x < INITIAL_WORD.length; x++) {
        if (x <= count && canChange) {
          finalWord += INITIAL_WORD[x];
        } else {
          finalWord += getRandomLetter();
        }
      }
      word.innerHTML = finalWord;
      if (canChange) {
        count++;
      }
      if (globalCount >= 20) {
        canChange = true;
      }
      if (count >= INITIAL_WORD.length) {
        clearInterval(interv);
        count = 0;
        canChange = false;
        globalCount = 0;
        isGoing = false;
      }
      globalCount++;
    }, 30);
  }

  init();

  // document.querySelector(".text-animation-effect").play();

  // const myTextAnimationEffect = document.querySelector(
  //   ".text-animation-effect"
  // );

  // if (!myTextAnimationEffect.ended) {
  //   console.log("dang phat");
  // } else {
  //   //Not playing...maybe paused, stopped or never played.
  //   myTextAnimationEffect.play();
  //   console.log("lan dau");
  // }
  const domEl = document.querySelector("#test-audio");

  if (document.querySelector(".my-class")) {
    // remove
    domEl.removeChild(document.querySelector(".my-class"));

    // add moi
    const audi = document.createElement("audio");
    audi.src = "/audio/FX_text_animation_loop.mp3";
    audi.classList.add("my-class");
    domEl.appendChild(audi);
    document.querySelector(".my-class").play();
  } else {
    const audi = document.createElement("audio");
    audi.src = "/audio/FX_text_animation_loop.mp3";
    audi.classList.add("my-class");
    domEl.appendChild(audi);
    document.querySelector(".my-class").play();
  }
}

export default hackyText;
