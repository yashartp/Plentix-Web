var names = ['andrew','julie','jen'];

names.forEach(function(names){
  console.log('forEach',names);
})

names.forEach((names)=> {
  console.log('arrow' , names)
})
