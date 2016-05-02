'use strict';

angular.module('confusionApp')

.service('menuFactory', function() {

    var sports=[{
                  _id:0,
                  name:'Spinning', 
                  image: 'images/spinnign-1.jpg',
                  category: 'martes', 
                  label:'New Spinning',
                  price:'6:30 am',
                  description:'En realidad por la señora que no tiene tanta tiempo pero quiere quemar calorías qué clase puede ser mejor que está todo los lunes con Alfonso arrancar la semana como quieres sigurir.',
                  comments: [
                       {
                           rating:5,
                           comment:"Imagine all the eatables, living in conFusion!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Eat it, just eat it!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Ultimate, Reaching for the stars!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"It's your birthday, we're gonna party!",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },
                {
                  _id:1,
                  name:'Pilates',
                  image: 'images/sports/pilates.jpg',
                  category: 'lunes', 
                  label:'Moderate Todo cuerpo',
                  price:'6:30 am',
                  description:'Pilates fuerza o resistencia combinada tenemos un excelente instructor aquí en Mck y sería fantástico si todo el mundo tuviera la oportunidad de tratar de entrenar con el, no es sólo un ejercicio por las mujeres , los hombres pueden beneficiarse de eso tambien.',
                   comments: [
                       {
                           rating:5,
                           comment:"Yorel mejor que cualquier otra profe!",
                           author:"Stephenia",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"No puedo recomendar esta clase lo suficientemente",
                           author:"Adriana McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Estas clases me ayudan a reducir la cintura pero aumentar me fuerza.",
                           author:"Michael Torres",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Qué buena clase",
                           author:"Regina",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Harder than I thought!",
                           author:"Emily",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                }, {
                  _id:2,
                  name:'Pilates extrema',
                  image: 'images/sports/pilates.jpg',
                  category: 'martes', 
                  label:'Difícil',
                  price:'6:30 am',
                  description:'Es una clase única, que combina flexibilidad fuerza resistencia y habilidades generales las clases están diseñadas para diferentes niveles, pero los que empujan a sí mismos más caliente que podían esperar de 290 calorías sesiones de 20 minutos en el tiempo para los débiles de corazón esperar grandes resultados.',
                   comments: [
                       {
                           rating:5,
                           comment:"Excelente clase excelente instructor",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"If you want results and don't have time try this out ",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Esta es una gran clase, tengo todo la intención de obtener mejores  técnicas",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Ultimate, Reaching for the stars!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Mantener el buen trabajo jorge nos vemos pronto!",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },
                {
                  _id:3,
                  name:'Spinning', 
                  image: 'images/spinnign-1.jpg',
                  category: 'lunes', 
                  label:'New Spinning',
                  price:'6:30 am',
                  description:'En realidad por la señora que no tiene tanta tiempo pero quiere quemar calorías qué clase puede ser mejor que está todo los lunes con Alfonso arrancar la semana como quieres sigurir.',
                  comments: [
                       {
                           rating:5,
                           comment:"Imagine all the eatables, living in conFusion!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Eat it, just eat it!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Ultimate, Reaching for the stars!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"It's your birthday, we're gonna party!",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },
               {
                  _id:4,
                  name:'Pilats', 
                  image: 'images/sports/pilates.jpg',
                  category: 'jueves', 
                  label:'Moderate tumms',
                  price:'6:30 am',
                  description:'Funcional es ahora estará con nosotros durante un número de años y como nadie que participan en los desfiles el mejor medicamento para el entrenamiento sin el estrés que estás articulaciones se unen en favor Danie con un gran maestro.',
                   comments: [
                       {
                           rating:5,
                           comment:"buenísima esta clase!",
                           author:"John",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"si no has hecho te toca",
                           author:"Pauli",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"qué excelente clase",
                           author:"Javier",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"lo que me encanta de eso es la flexibilidad que he ganado",
                           author:"Hilary",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"looking forward to the next class!",
                           author:"James",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:5,
                  name:'Pilates ', 
                  image: 'images/Pilates.png',
                  category: 'viernes', 
                  label:'tums & bums',
                  price:'6:30am',
                  description:'Oye esa clase 1 toca por lo menos dos veces del mes si ayuda en realidad bajar los deberes de grasa mientras mantiene tonificado todos los músculos del abdomen y glúteo que a veces son difíciles colorizar y entrenar pero con esa clase nos promete que va a ver resultados.',
                   comments: [
                       {
                           rating:5,
                           comment:"no está fácil!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"no está fácil!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"no está fácil!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"el profe, esta muy bien!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Que buenas resultadtos !",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:6,
                  name:'Pilates ', 
                  image: 'images/Pilates.png',
                  category: 'martes', 
                  label:'tums & bums',
                  price:'7:00 pm',
                  description:'Oye esa clase 1 toca por lo menos dos veces del mes si ayuda en realidad bajar los deberes de grasa mientras mantiene tonificado todos los músculos del abdomen y glúteo que a veces son difíciles colorizar y entrenar pero con esa clase nos promete que va a ver resultados.',
                   comments: [
                       {
                           rating:5,
                           comment:"no está fácil!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"no está fácil!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"no está fácil!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"el profe, esta muy bien!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Que buenas resultadtos !",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:7,
                  name:'Cross Fit ', 
                  image: 'images/sports/cross2.jpg',
                  category: 'lunes', 
                  label:'Tonificación',
                  price:'6:30 am',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando lunes",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                },{
                  _id:8,
                  name:'Baile', 
                  image: 'images/sports/aerobic.jpg',
                  category: 'lunes', 
                  label:'Fast X lunes',
                  price:'6:30 pm',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando lunes",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                },{
                  _id:9,
                  name:'Functional Training', 
                  image: 'images/sports/girl_ball.jpg',
                  category: 'lunes', 
                  label:'Especial',
                  price:'6:30 pm',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando lunes",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                },{
                  _id:10,
                  name:'Pilates Training', 
                  image: 'images/sports/pilates.jpg',
                  category: 'lunes', 
                  label:'Especial',
                  price:'7:00 pm',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando lunes",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                },{
                  _id:11,
                  name:'Spining Sprint ', 
                  image: 'images/spinning1.png',
                  category: 'lunes', 
                  label:'Especial',
                  price:'7:00 pm',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando lunes",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                },{
                  _id:12,
                  name:'Bailoterapia',
                  image: 'images/sports/aerobic.jpg',
                  category: 'martes', 
                  label:'Moderate Todo cuerpo',
                  price:'6:30 pm',
                  description:'Pilates fuerza o resistencia combinada tenemos un excelente instructor aquí en Mck y sería fantástico si todo el mundo tuviera la oportunidad de tratar de entrenar con el, no es sólo un ejercicio por las mujeres , los hombres pueden beneficiarse de eso tambien.',
                   comments: [
                       {
                           rating:5,
                           comment:"Yorel mejor que cualquier otra profe!",
                           author:"Stephenia",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"No puedo recomendar esta clase lo suficientemente",
                           author:"Adriana McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Estas clases me ayudan a reducir la cintura pero aumentar me fuerza.",
                           author:"Michael Torres",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Qué buena clase",
                           author:"Regina",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Harder than I thought!",
                           author:"Emily",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:13,
                  name:'Cross fit ', 
                  image: 'images/sports/crossfit-girl_boy.jpg',
                  category: 'viernes', 
                  label:'Sprint',
                  price:'6:30 am',
                  description:'Oye esa clase 1 toca por lo menos dos veces del mes si ayuda en realidad bajar los deberes de grasa mientras mantiene tonificado todos los músculos del abdomen y glúteo que a veces son difíciles colorizar y entrenar pero con esa clase nos promete que va a ver resultados.',
                   comments: [
                       {
                           rating:5,
                           comment:"no está fácil!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"no está fácil!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"no está fácil!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"el profe, esta muy bien!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Que buenas resultadtos !",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:14,
                  name:'Spinning ', 
                  image: 'images/sp/spsp.jpg',
                  category: 'viernes', 
                  label:'Sprint',
                  price:'6:30 am',
                  description:'Oye esa clase 1 toca por lo menos dos veces del mes si ayuda en realidad bajar los deberes de grasa mientras mantiene tonificado todos los músculos del abdomen y glúteo que a veces son difíciles colorizar y entrenar pero con esa clase nos promete que va a ver resultados.',
                   comments: [
                       {
                           rating:5,
                           comment:"no está fácil!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"no está fácil!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"no está fácil!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"el profe, esta muy bien!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Que buenas resultadtos !",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:15,
                  name:'Cross Fit',
                  image: 'images/sports/cross.jpg',
                  category: 'martes', 
                  label:'Difícil',
                  price:'7:00 pm',
                  description:'Es una clase única, que combina flexibilidad fuerza resistencia y habilidades generales las clases están diseñadas para diferentes niveles, pero los que empujan a sí mismos más caliente que podían esperar de 290 calorías sesiones de 20 minutos en el tiempo para los débiles de corazón esperar grandes resultados.',
                   comments: [
                       {
                           rating:5,
                           comment:"Excelente clase excelente instructor",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"If you want results and don't have time try this out ",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Esta es una gran clase, tengo todo la intención de obtener mejores  técnicas",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Ultimate, Reaching for the stars!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Mantener el buen trabajo jorge nos vemos pronto!",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:16,
                  name:'Spining Sprint ', 
                  image: 'images/spinning1.png',
                  category: 'martes', 
                  label:'Especial',
                  price:'7:00 pm',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando ",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                },{
                  _id:17,
                  name:'Spinning', 
                  image: 'images/spinning_group.jpg',
                  category: 'miercoles', 
                  label:'New Spinning',
                  price:'6:30 am',
                  description:'En realidad por la señora que no tiene tanta tiempo pero quiere quemar calorías qué clase puede ser mejor que está todo los lunes con Alfonso arrancar la semana como quieres sigurir.',
                  comments: [
                       {
                           rating:5,
                           comment:"Imagine all the eatables, living in conFusion!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Eat it, just eat it!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Ultimate, Reaching for the stars!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"It's your birthday, we're gonna party!",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:18,
                  name:'Cross Fit ', 
                  image: 'images/sports/cross2.jpg',
                  category: 'miercoles', 
                  label:'Tonificación',
                  price:'6:30 am',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando lunes",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                },{
                  _id:19,
                  name:'Pilates ', 
                  image: 'images/yoga.jpg',
                  category: 'miercoles', 
                  label:'6:30 am',
                  price:'tonificación',
                  description:'Oye esa clase 1 toca por lo menos dos veces del mes si ayuda en realidad bajar los deberes de grasa mientras mantiene tonificado todos los músculos del abdomen y glúteo que a veces son difíciles colorizar y entrenar pero con esa clase nos promete que va a ver resultados.',
                   comments: [
                       {
                           rating:5,
                           comment:"no está fácil!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"no está fácil!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"no está fácil!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"el profe, esta muy bien!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Que buenas resultadtos !",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:20,
                  name:'Bailoterapia',
                  image: 'images/sports/aerobic.jpg',
                  category: 'miercoles', 
                  label:'Moderate Todo cuerpo',
                  price:'6:30 pm',
                  description:'Pilates fuerza o resistencia combinada tenemos un excelente instructor aquí en Mck y sería fantástico si todo el mundo tuviera la oportunidad de tratar de entrenar con el, no es sólo un ejercicio por las mujeres , los hombres pueden beneficiarse de eso tambien.',
                   comments: [
                       {
                           rating:5,
                           comment:"Yorel mejor que cualquier otra profe!",
                           author:"Stephenia",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"No puedo recomendar esta clase lo suficientemente",
                           author:"Adriana McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Estas clases me ayudan a reducir la cintura pero aumentar me fuerza.",
                           author:"Michael Torres",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Qué buena clase",
                           author:"Regina",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Harder than I thought!",
                           author:"Emily",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:21,
                  name:'Spinning', 
                  image: 'images/spinnign-1.jpg',
                  category: 'miercoles', 
                  label:'New Spinning',
                  price:'7:00 pm',
                  description:'En realidad por la señora que no tiene tanta tiempo pero quiere quemar calorías qué clase puede ser mejor que está todo los lunes con Alfonso arrancar la semana como quieres sigurir.',
                  comments: [
                       {
                           rating:5,
                           comment:"Imagine all the eatables, living in conFusion!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Eat it, just eat it!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Ultimate, Reaching for the stars!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"It's your birthday, we're gonna party!",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:22,
                  name:'Spinning', 
                  image: 'images/SPINNING-2-.jpg',
                  category: 'jueves', 
                  label:'Great Spinning',
                  price:'6:30 am',
                  description:'En realidad por la señora que no tiene tanta tiempo pero quiere quemar calorías qué clase puede ser mejor que está todo los lunes con Alfonso arrancar la semana como quieres sigurir.',
                  comments: [
                       {
                           rating:5,
                           comment:"Imagine all the eatables, living in conFusion!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Eat it, just eat it!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Ultimate, Reaching for the stars!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"It's your birthday, we're gonna party!",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:23,
                  name:'Spinning', 
                  image: 'images/spinning1.png',
                  category: 'jueves', 
                  label:'Tonificación',
                  price:'7:00 pm',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando lunes",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                },{
                  _id:24,
                  name:'Pilates', 
                  image: 'images/pilates_back.jpg',
                  category: 'jueves', 
                  label:'Tonificación',
                  price:'7:00 pm',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando lunes",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                },{
                  _id:25,
                  name:'Cross Fit ', 
                  image: 'images/sports/cross.jpg',
                  category: 'jueves', 
                  label:'Tonificación',
                  price:'7:00 pm',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando lunes",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                },{
                  _id:26,
                  name:'Fit combat', 
                  image: 'images/sports/combat.jpg',
                  category: 'jueves', 
                  label:'Hard',
                  price:'7:00 pm',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando lunes",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                },{
                  _id:27,
                  name:'Pilates', 
                  image: 'images/sports/pilates.jpg',
                  category: 'miercoles', 
                  label:'Sides & form',
                  price:'7:00 pm',
                  description:'En realidad por la señora que no tiene tanta tiempo pero quiere quemar calorías qué clase puede ser mejor que está todo los lunes con Alfonso arrancar la semana como quieres sigurir.',
                  comments: [
                       {
                           rating:5,
                           comment:"Imagine all the eatables, living in conFusion!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Eat it, just eat it!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Ultimate, Reaching for the stars!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"It's your birthday, we're gonna party!",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:28,
                  name:'Pilates ', 
                  image: 'images/pilates_back.jpg',
                  category: 'viernes', 
                  label:'Bums',
                  price:'7:00 pm',
                  description:'Oye esa clase 1 toca por lo menos dos veces del mes si ayuda en realidad bajar los deberes de grasa mientras mantiene tonificado todos los músculos del abdomen y glúteo que a veces son difíciles colorizar y entrenar pero con esa clase nos promete que va a ver resultados.',
                   comments: [
                       {
                           rating:5,
                           comment:"no está fácil!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"no está fácil!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"no está fácil!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"el profe, esta muy bien!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Que buenas resultadtos !",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:29,
                  name:'Salsa ', 
                  image: 'images/sports/Zumba_dance.jpg',
                  category: 'viernes', 
                  label:'Latin Dance',
                  price:'7:00 pm',
                  description:'Oye esa clase 1 toca por lo menos dos veces del mes si ayuda en realidad bajar los deberes de grasa mientras mantiene tonificado todos los músculos del abdomen y glúteo que a veces son difíciles colorizar y entrenar pero con esa clase nos promete que va a ver resultados.',
                   comments: [
                       {
                           rating:5,
                           comment:"no está fácil!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"no está fácil!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"no está fácil!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"el profe, esta muy bien!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Que buenas resultadtos !",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:30,
                  name:'Spinning', 
                  image: 'images/spinning1.png',
                  category: 'viernes', 
                  label:'Fast furioso',
                  price:'6:30 pm',
                  description:'En realidad por la señora que no tiene tanta tiempo pero quiere quemar calorías qué clase puede ser mejor que está todo los lunes con Alfonso arrancar la semana como quieres sigurir.',
                  comments: [
                       {
                           rating:5,
                           comment:"Imagine all the eatables, living in conFusion!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Eat it, just eat it!",
                           author:"Michael Jaikishan",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Ultimate, Reaching for the stars!",
                           author:"Ringo Starry",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"It's your birthday, we're gonna party!",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
                },{
                  _id:31,
                  name:'Functional Training', 
                  image: 'images/sports/girl_weights.jpeg',
                  category: 'viernes', 
                  label:'Especial',
                  price:'7:30 pm',
                  description:'Esta clase particular es una mezcla de Simba y madre de baile una vez más se sabe cuando lo termine.',
                   comments: [
                       {
                           rating:5,
                           comment:"Great clase",
                           author:"Johna",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Esta clase te hace trabajar",
                           author:"Paula",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"lo que uno Busca terminando lunes",
                           author:"G",
                           date:"2015-02-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"como baile la Cala",
                           author:"Daniela",
                           date:"2013-12-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Ven y ver este clase!",
                           author:"Lorena",
                           date:"2011-12-02T17:57:28.556094Z"
                       }


                   ]
                }
                ];
    var promotions = [
        {
                  _id:0,
                  name:'Durante el día', 
                  image: 'images/spin_girl.png',
                  label:'New',
                  price:'8.00',
                  description:'Esta mes y probar una clase de Spinning 2 por 1 desde 9am - 4pm',
        }, {
                  _id:1,
                  name:'Durante el día', 
                  image: 'images/pilates_back.jpg',
                  label:'New',
                  price:'8.00',
                  description:'Esta mes y probar una clase de Spinning 2 por 1 desde 9am - 4pm',
        }

    ];

                this.getSports = function(){
                    
                    return sports;
                    
                };
    
                this.getDish = function (index) {
                    
                    return sports[index];
                };
    
                // implement a function named getPromotion
                // that returns a selected promotion.
                this.getPromotion = function(index) {
                    return promotions[index];
                };

                        
        })

        .factory('corporateFactory', function() {
            var corpfac = {};
    
            var leadership = [
                {
                    name: "Spinning",
                    image: 'images/alberto.png',
                    designation: "Chief Epicurious Officer",
                    abbr: "CEO",
                    description: "La columna vertebral desempeña un papel crucial en la reducción de la tensión suministrada a cada segmento cuando una persona se mueve y equilibra las fuerzas de cizallamiento que se producen entre los segmentos de la columna vertebral. Se ha informado de que el fortalecimiento de las extremidades superiores e inferiores permite el funcionamiento eficiente de la región lumbar, y el fortalecimiento de la región lumbar permite el funcionamiento eficiente de las extremidades superiores e inferiores"
                },
                {
                    name: "Dance",
                    image: 'images/d.png',
                    designation: "Chief Food Officer",
                    abbr: "CFO",
                    description: "Estos bailes que en ella se realizan nos brindan una serie de movimientos dinámicos y coordinados, comenzando desde la cabeza hasta los pies, hacen que los músculos tomen fuerza, aumentando el tono muscular y la resistencia aerobia .Permiten aumentar la intensidad y elevar las pulsaciones"
                },
                {
                    name: "Cross Fit",
                          image: 'images/cross.png',
                    designation: "Chief Taste Officer",
                    abbr: "CTO",
                    description: "e acuerdo con un estudio realizado por la Universidad Estatal de Kennesaw, la rutina de entrenamiento de CrossFit puede quemar 261 calorías por sesión. Puede que no parece mucho, pero para un entrenamiento de 20 minutos que es un poco de sudor grave.."
                },
                {
                    name: "pilates",
                    image: 'images/Pilates.png',
                    designation: "Cuarto seperado de Pilates",
                    abbr: "EC",
                    description: "El método Pilates es un entrenamiento de cuerpo integral, incluye ejercicios de fuerza, estiramientos, posturas sanas y respiraciones conscientes. El objetivo es fortalecer los músculos, mejorar la resistencia y la coordinación de los movimientos, estimulando la circulación y un mayor conocimiento de nuestro cuerpo. Esto puede cambiar positivamente nuestra vida y hacer a nuestro cuerpo más equilibrado. Si usted es un aficionado o un profesional, tenemos lo que necesita para un camino mejor y más saludable"
                }
                
            ];
     
            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service

            corpfac.getLeaders = function() {
              return leadership;
            };

            corpfac.getLeader = function(index) {
              return leadership[index];
            };

            return corpfac;
    
        })

;
