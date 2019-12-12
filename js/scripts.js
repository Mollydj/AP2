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

//index in the array
repository.forEach (arrayItem =>

//keys from each index
Object.keys(arrayItem).forEach(keys =>

//For each index in the array, write all the properties
document.write(arrayItem[keys])))
