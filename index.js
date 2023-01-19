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
  "Was ist der Kugelmensch?",
  "Was bedeutet platonische Liebe eigentlich?",
  "Um was geht es bei 'Genius malignus'?",
  "Was ist die Mäeutik?",
  "Welche zwei Richtungen gab es bei der Erkenntnistheorie?",
  "Welche Theorien gibt es bei der pessimistischen Erkenntnistheorie?",
  "Welche Theorien gibt es bei der optimistischen Erkenntnistheorie?",
  "Was sind Relativismus, Skeptizismus und Konstruktivismus und wer vertrat diese?",
  "Was ist der Rationalismus?",
  "Was ist der Empirismus?",
  "Welche neuen Lehren gab es in der Aufklärung?",
  "Was weißt du über Parminedes?",
  "Was weißt du über Sokrates?",
  "Was ist Aporie?",
  "Was weißt du über Aristoteles?",
  "Was ist Solipsismus?",
  "Was weißt du über Brain in the Vat?",
  "Was heißt 'Homo mensura' und von wem stammt es?",
  "Was ist die Bedeutung der Sophisten?"
];

var philo_ans = [
    "Liebe zur Weisheit.",
    "Grundfragen des Menschenseins in vernünftig-argumentativer Weise.",
    "Mitte des ersten Jahrtausends vor Christus (200-800 v. Chr.).",
    "Philosophie in Griechenland.",
    "Thales von Milet.",
    "Der Übergang vom Mythos zum Logos.",
    "Davor waren Naturphänomene Gottes' Bestrafungen, dann versucht diese logisch zu erklären.",
    "Gedankenexperiment, Essay, Begriffe definieren, Mind-Map, Perspektivenwechsel.",
    "Naturphilosophen.",
    "Urstoff: Apeiron, erste Weltkarte, Sonnenuhr, erster Kosmologe, Tag-und-Nacht-Gleiche, Sonnenwende, Erde = Zylinder umkreist mir feurigen Rädern, unzählige Welten, Seele ist verbunden mit Luft, ...",
    "Urstoff: Wasser, erster Materialist, erster griech. Philosoph, Teil d. 7 Waisen, Lehrer von Anaximander, Sonnenfinsternis, Höhe von Pyramiden mit Schatten, Satz des Thales, Erde schwebt auf Wasser; Wasserbeben...",
    "Urstoff: Luft, alles ist Verdünnung/Verdichtung von Luft, Beweis für Kugelgestalt, Erde=Scheibe auf Luftmeer, Himmel=Halbkugel mit Sternen benagelt.",
    "Urstoff: Zahlen, alles wiederholt sich, von Samos, in Ägypten heilige Wissenschaften gelernt, pythagoräische Schule, Wiedergeburt der Seele, 1-10 besonders, 1-4 Tetraktys, magische Zahlencodes tragen, ...",
    "Urstoff: Feuer (ewiges Weltfeuer), 'panta rhei', alles in Bewegung/Veränderung ständig, Gegensätze halten Welt zusammen, 4 Dimensionen, Logos = kosmische Notwendigkeit für Gleichgewicht der 4 Elemente, ...",
    "Urstoff: Atome, atomistischer Materialismus, jedes Atom hat Form eines geometrischen regelmäßigen Körpers, Weltall unendlich, Erde nicht flach, Induktionslogik, ...",
    "Mensch kann über zukünftige Gesellschaftsordnung entscheiden, weiß aber nicht, an welcher Stelle in dieser Ordnung er sein wird -> Stimmt für eine gerechte Ordnung.",
    "Politeia.",
    "Nährstand, Wehrstand, Lehrstand.",
    "Leben für Lust. Gegenteil: Askese.",
    "Nur Leute mit guten Genen dürfen sich fortpflanzen.",
    "Menschen in einer Höhle eingesperrt, sehen nur Schatten von Objekten --> sehen nicht die Dinge, wie sie wirklich sind. Welt der Ideen wirft „Schatten“ auf unsere Welt. Einer flüchtet (Philosoph, der Wahrheit für sich erkennt), sieht die echten Objekte, kommt zurück und erzählt es, keiner glaubt ihm und wird später umgebracht.",
    "Senkrechte Linie in 2 Teile (denkzugänglich;sinnzugänglich), nochmal geteilt (Dianoia=Nachdenken, Noesis=Einsicht; Eikasia=Vermuten, Pistis=Glauben), ...",
    "Dank der Sonne werden Dinge sichtbar, verleiht die Fähigkeit zu sehen, Sonne gleichgestellt mit der Idee des Guten (=höchste Erkenntnis, übergeordnet), Erkenntnis und Wahrheit erst im Licht erkennbar, ...",
    "Welt der Ideen (=Urbilder, zeitlos, objektiv) ist der Welt der Sinne (= unvollkommene Abbildungen der Welt der Ideen) übergeordnet.",
    "Unterricht durch Fragen, ohne Arroganz und Zynismus diskutieren, nicht urteilen, ...",
    "Innere Stimme des moralisch richtigen Handelns.",
    "Protagoras, Gorgias",
    "Bedrohung für Aristokratie --> Plebejer Möglichkeit zur Bildung und höheren Ämtern.",
    "Früher Menschen 4 Beine & Arme, 2 Köpfe, dann geteilt und Liebe ist die Suche nach dem anderen Teil.",
    "Liebe zu Allen.",
    "Ob ein böser Geist/Gott uns alles vorgaukelt. Geprägt von René Descartes.",
    "Jeder Mensch tragt die Erkenntnise in sich, muss sie nur noch durch Fragen herausbekommen.",
    "Pessimistisch und optimistisch.",
    "Skeptizismus, Relativismus, Konstruktivismus.",
    "Rationalismus, Empirismus",
    "Relativismus: keine absolute Wahrheit, alles in Relation zueinander (abhängig), Skeptizismus: keine Gewissheit, Konstruktivismus: Jeder konstruiert eigene Welt.",
    "Alles hinterfragen, Welt durch vernunft erkennen, ...",
    "Welt durch Sinne und Erfahrungen erkennen, auch Sensualismus, Vernunft = keine Quelle der Erkenntnis",
    "Kritizismus, kritischer Rationalismus, Neopositivismus.",
    "Begründer eleatischen Schule, Urstoff/theorie: 'Es ist.', erster Rationalist, beschäftigt sich mit dem Nichts, ...",
    "-",
    "Gesprächspartner sieht sein beschränktes Wissen ein --> sinnvolle Diskussion.",
    "-",
    "Nur das Ich existiert, unsere Welt existiert nur für uns.",
    "-",
    "Der Mensch ist das Maß aller Dinge, von Protagoras.",
    "Hinwendung zum Menschen, weg von Natur, Erkenntnis und Rhetorik werden zum Zentrum, vernünftiges Denken, ..."
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
