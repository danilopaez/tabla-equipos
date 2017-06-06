datosDeEquipos = [
  { club: 'Boca'},
  { club: 'River'},
  { club: 'Talleres'},
  { club: 'Belgrano'},
]

Template.Equipo_tmp.helpers({
  equipos(){
    return datosDeEquipos;
  }
})
