// ============================================================
//  CONTEUDO DO SITE: EDITE AQUI TUDO O QUE E TEXTO
//  Mantenha as aspas e as virgulas. Salve e recarregue a pagina.
// ============================================================

// Palavras do caca-palavras: MAIUSCULAS, sem acento e sem espaco.
// A maior palavra precisa caber na grade (13 letras no celular). Muitas palavras ficam apertadas: o site tenta sozinho encaixar todas.
const WORDS = ["KARINHO","NICOLITO","LIRIOS","MARINA","ONDAS","LIVROS","SORRISO","TRANCAS","LILAS","PSICOLOGIA","TATUAGENS","POEMAS","VERMELHO","MANHAS","ANIVERSARIO"];

// Os 20 motivos (cartoes que viram). Pode ter mais ou menos de 20.
const RS = ["Seu sorriso muda o clima de qualquer lugar.","Você sente em ondas e nunca finge a maré.","acho que você faz ótimas maquiagens.","Você ama livros e faz o mundo parecer mais fundo.","adoro seu lado complexo de ser","Sua mente é afiada e sua fala é linda.","Seu Jeito de explicar as coisas","Seu jeito meio maluco de ver o mundo","como você se preocupa","Suas tatuagens contam quem você já foi.","Você me dá vontade de ser uma pessoa melhor","Você é boa demais em caça-palavras.","Seus olhos têm um jeito que nunca soube explicar.","você mostra novas perspectiva","Você me mudou e continua mudando.","Você tem coragem de sentir, mesmo com medo.","Os lírios combinam com você, e você com eles.","Você escuta de um jeito que acolhe.","Você me faz pensar em futuros melhores.","Você é você, e isso já é motivo de sobra."];

// Maquina do tempo: d = epoca, t = titulo e artista, n = frase sua.
const SONGS = [
 {d:"o começo",t:"Enfim — Medellín",n:"A primeira música que dediquei a você. Foi aqui que tudo começou."},
 {d:"a nossa primeira",t:"Almas — BK",n:"A primeira música que foi nossa, de nós dois."},
 {d:"nos conhecendo de novo",t:"Eu tenho medo — Fotoemgrupo",n:"Da época em que decidimos nos conhecer de novo."},
 {d:"a quantos carnavais ?",t:"SSA — Sant",n:"Uma música muito especial pra nós dois."},
 {d:"o futuro",t:"Erykah Bauducco — Derxan",n:"A que eu escuto imaginando um futuro com você ouvindo ao meu lado."}];

// Poema que aparece quando ela acha todas as palavras.
const POEMA = `Karinho,
dizem que lírio nasce onde ninguém plantou,
e eu nunca soube se te encontrei
ou se você simplesmente floresceu na minha direção.

Tem em você um lilás que o mundo não sabe nomear,
um vermelho que só aparece em quem não tem medo
e ondas, tantas ondas,
que aprendi a não temer o mar:
aprendi a ficar de pé na tua maré.

Seu sorriso é o jeito do dia pedir desculpa por ter demorado.
Suas tranças guardam histórias que ainda leio devagar,
como quem sabe que os melhores livros não se devoram.

Se um dia a vida me perguntar o que aprendi,
digo: a escrever o seu nome sem pressa.

Feliz aniversário, Karinho 💜
— Nicolito`;
