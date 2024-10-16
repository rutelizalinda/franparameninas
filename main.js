function criaCartao(categoria, pergunta, resposta) {
    letcontainer = document.getElementsById('container');
    letcartao = document.createElement('article');
    Cartao.className = 'cartao';
    cartao.innerHTML =` 
<div class="conteudo-cartao">
   <h3>${categoria}</h3>
<div class="pergunta-cartao">
    <p>${pergunta}</p>

 </div>
 <div class="resposta-cartao">
     <p>${resposta}</p>
  </div>
</div>
`

    
}