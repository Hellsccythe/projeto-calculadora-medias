const form = document.getElementById('form-atividade');
const imgAprovado= '<img src="./imagens/aprovado.png" alt= "emoji celebrando"/>'
const imgReprovado= '<img src="./imagens/reprovado.png" alt= "emoji triste"/>'
const atividades =[]
const notas =[]
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>'
const notaMinima = Number(prompt('Digite a nota minima:'))

let linhas =''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha(){
    const inputNomeAtividade =document.getElementById('nome-atividade');
    const inputNotaAtividade =document.getElementById('nota-atividade') 
    
    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida.`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(Number(inputNotaAtividade.value))
        
        let linha= '<tr>'
        linha += `<td> ${inputNomeAtividade.value}</td>`
        linha += `<td> ${inputNotaAtividade.value}</td>`
        linha += `<td> ${inputNotaAtividade.value >=notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
        linhas+=linha
    }
    
    

    

    inputNomeAtividade.value=''
    inputNotaAtividade.value= ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML=linhas
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >=notaMinima ? spanAprovado : spanReprovado

}

function calculaMediaFinal (){
    let somadasNotas =0

    for(i=0; i<notas.length; i++)
    somadasNotas +=notas[i]

    return somadasNotas/notas.length
}