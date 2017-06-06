Template.Equipo_tmp.helpers({
  equipos(){
    return Equipos.find({}, { sort : { puntos: -1 } });
  }
})

Template.Equipo_tmp.events({
  'click .gano'(){
    Equipos.update(this._id, { $inc : { puntos: +3, jugados: +1} } );
  },
  'click .empato'(){
    Equipos.update(this._id, { $inc : { puntos: +1, jugados: +1} } );
  },
  'click .perdio'(){
    Equipos.update(this._id, { $inc : { jugados: +1} } );
  }
})
