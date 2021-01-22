Vue.use(Vuetify, {
  iconfont: 'mdi'
});
var app = new Vue({
	el: "#app",
	vuetify: new Vuetify(),
	data: {
		text: {
		},
		currentView: "enterHeight",
		inputNumber: "",
		currentCaptcha: "",
    show: true,
    calculating: false
	},

	created: function() {
    this.$refs.input.focus();
	},

	methods: {
    submitHeight: function() {
      this.calculating = true;
      this.currentView = "result";
      setTimeout(() => {
        this.calculating = false;
      }, 1400)
    },

    submitOk: function() {
      this.inputNumber = '';
      this.currentView = 'enterHeight';
    }
	}
});
