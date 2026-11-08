/*
 * Content data for the Daniel Retzler website.
 * All visitor-facing text is German. Edit texts here, not in the HTML.
 */

// Gemstones: colour is only used for the small round swatch in the UI.
// "family" lets a variety (e.g. Rhodolith) match the zodiac stone it belongs to (Granat).
window.STONES = {
  "Obsidian":    { color: "#1a1a24", text: "Der Überlieferung nach schützt der tiefschwarze Vulkanstein die Aura wie ein dunkler Spiegel und schenkt Klarheit im Innersten." },
  "Jadeit":      { color: "#5fae7a", text: "Gilt seit alters her als Stein der Harmonie und des Gleichgewichts. Er soll Ruhe und stille Zuversicht in die Aura tragen." },
  "Amethyst":    { color: "#8a5bc4", text: "Der violette Stein der Intuition. Er soll den Geist beruhigen und die Aura mit sanfter Klarheit erfüllen." },
  "Malachit":    { color: "#1f8a5a", text: "Mit seinen tiefgrünen Wirbeln gilt er als Stein der Verwandlung. Er soll Mut zum Neubeginn wecken." },
  "Lapislazuli": { color: "#2a4aa8", text: "Der königsblaue Stein der Weisheit. Er soll Selbsterkenntnis und innere Wahrheit in der Aura stärken." },
  "Mondstein":   { color: "#c9d4e8", text: "Er schimmert wie Mondlicht. Der Überlieferung nach stärkt er das Gefühl und die Intuition und bringt die Aura in einen ruhigen Rhythmus." },
  "Aquamarin":   { color: "#7fd0e0", text: "Der Stein des Meeres soll Gelassenheit schenken und der Aura klare, frische Weite geben." },
  "Tigerauge":   { color: "#b07a2a", text: "Sein goldbrauner Schimmer steht für Selbstvertrauen und Standfestigkeit. Er soll die Aura mit Kraft und Wachheit erfüllen." },
  "Rosenquarz":  { color: "#f0a8bc", text: "Der sanfte rosa Stein der Herzlichkeit. Er soll Liebe, Mitgefühl und Selbstannahme in der Aura nähren." },
  "Labradorit":  { color: "#4d7f93", text: "Sein geheimnisvolles Schillern gilt als Spiegel verborgener Möglichkeiten. Er soll Fantasie und Wandlungskraft der Aura wecken." },
  "Türkis":      { color: "#2fb5b0", text: "Seit Jahrtausenden ein Schutzstein. Er soll die Aura stärken und den Ausdruck der eigenen Wahrheit fördern." },
  "Onyx":        { color: "#121212", text: "Der tiefschwarze Stein der Stärke. Er soll Durchhaltevermögen geben und die Aura erden." },
  "Peridot":     { color: "#a7c957", text: "Sein frisches Grün steht für Neubeginn und Leichtigkeit. Er soll die Aura mit Licht und Lebensfreude beleben." },
  "Bergkristall":{ color: "#e8f1f5", text: "Der klare Stein der Reinheit. Er soll Gedanken ordnen und die Aura reinigen und verstärken." },
  "Rhodonit":    { color: "#c4476b", text: "Der rosenrote Stein mit dunklen Adern gilt als Stein des Mitgefühls. Er soll die Aura in Balance bringen." },
  "Amazonit":    { color: "#5ec2a8", text: "Sein sanftes Blaugrün soll Gelassenheit schenken und Wahrheit und Harmonie in der Aura fördern." },
  "Citrin":      { color: "#e8b923", text: "Der sonnengelbe Stein gilt als Stein der Lebensfreude. Er soll die Aura mit Wärme und Zuversicht erfüllen." },
  "Granat":      { color: "#8e1b2e", text: "Der feurig-rote Stein der Leidenschaft. Er soll Lebenskraft und Mut in der Aura entfachen." },
  "Rauchquarz":  { color: "#7a6a5a", text: "Der erdige Stein soll Ruhe geben, Anspannung lösen und die Aura mit Bodenhaftung stärken." },
  "Fluorit":     { color: "#8ec9b5", text: "Der vielfarbige Stein der Ordnung. Er soll den Geist klären und die Aura fokussieren." },
  "Sodalith":    { color: "#2c3f8f", text: "Der tiefblaue Stein der Logik. Er soll Klarheit im Denken und innere Ruhe in die Aura bringen." },
  // Stones that appear in the bracelets but not in the zodiac list:
  "Lavastein":   { color: "#3a3a3a", text: "Aus vulkanischem Gestein geformt. Er gilt als Erdungsstein, der Kraft und Beständigkeit in die Aura schenken soll." },
  "Karneol":     { color: "#e0702f", text: "Der orangerote Stein der Lebendigkeit. Er soll Mut, Antrieb und Wärme in der Aura wecken." },
  "Rhodolith":   { color: "#b5154f", family: "Granat", text: "Ein himbeerroter Granat. Er soll Herzenswärme und Lebensfreude in der Aura entfachen." }
};

