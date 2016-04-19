'use strict';

angular.module('confusionApp')

.service('menuFactory', function() {

    var dishes=[
                 {
                  _id:0,
                  name:'Uthapizza',
                  image: 'images/uthapizza.png',
                  category: 'mains', 
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
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
                  name:'Zucchipakoda', 
                  image: 'images/zucchipakoda.png',
                  category: 'appetizer', 
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
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
                  _id:2,
                  name:'Lunes, Martes, Miercoles', 
                  image: 'images/vadonut.png',
                  category: 'appetizer', 
                  label:'New',
                  price:'8.00',
                  description:'Pasar y probar la clase de dance sin obligaction?',
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
                  _id:3,
                  name:'600 calories', 
                  image: 'images/group.png',
                  category: 'dessert', 
                  label:'',
                  price:'2.99',
                  description:'Alfonoso explicó que si bien una clase media vuelta quema entre 400 y 600 calorías, no es suficiente por sí solo para hacer a arrojar libras.Girar tres veces a la semana y que la antorcha hasta 1.800 calorías, pero una libra de grasa equivale a 3.500 calorías',
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
        }

    ];

                this.getDishes = function(){
                    
                    return dishes;
                    
                };
    
                this.getDish = function (index) {
                    
                    return dishes[index];
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
