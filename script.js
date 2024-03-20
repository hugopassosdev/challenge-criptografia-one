const textoprincipal = document.querySelector('#textooriginal');
const resultado = document.querySelector('#textoresultado');
const btnCopiar = document.querySelector('#botaocopiartexto');

/* carregar automaticamente ao iniciar a pagina */
window.addEventListener("load", function() {     
   btnCopiar.style.display = 'none';   
});


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() { 
    escondeImagem();
    const textoEncriptado = encriptar(textoprincipal.value);
    console.log(textoEncriptado);
    resultado.value = textoEncriptado.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    console.log(resultado.value);
    document.getElementById('msgnaoencontrada').style.display = 'none';
    document.getElementById('msgdigiteotexto').style.display = 'none';
    document.getElementById('textoresultado').style.display = 'block';
    mostrarCopiar();
   
}


function escondeImagem() {  
    document.getElementById('imagemlupa').style.display = 'none';

}

function mostrarCopiar() {
    btnCopiar.style.display = 'block';
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();       
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]    

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
 return stringEncriptada;
}

function btnDesencriptar() {
    escondeImagem();
    console.log (resultado.value)
    const textoDesencriptado = descriptar(textoprincipal.value);
    console.log(textoDesencriptado);
    resultado.value = textoDesencriptado.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    document.getElementById('msgnaoencontrada').style.display = 'none';
    document.getElementById('msgdigiteotexto').style.display = 'none';
    document.getElementById('textoresultado').style.display = 'block';
    mostrarCopiar();
}

function descriptar(stringDescriptada) {
    stringDescriptada = stringDescriptada.toLowerCase();       
    let matrizCodigo = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']]

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptada.includes(matrizCodigo[i][0])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
 return stringDescriptada;
}

function copiarTexto() {
    const texto = document.getElementById('textoresultado');
    texto.select();
    navigator.clipboard.writeText(texto.value);
    alert(texto.value + 'copiado para a área de transferência');

               
}
    