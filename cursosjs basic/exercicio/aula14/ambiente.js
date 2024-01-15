function aluno (nome, nota){
    this.nome = nome;
    this.nota = nota;
  
    this.dados_anonimos =function(){
      setTimeout(()=>{
        console.log(`Nome: ${nome}`)
        console.log(`Nota: ${nota}`)
      }, 2000)
    
  }}
  
  const al1 = new aluno('Wagner',10)
  al1.dados_anonimos()

