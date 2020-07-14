<template>
	<div id="home" class="bg-light">

		<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="barra" v-scroll-reveal.reset="{duration: 2000, origin: 'bottom'}">
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

		<Descripcion ></Descripcion>
	
		<Habilidades v-scroll-reveal.reset="{duration: 2000, origin: 'bottom'}"></Habilidades>
	
		<Datos v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '150px'}"></Datos>
		
		<Proyectos v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '300px'}"/>
		
		<Contacto id="formulario1" v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '150px'}"/>

		<Contacto id="formulario2"/>
	
		<footer id="pie" class="text-white py-3 text-center">
			Luis Briceño. Todos los derechos reservados
		</footer>
	</div>
</template>

<script>
		/*
	import Descripcion from './Descripcion.vue'
	import Datos from './Datos.vue'
	import Habilidades from './Habilidades.vue'
	import Proyectos from './Proyectos'
	import Contacto from './Contacto'
	*/
	function lazyLoad(view){
	  return() => import(`./${view}.vue`)
	}

	export default{
		components:{
			Descripcion: lazyLoad("Descripcion"),
			Datos: lazyLoad("Datos"),
			Habilidades: lazyLoad("Habilidades"),
			Proyectos: lazyLoad("Proyectos"),
			Contacto: lazyLoad("Contacto")
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

	@media (max-width: 768px){
		#formulario1{
			display: none;
			background-color: rgb(230, 57, 70);
		}
	}

	@media (min-width: 768px){
		#formulario2{
			display: none;
			background-color: rgb(230, 57, 70);
		}
	}
</style>