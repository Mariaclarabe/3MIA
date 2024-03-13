const nomes = ['Ryu','Akuma','Ken','Shun-lin']

nomes.forEach(function(meuItem){
    console.log(meuItem)
})

nomes.forEach(meuItem=>{
    console.log(meuItem)
})

//gera um novo array
nomes.map((element)=>{
    console.log(`Meu lutador é ${element}`)
})

//filtra
nomes.filter((element)=>{
    console.log(element === "Ryu")
})

