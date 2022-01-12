var idade = 16
if (idade < 15){
    console.log('Não vota')
} else {
    if (idade < 18){
    console.log('Voto opcional')
    }
  else {
    if (idade > 18)
    console.log('Voto obrigatório')
  }
}

//Se fosse uma condição simples, uma vez que o if não fosse compatível, o JS leria como se o else fosse o certo (if se sua idade não é menor que 15, else você vota), mesmo
//que existam condições reais onde você não precisaria votar. Dá pra aplicar pra horas tb, se o sistema te dá boa noite depois que passar dos meio dia, isso é por quê
//ele está lendo que é bom dia antes dos meio dia e boa noite depois dos meio dia.