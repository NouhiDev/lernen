$(window).on("load", async function () {
  // await delay(2000);
  $(".loader").fadeOut(1000);
  delay(1000).then(() => $(".content").fadeIn(1000));
});

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function back_btn() {
  location.href = "https://nouhidev.github.io";
}

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

var qstn = "";

var curr_index = 0;
var answ = "";

function gen_question() {
  let answer_text = document.getElementById("ans");
  let bereich = document.getElementById("bereich");
  let question_text = document.getElementById("qstn");
  let selected = bereich.value;

  answer_text.innerHTML = "";

  

  switch (selected) {
    case "geo-glob":
      $.getJSON(
        `https://opensheet.elk.sh/1z2m7ZumBBADPKTDQGkk0j1aXZ4QGirgHAdpcn-5Efrc/1`,
        function (data) {
          curr_index = Math.floor(Math.random() * data.length);
          let qstn = data[curr_index].Frage;
          question_text.innerHTML = qstn;
          answ = data[curr_index].Antwort;
          console.log(answ);
        }
      );
      break;
  }
}

function ans_question() {
  let answer_text = document.getElementById("ans");
  answer_text.innerHTML = answ;
}
