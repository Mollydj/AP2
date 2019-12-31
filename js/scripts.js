
var pokemonRepository = (function () {
  var repository = [
    {name: 'Bulbasaur', height: 0.7, types: ['Grass',' Poison'] },
    {name: 'Charmander', height: 1.6, types: 'Grass'},
    {name: 'Squirtle', height: 0.5, types: 'Water'}
  ];

//>Button and List Informartion
  function addListItem(pokemon){
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-name');
    listItem.appendChild(button);
    $pokemonList.appendChild(listItem);

//Event Listener here
    button.addEventListener('click', function () {
      showDetails(pokemon.name);
    });
  }
  //< End of Button and List Information



  function showDetails(pokemon){
    console.log(pokemon);
  }

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

})();


var $pokemonList = document.querySelector('ul');

//forEach Loop
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
