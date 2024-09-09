const numbers = [1, 2, 3, 4, 5];

const score = [10, 20, 30, 40, 50, 20];

const hightscore = score.filter((score) => score > 30);
console.log(hightscore);

const squad = [
  { name: "Giorgi", isHero: true },
  { name: "Beqa", isHero: true },
  { name: "gio", isHero: false },
  { name: "Levani", isHero: false },
];

const heroes = squad.filter((hero) => hero.isHero);

console.log(heroes);
