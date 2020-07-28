<template>
	<div id="proyectos" >
		<h2 class="text-center display-4">Mis proyectos</h2>
		
		<div id="cartas">

			<div class="card" id="carta-1" v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '150px'}">
			  <div class="row no-gutters">
			  	<div class="col-md-6">
			    	<img v-lazy="imgUrl1" class="img-fluid" alt="">
			    </div>
			    <div class="col-md-6">
			      <div class="card-body">
			        <h5 class="card-title">Sistema de control y seguimiento de documentos de registro civil en el CNE</h5>
			        <p class="card-text">Es un sistema diseñado para llevar el registro y seguimiento de la cantidad de solicitudes que se procesan en la oficina de registro civil en el cne, es una spa, diseñada con vue y laravel, contiene graficas que muestran el conteo de las solicitudes de cada mes en todo el año. posee roles y permisos de usuarios, funciona con servicio de api.</p>

			        <p>Usuario de prueba:</p>

					<p>usuario: wonder@gmail.com</p>
					<p>contraseña: 12345678</p>
					<a class="btn btn-primary text-white" href="https://aplicacioncne.herokuapp.com/login" target="_blank">Ir a verlo</a>
			      </div>
			    </div>
			  </div>
			</div>

			<div class="card" id="carta-2">
			  <div class="row no-gutters">
			    <div class="col-md-6">
			      <div class="card-body text-white">
			        <h5 class="card-title">Diseño con html, css y bootstrap</h5>
			        <p class="card-text">Es un diseño muy particular hecho a pie, con html css y bootstrap, se ve muy amigable y adaptable a todo tipo de paginas empresariales.</p>

					<a class="btn btn-primary text-white" href="/proyecto-1" target="_blank">Ir a verlo</a>
			      </div>
			    </div>
			    <div class="col-md-6">
			    	<img v-lazy="imgUrl2" class="img-fluid" alt="">
			    </div>
			  </div>
			</div>
			
			<div class="card" id="carta-1">
			  <div class="row no-gutters">
			  	<div class="col-md-6">
			    	<img v-lazy="imgUrl3" class="img-fluid" alt="">
			    </div>
			    <div class="col-md-6">
			      <div class="card-body">
			        <h5 class="card-title">Diseño con html, css y bootstrap</h5>
			        <p class="card-text">UN diseño minimalista con toques de animacion, muy completo e intutivo para el uso de pagians empresariales..</p>

					<a class="btn btn-primary text-white" href="/proyecto-2" target="_blank">Ir a verlo</a>
			      </div>
			    </div>
			    
			  </div>
			</div>

			<div class="card" id="carta-2">
			  <div class="row no-gutters">
			    <div class="col-md-6">
			      <div class="card-body text-white">
			        <h5 class="card-title">Sistema de compra y venta</h5>
			        <p class="card-text">Sistema de compra y ventas hecho con laravel, bootstrap y jquery, proporciona modulos de almacen donde se registran los articulos y las categorias, modulos de compra ya sea para registrar alguna compra a algun proveedor o registrar algun proveedor, y de ventas, para gestionar las ventas y los clientes debidamente.</p>

					<a class="btn btn-primary text-white" href="https://ventas-compra.herokuapp.com/" target="_blank">Ir a verlo</a>
			      </div>
			    </div>
			    <div class="col-md-6">
			    	<img v-lazy="imgUrl4" class="img-fluid" alt="">
			    </div>
			  </div>
			</div>

			<div class="card" id="carta-1">
			  <div class="row no-gutters">
			  	<div class="col-md-6">
			    	<img v-lazy="imgUrl5" class="img-fluid" alt="">
			    </div>
			    <div class="col-md-6">
			      <div class="card-body">
			        <h5 class="card-title">Landing page</h5>
			        <p class="card-text">Una una landing page es de mucha ayuda a la hora de hacer que tus clientes hagan una accion en especifico en tu sitio, ya sea para recolectar sus datos para fidelizarlos a tu comunidad y tu a cambio le suministras informacion que le sera de ayuda ya sea redireccionandolo o mandandosela por el correo.</p>
					
					<p>Esta landing page sumistra informacion sobre los tipos de tiendas virtuales que hay y asi poder informar al cliente, de igual modo esta pagina hace un test para recomendarle el tipo de tienda virtual que necesita el cliente.</p>
					<a class="btn btn-primary text-white" href="/proyecto-2" target="_blank">Ir a verlo</a>
			      </div>
			    </div>
			    
			  </div>
			</div>
		</div>
	</div>
</template>

<script>
	import imagen1 from "../../../public/image/cne_inicio.png"
	import imagen2 from "../../../public/image/proyecto-1.png"
	import imagen3 from "../../../public/image/minimalista.png"
	import imagen4 from "../../../public/image/ventas.png"
	import imagen5 from "../../../public/image/landing-page.png"
	export default{
		data(){
			return{
				imgUrl1: imagen1,
				imgUrl2: imagen2,
				imgUrl3: imagen3,
				imgUrl4: imagen4,
				imgUrl5: imagen5

			}
		}
		
	}
</script>

<style scoped>
	#proyectos{
		background-color: rgb(241, 250, 238);
	}

	#carta-1{
		background-color: rgb(168, 218, 220);
	}
	#carta-2{
		background-color: rgb(29, 53, 87);
	}

	#carta-3{
		background-color: rgb(241, 250, 238);
	}

	#carta-4{
		background-color: rgb(69, 123, 157);
	}
</style>