// The 12 zodiac signs with the three matching stones each.
window.SIGNS = [
  { id: "widder",    name: "Widder",    symbol: "♈", dates: "21.03. – 19.04.", stones: ["Obsidian", "Jadeit", "Amethyst"] },
  { id: "stier",     name: "Stier",     symbol: "♉", dates: "20.04. – 20.05.", stones: ["Malachit", "Lapislazuli", "Mondstein"] },
  { id: "zwillinge", name: "Zwillinge", symbol: "♊", dates: "21.05. – 20.06.", stones: ["Aquamarin", "Tigerauge", "Mondstein"] },
  { id: "krebs",     name: "Krebs",     symbol: "♋", dates: "21.06. – 22.07.", stones: ["Mondstein", "Rosenquarz", "Labradorit"] },
  { id: "loewe",     name: "Löwe",      symbol: "♌", dates: "23.07. – 22.08.", stones: ["Türkis", "Onyx", "Amethyst"] },
  { id: "jungfrau",  name: "Jungfrau",  symbol: "♍", dates: "23.08. – 22.09.", stones: ["Aquamarin", "Peridot", "Bergkristall"] },
  { id: "waage",     name: "Waage",     symbol: "♎", dates: "23.09. – 22.10.", stones: ["Rhodonit", "Lapislazuli", "Amazonit"] },
  { id: "skorpion",  name: "Skorpion",  symbol: "♏", dates: "23.10. – 21.11.", stones: ["Labradorit", "Citrin", "Granat"] },
  { id: "schuetze",  name: "Schütze",   symbol: "♐", dates: "22.11. – 21.12.", stones: ["Granat", "Rauchquarz", "Lapislazuli"] },
  { id: "steinbock", name: "Steinbock", symbol: "♑", dates: "22.12. – 19.01.", stones: ["Fluorit", "Sodalith", "Malachit"] },
  { id: "wassermann",name: "Wassermann",symbol: "♒", dates: "20.01. – 18.02.", stones: ["Amethyst", "Obsidian", "Sodalith"] },
  { id: "fische",    name: "Fische",    symbol: "♓", dates: "19.02. – 20.03.", stones: ["Labradorit", "Türkis", "Aquamarin"] }
];

// The 9 bracelets (images/1.png ... images/9.png).
// "stones" must be keys of STONES. The matching zodiac signs are computed automatically.
// Names and texts are first drafts: Daniel should confirm the stones.
window.BRACELETS = [
  { img: "images/1.png", name: "Granat-Medaillon", stones: ["Granat"],
    text: "Ein tiefroter Granat, kunstvoll eingefasst auf schwarzem Band. Der Überlieferung nach weckt er Leidenschaft und Lebenskraft und lädt die Aura mit warmer, feuriger Energie." },
  { img: "images/2.png", name: "Amethyst auf Leder", stones: ["Amethyst"],
    text: "Ein facettierter Amethyst auf weichem schwarzem Leder. Er gilt als Stein der inneren Ruhe und soll Intuition und Klarheit in der Aura fördern." },
  { img: "images/3.png", name: "Lava & Onyx", stones: ["Lavastein", "Onyx"],
    text: "Dunkle Steine auf hellem, geflochtenem Leder. Lavastein und Onyx gelten als Kraft- und Erdungssteine und sollen der Aura Halt und Beständigkeit geben." },
  { img: "images/4.png", name: "Türkis-Herz", stones: ["Türkis"],
    text: "Blaue Türkisperlen mit einem Herz in der Mitte, von Hand geknüpft. Der Türkis gilt seit Jahrtausenden als Schutzstein und soll die Aura stärken." },
  { img: "images/5.png", name: "Citrin-Sonne", stones: ["Citrin"],
    text: "Sonnengelbe Citrine an einem orangefarbenen Band. Der Überlieferung nach schenken sie Lebensfreude und Zuversicht und erfüllen die Aura mit Wärme." },
  { img: "images/6.png", name: "Tigerauge-Gold", stones: ["Tigerauge"],
    text: "Goldbraune Tigeraugen auf feinem goldenem Band. Sie stehen für Selbstvertrauen und Standfestigkeit und sollen die Aura mit Kraft erfüllen." },
  { img: "images/7.png", name: "Rhodolith-Funken", stones: ["Rhodolith"],
    text: "Zarte himbeerrote Rhodolith-Perlen, gefasst von goldenen Akzenten. Dieser Granat soll Herzenswärme und Lebensfreude in der Aura entfachen." },
  { img: "images/8.png", name: "Karneol-Perlen", stones: ["Karneol"],
    text: "Runde Karneol-Perlen in warmem Pfirsichton. Der Stein der Lebendigkeit soll Mut und Antrieb wecken und die Aura wärmen." },
  { img: "images/9.png", name: "Bunter Steinmix", stones: ["Karneol", "Türkis", "Malachit", "Amethyst"],
    text: "Ein feines Armband mit kleinen Steinen in vielen Farben. Jeder Stein bringt eine eigene Kraft mit: Zusammen sollen sie die Aura vielfältig und lebendig halten." }
];
