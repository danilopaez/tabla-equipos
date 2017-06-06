Meteor.methods({
  reiniciar(){
    Equipos.update({}, { $set : {puntos: 0, jugados: 0}}, { multi : 1 });
  }
})
