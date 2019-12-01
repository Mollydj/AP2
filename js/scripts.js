var repository = [
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

for (var i = 0; i < repository.length; i++)
{
    if(repository[i].height >1) {console.log(repository[i].height = (repository[i].height) + ' - Wow! Thats Big!)');} else{ console.log(repository[i].height = (repository[i].height) + ') ');}
    document.write(repository[i].name + ' ' + '(height: ' + repository[i].height + ' ' + repository[i].types)
    document.write('<br>');
}
