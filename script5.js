// const numbers = [1, 2, 3, 4, 5];

// const score = [10, 20, 30, 40, 50, 20];

// const hightscore = score.filter((score) => score > 30);
// console.log(hightscore);

// const squad = [
//   { name: "Giorgi", isHero: true },
//   { name: "Beqa", isHero: true },
//   { name: "gio", isHero: false },
//   { name: "Levani", isHero: false },
// ];

// const heroes = squad
//   .filter((sq) => sq.isHero)
//   .map((hero) => `hello ${hero.name}`);
// console.log(heroes);

// const users = [
//   { name: "Giorgi", score: 10 },
//   { name: "Beqa", score: 20 },
//   { name: "gio", score: 40 },
//   { name: "Levani", score: 100 },
// ];

// const gadasulebi = users.filter((gada) => gada.score > 30);

// const chachrilebi = users.filter((chaw) => chaw.score < 30);

// console.log(gadasulebi);

// console.log(chachrilebi);

// const rate = gadasulebi.map((pass) => {
//   let grade;
//   if (pass.score > 50) {
//     grade = "kargad dawere";
//   } else {
//     grade = "arc ise kargad dawere";
//   }
//   return { chemisaxeli: pass.name, shefaseba: grade };
// });

// console.log(rate);

// const myUser = {
//   name: "Giorgi",
//   age: 15,
//   Email: "Giorgi@.gmail.com",
//   country: "Georgia",
// };

// let role = "Admin";

// const newUser = { ...myUser, role };

// console.log(newUser);

const squad = [
  { name: "Giorgi", isHero: true },
  { name: "Beqa", isHero: true },
  { name: "gio", isHero: false },
  { name: "Levani", isHero: false },
];

const heroes = squad.map((hero) => {
  let status = hero.isHero ? "hero" : "not hero";
  // let status;
  // if (hero.isHero) {
  //   status = "Hero";
  // } else {
  //   status = "Not Hero";
  // }

  return { ...hero, status };
});

console.log(heroes);
