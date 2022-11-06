let number;
function pesquisar(){
    number = document.getElementById('pokemon').value;
    resposta();

}
    function resposta(){
        fetch('https://pokeapi.co/api/v2/pokemon/'+number)
        .then(response => response.json())
        .then(data => {
            console.table(data);
            document.getElementById("nome").innerText = data.forms[0].name;
            document.getElementById("foto").src = data.sprites.front_default;

        })
    }