'use strict';
const CHARGES = [
  {q:'Who said “just one bite” and lied?',verdict:'Taking “just one bite” way too literally.'},
  {q:'Who says “I’m not hungry” then eats everyone’s food?',verdict:'Being suspiciously hungry for someone who wasn’t hungry.'},
  {q:'Who takes the last Monaco and acts like nothing happened?',verdict:'Making the last Monaco disappear without a witness.'},
  {q:'Who guards their fries but freely takes yours?',verdict:'Operating a one-way fry-sharing policy.'},
  {q:'Who makes everyone wait for a photo before eating?',verdict:'Holding the table’s food hostage for a photo.'},
  {q:'Who reads the menu for 20 minutes and orders the usual?',verdict:'Conducting extensive research. Ordering the usual.'},
  {q:'Who turns every meal into a MasterChef judging round?',verdict:'Serving unsolicited food reviews.'},
  {q:'Who says “I know a better place” at every place?',verdict:'Always knowing a better place. Allegedly.'},
  {q:'Who steals the toppings and leaves the cracker?',verdict:'Grand theft topping.'},
  {q:'Who says “I don’t care” but clearly cares the most?',verdict:'Caring a suspicious amount for someone who doesn’t care.'},
  {q:'Who demands a rematch until they win?',verdict:'Believing every loss is a practice round.'},
  {q:'Who remembers exactly who stole their last bite?',verdict:'Keeping a permanent snack-crime record.'},
  {q:'Who would demand a recount if they lost this election?',verdict:'Questioning the election before the results were in.'},
  {q:'Who gives the longest excuse for the smallest accusation?',verdict:'Turning a tiny accusation into a closing argument.'},
  {q:'Who orders “something to share” then eats most of it?',verdict:'Interpreting “sharing” very creatively.'},
  {q:'Who will be salty if they don’t win Minister of Salt?',verdict:'Campaigning a little too hard for the crown.'}
];
const question = document.getElementById('question');
const randomize = document.getElementById('randomize');
let current = 0;
let remaining = CHARGES.map((_, index) => index).slice(1);
randomize.addEventListener('click', () => {
  if (!remaining.length) remaining = CHARGES.map((_, index) => index).filter(index => index !== current);
  const pick = Math.floor(Math.random() * remaining.length);
  current = remaining.splice(pick, 1)[0];
  question.textContent = CHARGES[current].q;
});
