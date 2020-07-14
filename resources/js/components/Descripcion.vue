<template>
	<div id="descripcion" v-lazy:background-image.container="fondo">
		<div class="container" id="caja-super">
		<div class="row align-items-center" id="descrip">
		
			<div class="col-12 col-md-8 text-white text-justify" v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '300px'}">
				
				    <h5 class="card-title display-1" id="bienvenido">Bienvenido</h5>
				    <p class="card-text">Mi nombre es Luis Briceño, soy desarrollador web e ingeniero en sistema, me adapto muy bien a las circunstancias, soy autodidacta, siempre estoy en la busqueda y solucion de problemas de la mejor manera posible y esta en mis principios mejorar lo ya mejorado.</p>
				  	
				  	<p>Las tecnologias que mas uso son Laravel para el Back-end y Vue para el Front-end, tambien tengo conocimientos de php y javascript, aunque tambien se  usar wordpress para realizar paginas estaticas.</p>

				  	<p>Soy capas de realizar paginas estaticas y dinamicas, servicios de API REST, Graficas ya sea de barra o de otro tipo con chartjs, carritos de compras, sistema de login, estructura de roles y permisos de usuarios, paginas SPA (las cuales su contenido cambia sin recargar la pagina).</p>

				  	<p>Si estas interesado en contactarme puedes enviarme un correo atravez del formulario de contacto que se encuentra mas abajo.</p>
				
			</div>
			<div class="col col-md-4 align-items-center" >
				<img v-lazy="foto" alt="imagen de luis Briceño" id="yo" class="rounded-circle" v-scroll-reveal.reset="{duration: 2000, origin: 'right', distance: '15px', delay: 1000}">
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	import fotoyo from "../../../public/image/luis.jpg"
	import fondo from "../../../public/image/escalera.jpg"
	export default{
		data(){
			return{
				foto: fotoyo,
				fondo: fondo
			}
		}
	}
</script>

<style scoped>

	#descripcion{
		/*background: url("https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs");*/
		/*background: url('../../../public/image/paisaje.jpg');*/
		height: 100%;

		position: relative;
		background-size: 100%;
	}

	#descripcion:before{
		content:'';
		  position: absolute;
		        top: 0;
		  bottom: 0;
		  left: 0;
		  right: 0;
		  background-color: rgba(230,57,70,0.5);
	}

	#descrip{
		height: 100%;
	}

	#yo{
		width: 100%;
		

		
	}
	#caja-super{
		height: 100%;
	}

	@media (max-width: 768px){
	  #descripcion{
		height: auto;
	  	margin-top: 50px;
	  }

	#bienvenido{
		font-size: 50px;
		}
	}
</style>