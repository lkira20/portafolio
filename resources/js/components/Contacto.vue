<template>
	<div>
		<div class="" id="subcaja">
		<div class="container">
		    <p class="text-white display-4 text-center" v-if="mensaje == true">Mensaje enviado exitosamente</p>
		    <p class="text-white display-4 text-center" v-if="error == true">Error al enviar intente mas tarde</p>
		    
		          <h3 class="text-center display-4 text-white">Contacto</h3>
		       		<div class="card" id="contac">
		       			<div class="card-body"> 			
			          <form @submit.prevent="enviar">
			            <div class="input-group mb-3">
			             
			              <input type="text" name="texto" class="form-control" placeholder="Nombre" v-model="envio.nombre" required id="input-1">
			            </div>
			            <div class="input-group mb-3">
			            
			              <input type="email" name="email" class="form-control" placeholder="Email" v-model="envio.email" id="input-2" required>
			            </div>
			             <div class="input-group mb-3">
			      
			              <textarea placeholder="escribe tu mensaje" class="form-control" v-model="envio.mensaje" id="input-3" required></textarea>
			            </div>
			            <button type="submit" class="btn btn-primary btn-lg btn-block">
			              Enviar mensaje
			            </button>
			            <div class="text-center">
				            <div class="text-center spinner-border text-primary" role="status" v-if="loader">
							  <span class="sr-only">Loading...</span>
							</div>
						</div>
			          </form>
			          </div>
			          
		     		</div>
		     		<br>
	     </div>
	    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				envio:{
					nombre: '',
					email: '',
					mensaje: ''
				},
				mensaje: false,
				error: false,
				loader: false
			}
		},
		methods:{
			enviar(){
				this.loader = true;
				this.mensaje = false;
				this.error = false;
				axios.post('/api/enviar', this.envio).then(response => {
					this.loader = false;
					this.envio.nombre = '';
					this.envio.email = '';
					this.envio.mensaje = '';
					this.mensaje = true;

				}).catch(e => {
					console.log(e.response);
					this.loader = false;
					this.error = true;
				})
			}
		}
	}
</script>

<style scoped>
	#contacto{
		background-color: rgb(230, 57, 70);
	}

	#contac{
		background-color: rgb(241, 250, 238);
	}

	#input-1, #input-2, #input-3{
		background-color: rgb(241, 250, 238);
	}

	#subcaja{
		background-color: rgb(230, 57, 70);
		width: 100%;
	}
</style>