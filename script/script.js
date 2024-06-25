document.writeln('messaggio con writeln');


let first_name = prompt('inserisci il tuo nome');
let second_name = prompt('inserisci il tuo cognome');

document.getElementById('template_literal').innerText = `${first_name} ${second_name}`;

const STRING = first_name;
console.log(STRING);
let full_string = `${first_name} ${second_name}`;
console.log(full_string);