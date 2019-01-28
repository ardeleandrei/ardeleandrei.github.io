var app = new Vue({
	el: "#app",
	data: {
		selected: "Romania",
		countryRate: 1,
		calc1: "",
		calc2: "",
		imageSrc: "https://www.countryflags.io/",
		firstInputSelected: true,
		input: document.getElementById("currencyInput"),
		rates: [],
		historicrates: [],
		countries: [

			{
				name: "EUR",
				currency: "EUR",
				image: "eu",
				rate: 0,
				rateshistory: []
			},
			{
				name: "USD",
				currency: "USD",
				image: "us",
				rate: 0,
				rateshistory: []
			},
			{
				name: "GBP",
				currency: "GBP",
				image: "gb",
				rate: 0,
				rateshistory: []
			},
			{
				name: "CAD",
				currency: "CAD",
				image: "ca",
				rate: 0,
				rateshistory: []
			},
			{
				name: "AUD",
				currency: "AUD",
				image: "au",
				rate: 0,
				rateshistory: []
			},
			{
				name: "IDR",
				currency: "IDR",
				image: "in",
				rate: 0,
				rateshistory: []
			},
			{
				name: "TRY",
				currency: "TRY",
				image: "tr",
				rate: 0,
				rateshistory: []
			},
			{
				name: "HUF",
				currency: "HUF",
				image: "hu",
				rate: 0,
				rateshistory: []
			},
			{
				name: "RUB",
				currency: "RUB",
				image: "ru",
				rate: 0,
				rateshistory: []
			},
			{
				name: "CHF",
				currency: "CHF",
				image: "CH",
				rate: 0,
				rateshistory: []
			},
			{
				name: "JPY",
				currency: "JPY",
				image: "jp",
				rate: 0,
				rateshistory: []
			}
		]
	},

	created: function(){
		this.getRates();
		this.getHistory();
	},


	methods: {

		getRates: function() {

       axios.get('https://api.exchangeratesapi.io/latest?base=RON').then((response)=>{
		   this.rates = response.data.rates

        })
        .catch((error) => {
           this.rates = error.response.statusText;
        });
        },
		getHistory: function() {
		var d = new Date();
		var yearnow = d.getFullYear();
		var monthnow = d.getMonth();
		var daynow = d.getDay();
		var monthbef = monthnow;
		var yearbef = yearnow;
		if (monthnow == 0) {monthbef = 11; yearbef = yearbef-1;}
       axios.get('https://api.exchangeratesapi.io/history?start_at=' + yearbef + '-' + (monthbef+1) + '-' + daynow + '&end_at=' + yearnow + '-' + (monthnow+1) + '-' + daynow).then((response)=>{
		   this.historicrates = response.data.rates
           console.log('https://api.exchangeratesapi.io/history?start_at=' + yearbef + '-' + (monthbef+1) + '-' + daynow + '&end_at=' + yearnow + '-' + (monthnow+1) + '-' + daynow);
        })
        .catch((error) => {
           this.historicrates = error.response.statusText;
        });
        },

		calcInput_1: function(e, rate){
			this.firstInputSelected = true;
			this.calculate(e, rate);
		},
		calcInput_2: function(e, rate){
			this.firstInputSelected = false;
			this.calculate(e, rate);
		},
		updateInputs: function(){
			var selected;
			for(i = 0; i < this.countries.length; i++){
				if(this.selected == this.countries[i].name){
					selected = this.countries[i];
				}
			}
			this.countryRate = selected.rate;

			var input2 = parseFloat(document.getElementById("currencyInput").value);
			if(isNaN(input2)){
				this.calc2 = "";
				this.calc1 = "";
				return;
			}
			this.calc1 = (input2 * this.countryRate).toFixed(2);
		},
		calculate: function(e, value){
			var value = parseFloat(e.target.value);
			if(isNaN(value)){
				this.calc2 = "";
				this.calc1 = "";
				return;
			}

			if(this.firstInputSelected){
				this.calc2 = value;
				this.calc1 = (value * this.countryRate).toFixed(3);
			} else {
				this.calc1 = value;
				this.calc2 = (value / this.countryRate).toFixed(3);
			}
		},
		updateRates: function(){
				var x = this.rates;
				var k = this.countries;
				for (i in x){
					console.log(i);
					console.log(x[i]);
					for(country in k){
						if(k[country].currency == i){
							k[country].rate = (x[i]).toFixed(3);
							console.log(k[country].rate);
						}
					}
				}
			},
		updateHistory: function(){
				var x = this.historicrates;
				var k = this.countries;
				for (i in x){
					console.log(i);
					console.log(x[i]);
					for(country in k){
						if(k[country].currency == i){
							console.log(k[country].rateshistory);
						}
					}
				}
			}
	}
});
