<template>
	<div id="home" class="bg-light">

		<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="barra" v-scroll-reveal.reset="{duration: 2000, origin: 'button'}">
		  <a class="navbar-brand" href="#home" v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }">Luis Briceño</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNav">
		    <ul class="navbar-nav  ml-auto">
		      <li class="nav-item ">
		        <a class="nav-link" href="#home" v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }"><font-awesome-icon icon="home"/> Home</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#habilidades" v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }">habilidades</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#Estudios" v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }">Estudios</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#proyectos" v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }">Proyectos</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#contacto" v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }">Contacto</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="https://www.linkedin.com/in/luis-briceño-1b0a541a7" target="_blank"><img src="../../../public/image/linkedin-brands.svg" alt="logo de linkedin" width="20px" class="mr-2">Linkedin</a>
		      </li>
		    </ul>
		  </div>
		</nav>

		<Descripcion v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '300px'}"></Descripcion>
		<Habilidades v-scroll-reveal.reset="{duration: 2000, origin: 'right', distance: '300px'}"></Habilidades>
		<Datos v-scroll-reveal.reset="{duration: 2000, origin: 'left', distance: '300px', viewFactor: 0.2}"></Datos>
		<Proyectos v-scroll-reveal.reset="{duration: 2000, origin: 'right', distance: '300px'}"/>
		<Contacto v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '300px'}"/>

		<footer id="pie" class="text-white py-3 text-center">
			Luis Briceño. Todos los derechos reservados
		</footer>
	</div>
</template>

<script>
	import Descripcion from './Descripcion.vue'
	import Datos from './Datos.vue'
	import Habilidades from './Habilidades.vue'
	import Proyectos from './Proyectos'
	import Contacto from './Contacto'

	export default{
		components:{
			Descripcion,
			Datos,
			Habilidades,
			Proyectos,
			Contacto
		}
	}
</script>

<style scoped>
	#home{
		height: 100%;
	}

	#barra{
		background-color: rgb(29, 53, 87);
	}

	#pie{
		background-color: rgb(29, 53, 87);
	}
</style>