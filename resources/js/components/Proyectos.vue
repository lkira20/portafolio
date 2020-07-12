<template>
	<div id="proyectos">
		<h2 class="text-center display-4">Mis proyectos</h2>
		
		<div id="cartas">

			<div class="card" id="carta-1">
			  <div class="row no-gutters">
			  	<div class="col-md-6">
			    	<img src="../../../public/image/cne_inicio.png" class="img-fluid" alt="">
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

			<div class="card" id="carta-2" v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '300px'}">
			  <div class="row no-gutters">
			    <div class="col-md-6">
			      <div class="card-body text-white">
			        <h5 class="card-title">Diseño con html, css y bootstrap</h5>
			        <p class="card-text">Es un diseño muy particular hecho a pie, con html css y bootstrap, se ve muy amigable y adaptable a todo tipo de paginas empresariales.</p>

					<a class="btn btn-primary text-white" href="/proyecto-1" target="_blank">Ir a verlo</a>
			      </div>
			    </div>
			    <div class="col-md-6">
			    	<img src="../../../public/image/proyecto-1.png" class="img-fluid" alt="">
			    </div>
			  </div>
			</div>
			
			<div class="card" id="carta-1" v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '300px'}">
			  <div class="row no-gutters">
			  	<div class="col-md-6">
			    	<img src="../../../public/image/minimalista.png" class="img-fluid" alt="">
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

			<div class="card" id="carta-2" v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '300px'}">
			  <div class="row no-gutters">
			    <div class="col-md-6">
			      <div class="card-body text-white">
			        <h5 class="card-title">Sistema de compra y venta</h5>
			        <p class="card-text">Sistema de compra y ventas hecho con laravel, bootstrap y jquery, proporciona modulos de almacen donde se registran los articulos y las categorias, modulos de compra ya sea para registrar alguna compra a algun proveedor o registrar algun proveedor, y de ventas, para gestionar las ventas y los clientes debidamente.</p>

					<a class="btn btn-primary text-white" href="https://ventas-compra.herokuapp.com/" target="_blank">Ir a verlo</a>
			      </div>
			    </div>
			    <div class="col-md-6">
			    	<img src="../../../public/image/ventas.png" class="img-fluid" alt="">
			    </div>
			  </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{

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