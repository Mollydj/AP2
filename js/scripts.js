var pokemonRepository = (function () {
var repository = [
  {name: 'Bulbasaur', height: 0.7, types: ['Grass',' Poison'] },
  {name: 'Charmander', height: 1.6, types: 'Grass'},
  {name: 'Squirtle', height: 0.5, types: 'Water'}
];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };

})();



pokemonRepository.getAll().forEach(function(arrayItem) {
     Object.keys(arrayItem).forEach(function(key){
         document.write(arrayItem[key])
     })
 document.write('<br>')
})
