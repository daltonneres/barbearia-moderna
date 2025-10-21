// Frases dinâmicas
const frases = [
  "Estilo, Precisão e Atitude",
  "Cada corte é uma obra de arte",
  "Agende seu horário e transforme seu visual",
  "Barbearia Maestro — excelência em cada detalhe"
];

let fraseIndex = 0;
const fraseElemento = document.getElementById('frase-dinamica');
setInterval(() => {
  fraseIndex = (fraseIndex + 1) % frases.length;
  fraseElemento.textContent = frases[fraseIndex];
}, 3000);

// Envio do formulário
const form = document.getElementById('formContato');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
  form.reset();
});

const fotosContainer = document.getElementById('fotos-clientes');

function moverGaleria() {
  const primeiro = fotosContainer.querySelector('img:first-child');
  const largura = primeiro.offsetWidth + 10; // largura + gap
  fotosContainer.style.transition = 'transform 1s linear';
  fotosContainer.style.transform = `translateX(-${largura}px)`;

  setTimeout(() => {
    fotosContainer.style.transition = 'none';
    fotosContainer.style.transform = 'translateX(0)';
    fotosContainer.appendChild(primeiro);
  }, 1000);
}

// Desliza a cada 4 segundos (3000ms)
setInterval(moverGaleria, 3000);

// Exibir e-mail ao clicar
function mostrarEmail() {
  alert('E-mail: contato@barbeariamaestro.com');
}
