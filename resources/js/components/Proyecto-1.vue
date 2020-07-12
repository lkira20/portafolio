<template>
	<div>
	  <!-- Navegacion -->
    
		  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		    <div class="container">
		      <a class="navbar-brand" href="/">
		      <img src="../../../public/image/balloon-sq6.jpg" alt="logotipo" style="width: 10%;">
		      </a>
		      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		        <span class="navbar-toggler-icon"></span>
		      </button>
		      <div class="collapse navbar-collapse" id="navbarNav">
		        <ul class="navbar-nav ml-auto">
		          <li class="nav-item">
		            <a class="nav-link" href="#">Acerca</a>
		          </li>
		          <li class="nav-item">
		            <a class="nav-link" href="#">Equipo</a>
		          </li>
		          <li class="nav-item">
		            <a class="nav-link" href="#">Contacto</a>
		          </li>
		        </ul>
		    </div>
		    </div>
		  </nav>    

		  <!-- HEADER -->

		  <header class="main-header">
		    
		    <div class="background-overlay text-white py-5">
		      <div class="container">
		        <div class="row">
		          <div class="col-md-6  text-center justify-content-center align-self-center">
		            <h1>Esto es un titulo</h1>
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		            tempor incididunt ut labore et dolore magna aliqua.</p>
		            <a href="#" class="btn btn-outline-secondary btn-lg text-white">Leer mas</a>
		          </div>
		          <div class="col-md-6">
		            <img src="../../../public/image/balloon-sq4.jpg" alt="imagen del producto" class="img-fluid d-none d-sm-block ">
		          </div>
		        </div>
		      </div>
		    </div>

		  </header>

		  <!-- NEWSLETTER -->

		  <section class="bg-dark text-white py-5">
		    <div class="container">
		      <div class="row">
		        <div class="col-md-4">
		          <input type="text" class="form-control form-control-lg" placeholder="Nombre">
		        </div>
		        <div class="col-md-4">
		          <input type="email" class="form-control form-control-lg" placeholder="Email">
		        </div>
		        <div class="col-md-4">
		          <button class="btn btn-primary btn-lg btn-block">
		            Suscribete
		          </button>
		        </div>
		      </div>
		    </div>
		  </section>

		  <!-- Caracteristicas -->

		  <section class="py-5">
		    <div class="container"> 
		      <div class="row">
		        <div class="col-md-3"> 
		          <div class="card">
		            <div class="card-body text-center border-primary">
		              <h3>Caracteristica 1</h3>
		              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		            </div>
		          </div>
		        </div>
		        <div class="col-md-3"> 
		          <div class="card">
		            <div class="card-body text-center bg-primary text-white">
		              <h3>Caracteristica 2</h3>
		              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		            </div>
		          </div>
		        </div>
		        <div class="col-md-3"> 
		          <div class="card">
		            <div class="card-body text-center border-primary">
		              <h3>Caracteristica 3</h3>
		              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		            </div>
		          </div>
		        </div>
		        <div class="col-md-3"> 
		          <div class="card">
		            <div class="card-body text-center bg-primary text-white">
		              <h3>Caracteristica 4</h3>
		              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </section>
		    
		  <!-- Acerca de -->

		  <section class="bg-light text-center">
		    <div class="container">
		      <div class="row">
		        <div class="m-5">
		          <h3>¿Por que este producto?</h3>
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		          cillum dolore eu fugiat nulla pariatur.</p>
		        </div>
		      </div>
		    </div>
		  </section>

		  <!-- Preguntas de acoordion -->

		  <section class="container text-center p-5">
		    <div class="row">
		      <div class="accordion" id="accordionExample">
		        <div class="card">
		          <div class="card-header" id="headingOne">
		            <h2 class="mb-0">
		              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
		                ¿Pregunta uno?
		              </button>
		            </h2>
		          </div>

		          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
		            <div class="card-body">
		              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
		            </div>
		          </div>
		        </div>
		        <div class="card">
		          <div class="card-header" id="headingTwo">
		            <h2 class="mb-0">
		              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
		                ¿Pregunta 2?
		              </button>
		            </h2>
		          </div>
		          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
		            <div class="card-body">
		              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
		            </div>
		          </div>
		        </div>
		        <div class="card">
		          <div class="card-header" id="headingThree">
		            <h2 class="mb-0">
		              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
		                ¿Pregunta 3?
		              </button>
		            </h2>
		          </div>
		          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
		            <div class="card-body">
		              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </section>

		  <!-- Equipo -->

		  <section class="team text-center">
		    <div class="container p-5">
		      <h1 class="text-white">Equipo</h1>
		      <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      tempor incididunt ut labore et dolore magna aliqua.</p>
		      <div class="row">
		        <!-- Miembros -->
		        <div class="col-lg-3">
		          <div class="card">
		            <div class="card-body">
		              <img src="../../../public/image/icon-persona.png" class="img-fluid rounded-circle w-50" alt="icono de persona">
		              <h3>Siul Briceño</h3>
		              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
		              <div class="d-flex flex-row justify-content-center">
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="far fa-envelope"></i></a>
		                </div>
		              </div>
		              
		            </div>
		          </div>
		        </div>
		        <div class="col-lg-3">
		          <div class="card">
		            <div class="card-body">
		              <img src="../../../public/image/icon-persona.png" class="img-fluid rounded-circle w-50" alt="icono de persona">
		              <h3>Siul Briceño</h3>
		              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
		              <div class="d-flex flex-row justify-content-center">
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="far fa-envelope"></i></a>
		                </div>
		              </div>
		              
		            </div>
		          </div> 
		        </div>
		        <div class="col-lg-3">
		          <div class="card">
		            <div class="card-body">
		              <img src="../../../public/image/icon-persona.png" class="img-fluid rounded-circle w-50" alt="icono de persona">
		              <h3>Siul Briceño</h3>
		              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
		              <div class="d-flex flex-row justify-content-center">
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="far fa-envelope"></i></a>
		                </div>
		              </div>
		              
		            </div>
		          </div>
		        </div>
		        <div class="col-lg-3">
		          <div class="card">
		            <div class="card-body">
		              <img src="../../../public/image/icon-persona.png" class="img-fluid rounded-circle w-50" alt="icono de persona">
		              <h3>Siul Briceño</h3>
		              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
		              <div class="d-flex flex-row justify-content-center">
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
		                </div>
		                <div class="p-3">
		                  <a href="#" target="_blank"><i class="far fa-envelope"></i></a>
		                </div>
		              </div>
		              
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </section>

		  <!-- CONTACTO -->

		  <section class="bg-light py-5">
		    <div class="container">
		      <div class="row">
		        <div class="col-lg-9">
		          <h3>Contacto</h3>
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		          <form>
		            <div class="input-group mb-3">
		              <div class="input-group-prepend"><i class="fas fa-user input-group-text"></i></div>
		              <input type="text" name="texto" class="form-control" placeholder="Nombre">
		            </div>
		            <div class="input-group mb-3">
		              <div class="input-group-prepend"><i class="far fa-envelope input-group-text"></i></div>
		              <input type="email" name="email" class="form-control" placeholder="Email">
		            </div>
		             <div class="input-group mb-3">
		              <div class="input-group-prepend"><i class="fas fa-pencil-alt input-group-text"></i></div>
		              <textarea placeholder="escribe tu mensaje" class="form-control"></textarea>
		            </div>
		            <button class="btn btn-primary btn-lg btn-block">
		              Enviar mensaje
		            </button>
		          </form>
		        </div>
		        <div class="col-lg-3 align-self-center">
		          <img src="../../../public/image/balloon-sq1.jpg" style="width: 100%;" alt="logo de globos">
		        </div>
		      </div>
		    </div>
		  </section>

		  <footer>
		    <div class="container p-3 text-white text-center">
		      <p>Copyright &copy; 2019</p>
		    </div>
		  </footer>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped>
	.navbar{
	box-shadow: 2px 2px 5px #000;
	opacity: .9;
	}

	.navbar .nav-item .nav-link{
		color: #fff;
	}

	.main-header{
		position: relative;
		background: url("../../../public/image/balloon-sq6.jpg");
		background-size: cover;
		min-height: 500px
	}

	.background-overlay{
		background-color: rgba(48, 51, 107,.7);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.form-control, .btn{
		border-radius: 0;
	}

	.team, footer{
		background-color: rgba(48, 51, 107,1);
	}
</style>