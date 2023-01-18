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

var philo_fragen = [
  "Was bedeuted das Wort 'Philosophie'?",
  "Womit beschäftigt sich die Philosophie?",
  "Wann war die Achsenzeit der Philosophie?",
  "Was ist die abendländische Philosophie?",
  "Wer ist als der Urphilosoph bekannt?",
  "Was regte die vielen Weltenstehungstheorien an?",
  "Was bedeuted der Übergang vom Mythos zum Logos?",
  "Was sind die Methoden der Philosophie?",
  "Wie nennt man die Vorsokratiker noch?",
  "Was weißt du über Anaximander?",
  "Was weißt du über Thales von Milet?",
  "Was weißt du über Anaximenes?",
  "Was weißt du über Pythagoras?",
  "Was weißt du über Heraklit?",
  "Was weißt du über Demokrit?",
  "Um was geht es beim Schleier des Nichtwissens und von wem ist dieser?",
  "Was ist Platons wichtigstes Werk?",
  "Von welchen 3 Ständen spricht Platon in seinem wichtigsten Werk?",
  "Was ist Hedonismus? Was ist das Gegenteil davon?",
  "Was ist Eugenik?",
  "Was ist das Höhlengleichnis?",
  "Was ist das Liniengleichnis?",
  "Was ist das Sonnengleichnis?",
  "Was ist die Zweiweltentheorie?",
  "Was sind die Sokratischen Methoden?",
  "Was ist Daimonion?",
  "Was sind Vertreter der Sophisten?",
  "Wieso war Platon gegen Sophisten?",
];

var philo_ans = [
  "Liebe zur Weisheit.",
  "Grundfragen des Menschenseins in vernünftig-argumentativer Weise.",
  "Mitte des ersten Jahrtausends vor Christus (200-800 v. Chr.).",
  "Philosophie in Griechenland.",
  "Thales von Milet.",
  "Der Übergang vom Mythos zum Logos.",
  "Gedankenexperiment, Essay, Begriffe definieren, Mind-Map, Perspektivenwechsel.",
  "Naturphilosophen.",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "Mensch kann über zukünftige Gesellschaftsordnung entscheiden, weiß aber nicht, an welcher Stelle in dieser Ordnung er sein wird.  Stimmt für eine gerechte Ordnung",
  "Politeia.",
  "Nährstand, Wehrstand, Lehrstand.",
  "Leben für Lust. Gegenteil: Askese.",
  "Nur Leute mit guten Genen dürfen sich fortpflanzen.",
  "Menschen in einer Höhle eingesperrt, sehen nur Schatten von Objekten --> sehen nicht die Dinge, wie sie wirklich sind. Welt der Ideen wirft „Schatten“ auf unsere Welt. Einer flüchtet (Philosoph, der Wahrheit für sich erkennt), sieht die echten Objekte, kommt zurück und erzählt es, keiner glaubt ihm und wird später umgebracht",
  "",
  "-",
  "-",
  "Unterricht durch Fragen, ohne Arroganz und Zynismus diskutieren, nicht urteilen, ...",
  "Innere Stimme des moralisch richtigen Handelns.",
  "Protagoras, Gorgias",
  "Bedrohung für Aristokratie --> Plebejer Möglichkeit zur Bildung und höheren Ämtern.",
];

var qstn = "";

function gen_question() {
  let answer_text = document.getElementById("ans");
  let bereich = document.getElementById("bereich");
  let question_text = document.getElementById("qstn");
  let selected = bereich.value;

    answer_text.innerHTML = "";

  switch (selected) {
    case "philo-test":
      qstn = philo_fragen.sample();
      question_text.innerHTML = qstn;
      break;
  }
}

function ans_question() {
  let answer_text = document.getElementById("ans");
  answer_text.innerHTML = philo_ans[philo_fragen.indexOf(qstn)];
}
