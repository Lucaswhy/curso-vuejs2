new Vue({
	el: '#desafio',
	data: {
		className : '',
		perigo: true,
		divClass: '',
		divEx4: '',
		applyCS: false,
		color: '',
		varWidth: '',
		varHeight: '',
		barHeight: '50px',
		barWidth: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{ return this.myClass() }, 2000);
		},
		iniciarProgresso() {
			setInterval(()=>{ return this.myBar() }, 2000);
		},
		myClass(){
			if(this.className == 'encolher' || this.className == '') {
				return this.className='destaque'
			}else{
				return this.className='encolher'
			}
		},
		myBar(){
			if(this.barWidth >= 1000) return this.barWidth == 0;
			return this.barWidth+= 200;
		}
	},
	computed:{
		
		myStyle(){
			return{
				backgroundColor: this.color,
				width: `${this.varWidth}px`,
				height: `${this.varHeight}px`
			}		
		},

		myBarStyle(){
			return{
				backgroundColor: 'green',
				width: `${this.barWidth}px`,
				height: this.barHeight,
				border: 'solid 1px',

			}
		}
	}
})
