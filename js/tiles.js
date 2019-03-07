
Vue.component("nameInput",{
	template:"<label>Type your username:<h1></h1><input/></label>"
});

var app = new Vue({
	el: "#app",
	data: {
    scores: null,
		currentScore: 0,
		gameOver: false,
		max: 12,
		hsCheckCount: 0,
		showInput: true,
		repeat: false,
		username: "Enter your name"
	},
  computed: {
	},
	created: function(){
		this.getScores();
	},

	methods: {

		 checkInput: function() {
			if (this.username !== null  ){
				this.showInput = false;
				for(i in this.scores){
					if(this.username.toUpperCase() === this.scores[i].name) {
						this.repeat = true;
					}
				}
       if(!this.repeat){this.checkHighScore();}
			}
			else {
				this.showInput = true;
			}
			var aux = this.username.toUpperCase();
			this.username = aux;
		},

		checkHighScore: function() {
			var q = this.currentScore;
			var x = this.scores;
			var k = this.username;
			var formObject = {"score": q, "name": k};
      for(i in x){
				if(!this.hsCheckCount){
					x.push(formObject);
					this.hsCheckCount++;
				}
        if(x[i].name == k){
					x[i].score = q;
				}
			}
		},

		postHighScore: function(){
      var xx = this.currentScore;
			var y = this.scores;
			var k = 1;
			let axiosConfig = {
				headers: {
						'Content-Type': 'application/json',
						'secret-key': '$2a$10$ec/HbB8KKTTP7L0KGuYNxelNU532GoB3JdqfQa/iSWwjhSPUsOEom',
						'versioning': false
				}
			};

        this.scores = y;
				var putData = JSON.stringify(this.scores);
				console.log(putData);
				axios.put('https://api.jsonbin.io/b/5c7e8e352e4731596f16955f', putData, axiosConfig)
				.then((res) => {
				  console.log("RESPONSE RECEIVED: ", res);
				})
				.catch((err) => {
				  console.log("AXIOS ERROR: ", err);
				});

		},

		getScores: function() {

       axios.get('https://api.jsonbin.io/b/5c7e8e352e4731596f16955f/8',
			 {
			 headers: {'secret-key':'$2a$10$ec/HbB8KKTTP7L0KGuYNxelNU532GoB3JdqfQa/iSWwjhSPUsOEom'}
		   }).then((response)=>{
		   this.scores = response.data;
			 console.log(this.scores);
        })
        .catch((error) => {
           this.scores = error.response.statusText;
        });
        },

    updateScore: function(){
			var x = this.scores;
			var xx = this.currentScore;
			var k = 1;
			for(i in x){
				if(x[i].name == this.username){
					if(x[i].score < xx)
					{
			    x[i].score = xx;
				 }
        }

			}
		},

		even: function(arr){
			return arr.slice().sort(function(b, a){
				return a.score - b.score;
			});
		}
	},


	watch: {
		gameOver: function() {
			if(this.gameOver){
				this.updateScore();
				this.postHighScore();
			}
		},
	}
});
