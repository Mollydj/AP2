var pokemonRepository = (function () {
var repository = [
  {name: 'Bulbasaur', height: 0.7, types: ['Grass',' Poison'] },
  {name: 'Charmander', height: 1.6, types: 'Grass'},
  {name: 'Squirtle', height: 0.5, types: 'Water'}
];

  function add(pokemon) {
    repository.push(pokemon);
  }

    function values(values) {
    return repository.keys;
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({ name: 'Pikachu' });

Object.keys(pokemonRepository.getAll()).forEach(function(property) {
  document.write(pokemonRepository.getAll()[property].name + ' ');
  document.write(pokemonRepository.getAll()[property].height + ' ');
  document.write(pokemonRepository.getAll()[property].types + ' ');
   document.write('<br>')
});
