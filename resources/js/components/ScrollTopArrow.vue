<template>
	<scrollTop>
			<a class="btn-top rounded-circle border border-dark">
				<img src="../../../public/image/arrow-up-solid.svg" alt="logo de linkedin" width="20px" class="">
			</a>
		</scrollTop>
</template>

<script>
import scrollTop from './ScrollTop'

export default {
  components: {
    scrollTop
  }
}
</script>

<style scoped>
	.btn-top{
		border-radius: 8px;
	    background-color: rgba(0, 0, 0, 0.55);
	    padding-top: 15px;
	    padding-left: 15px;
	    padding-right: 15px;
	    padding-bottom: 15px;
	}
</style>