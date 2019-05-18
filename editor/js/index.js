

var app = new Vue({
	el: "#app",
	data: {
		window:{
			width: 0,
			height: 0
		},
		name: "this is username",
		imageData: "",
		image1: null,
		image2: null,
		trueWidth: 0,
		trueHeight: 0,
		dragging: false,
		editing: false,
		notExceedingH: true,
		scale: null,
		resized: false,
		lockAspect: "OFF",
		widthRatio: 1,
		heightRatio: 1,
		states:{
			resizing: false,
			cropping: false,
			adjusting: false,
			filtering: false,
			texting: false
		},
		adjustments:{
			brightness: 1,
			blur: 1,
			contrast: 1,
			saturation: 1,
			hue: 0,
			grayscale: 1
		}

	},
  computed: {
		mappedBrightnessLevel: function(){
			return Math.round(this.adjustments.brightness*100)
		},
		mappedContrastLevel: function(){
			return Math.round(this.adjustments.contrast*100)
		},
		mappedSaturationLevel: function(){
			return Math.round(this.adjustments.saturation*100)
		},
		mappedHueLevel: function(){
			return Math.round(this.adjustments.hue)
		}
	},
	created: function(){
   window.addEventListener('resize', this.handleResize)
	 this.handleResize();
	},

	methods: {

		 previewImage: function(event) {
		  var input = event.target;
			if(input.files && input.files[0]){
				var reader = new FileReader();
				reader.onload = (e) => {
					this.imageData = e.target.result;
				};
				reader.readAsDataURL(input.files[0]);
			}
		},

		updateCanvasImage: function(e){
			var self = this;
			var img = new Image();
			img.onload = function() {
				self.trueWidth = img.width;
				self.trueHeight = img.height;
					if((img.width > (self.window.width))||(img.height > self.window.height)){
					var iw = img.width;
					var ih = img.height;
					var scale = Math.min(((self.window.width-275) / iw),(self.window.height / ih));
					this.scale = scale;
					var iwScaled = iw*scale;
					var ihScaled = ih*scale;
					img.width = iwScaled;
					img.height = ihScaled;
				}
				self.drawCanvasImage(img);
			}

			img.src = self.imageData;
		},

		drawCanvasImage: function(img){
			var canvas = this.$refs.imageCanvas;
				canvas.width = img.width;
				canvas.height = img.height;
				var ctx = canvas.getContext('2d');
				ctx.drawImage(img, 0, 0, img.width,img.height);
		},

		handleResize: function(){
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
		},

		resizeImg: function(width, height){
			var self = this;
			this.resized = true;
			var wH = this.window.height;
			var canvas = this.$refs.imageCanvas;
      this.trueWidth = width;
			this.trueHeight = height;

			if(height > wH){
				this.notExceedingH = false;
			}else{
				this.notExceedingH = true;
			}
			img = new Image();
			img.onload = function(){
				img.width = width;
				img.height = height;
				canvas.width = width;
				canvas.height = height;
				if((width > self.window.width)||(height > self.window.height)){
				var iw = img.width;
				var ih = img.height;
				var scale = Math.min(((self.window.width-275) / iw),(self.window.height / ih));
				this.scale = scale;
				var iwScaled = iw*scale;
				var ihScaled = ih*scale;
				img.width = iwScaled;
				img.height = ihScaled;
				canvas.width = img.width;
				canvas.height = img.height;
				console.log("test");
			}
				var ctx = canvas.getContext('2d');
				ctx.drawImage(img, 0, 0,img.width,img.height);
			}
			img.src = this.imageData;
		},
		cropImg: function(width, height){

		},

		toggleState: function(state){

			var s;
			if(this.states[state] == true){
				this.states[state] = false;
			}else{
				for(s in this.states){
						this.states[s] = false;
					}
					this.states[state] = true;
				}
			},
		toggleRatio: function(){
			if(this.lockAspect == "ON"){
				this.lockAspect = "OFF";
			}else{
				this.lockAspect = "ON";
				this.widthRatio = this.trueWidth / this.trueHeight;
				this.heightRatio = this.trueHeight / this.trueWidth;
			}
		},

		adjustWidth: function(){
			if(this.lockAspect == "ON"){
			this.trueWidth = Math.round(this.trueHeight * this.widthRatio);
	   	}
		},
		adjustHeight: function(){
			if(this.lockAspect == "ON"){
			this.trueHeight = Math.round(this.trueWidth * this.heightRatio);
		}
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
