var app = new Vue({
	el: "#app",
	data: {
		products:{
			mugs:{
				canaPisici:{
					images:{
						default: 'cana_cu_pisici_1.png',
						img1: 'cana_cu_pisici_1.png',
					  img2: 'cana_cu_pisici_2.png',
						img3: 'cana_cu_pisici_3.png',
						img4: 'cana_cu_pisici_4.png',
						img5: 'cana_cu_pisici_5.png'
					},
					name:"CANĂ CU PISICI",
					price: 50.00
				},
				canaFuego:{

				}
			},
			various:{
        manaFacutMana:{
					images:{
						default: 'mana_de_facut_cu_mana_1.jpg',
						img1: 'mana_de_facut_cu_mana_1.jpg',
						img2: 'mana_de_facut_cu_mana_2.jpg'
					},
					name:"MÂNĂ DE FĂCUT CU MÂNA",
					price: 60.00
				},
				mainiPentruDegete:{
					images:{
						default: 'maini_pentru_degete_1.jpg',
						img1: 'maini_pentru_degete_1.jpg',
						img2: 'maini_pentru_degete_2.jpg'
					},
					name:"MÂINI PENTRU DEGETE",
					price: 55.00
				},
				mousepadCovor:{
					images:{
						default: 'mousepad_covor_1.jpeg',
						img1: 'mousepad_covor_1.jpeg',
						img2: 'mousepad_covor_2.jpeg'
					},
					name:"MOUSEPAD COVOR PERSAN",
					price: 30.00
				}
			}
		}

	},
  computed: {

	},
	created: function(){

	},

	methods: {

	},

	watch: {

	}
});
