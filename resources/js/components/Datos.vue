<template>
	<div id="Estudios">
		<h2 class="text-center text-light display-4">Estudios</h2>
		<table class="container table" id="tabla" v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '150px'}">
			<tbody>
				<tr>
					<th>Bachillerato</th>
					<td>Escuela Tecnica Privada Maracay 2010-2015 (Tecnico Medio Mencion Informatica)</td>
				</tr>
				<tr>
					<th>Universidad</th>
					<td>Universidad Nacional Experimental Romulo Gallegos 2015-2020 (Ingenieria en Sistemas)</td>
				</tr>
			</tbody>
		</table>
		<br>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped>
	#Estudios{
		background-color: rgb(69, 123, 157);
		background-size: 100%;
		width: 100%;
		background-repeat: no-repeat;
	}
	#tabla{
		background-color: rgba(256,256,256,0.9)!important ;
	}
</style>