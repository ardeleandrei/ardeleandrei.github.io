var app = new Vue({
	el: "#app",
	data: {
		states: {
			about: false,
			work: false,
			contact: false,
		},
		aboutOver: false,
		workOver: false,
		contactOver: false,
		initabout: false,
		initwork: false,
		initcontact: false,
		offsetLeft: null,
		offsetTop: null,
	},

	created() {
		window.addEventListener('resize', this.getOffset)
	},
	destroyed() {
    window.removeEventListener('resize', this.getOffset)
  },
  computed: {
	},


	methods:{

		toggleState: function(state){
			var i;
			if(this.states[state] == true){
				this.states[state] = false;
			}else{
				this.states[state] = true;
				var i;
				for(i in this.states){
					if(i !== state){
						this.states[i] = false;
					}
				}
			}
		}
},

	watch: {

	}
});
