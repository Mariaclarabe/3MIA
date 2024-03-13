const nomes =[
{nome: 'Ryu',
tipo: 'vermelho',
idade: 18},

{nome: 'Akuma',
tipo:'fogo',
idade: 16}
]

nomes.filter((element)=>{
    console.log(element.idade > 15)
})
