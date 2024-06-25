let first_name = prompt('inserisci il tuo nome');
let second_name = prompt('inserisci il tuo cognome');
let colour = prompt('inserisci il tuo colore preferito');

document.getElementById('template_literal').innerText = `${first_name} ${second_name} ${colour}`;

const STRING = first_name;
console.log(STRING);
let full_string = `${first_name} ${second_name} ${colour}`;
console.log(full_string);

