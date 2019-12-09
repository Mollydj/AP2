const repository = [
  {
    name: 'Bulbasaur',
    height: 0.7,
    types: ['Grass',' Poison']
  },
  {
    name: 'Charmander',
    height: 1.6,
    types: 'Grass'
  },
  {
    name: 'Squirtle',
    height: 0.5,
    types: 'Water'
  }
]

Object.keys(repository).forEach(function(property) {
  document.write(JSON.stringify(repository[property]));
}); 
