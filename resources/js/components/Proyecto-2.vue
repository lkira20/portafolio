<template>
  <div>
      <!-- navegacion -->

  <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top" v-scroll-reveal.reset="{duration: 2000, origin: 'button'}">
    <div class="container">
      <a class="navbar-brand" href="#">bootstrap website</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#header" v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#info-uno" v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }">Acerca</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto" v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Header -->

  <header id="header">

    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="header-content-left" v-scroll-reveal.reset="{duration: 2000, origin: 'top', distance: '300px'}">
            <img src="../../../public/image/balloon-sq1.jpg" alt="globos" style="width: 100%;">
          </div>
        </div>
        <div class="col-md-6">
          <div class="header-content-right" v-scroll-reveal.reset="{duration: 2000, origin: 'right', distance: '300px'}">
            <h1 class="display-4">Titulo del sitio web</h1>
            <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 

            <a class="btn btn-outline-secondary btn-lg mt-2 header-btn" href="#" v-scroll-reveal.reset="{duration: 2000, origin: 'buttom', delay: '1000'}">Leer mas</a>
          </div>
        </div>
      </div>
    </div>

  </header>

  <!-- Testimonial -->

  <section id="Testimonial" v-scroll-reveal.reset="{duration: 2000, origin: 'left', distance: '300px', viewFactor: 0.2}">
    <div class="container">
      <p class="mb-2 h2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="h4">-Ryan Ray</p>
    </div>
  </section>

  <!-- informacion uno -->

  <section id="info-uno">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="info-left">
            <img src="../../../public/image/balloon-sq2.jpg" style="width: 100%;">
          </div>
        </div>
        <div class="col-md-6 my-auto">
          <div class="info-right">
            <h2>Lorem ipsum</h2>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <a href="#" class="btn btn-outline-secondary btn-lg">Leer mas</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- informacion dos -->

  <section id="info-dos">
    <div class="container">
      <div class="row my-5">
        <div class="col-md-6">
          <div class="info-left">
            <h2>Titulo</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="info-right">
            <h2>Lorem ipsum</h2>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <a href="#" class="btn btn-outline-secondary btn-lg">Leer mas</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer id="contacto">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <form class="card my-4">
            <div class="card-body">
              <div class="form-group">
                <input type="text" placeholder="Nombre" class="form-control">
              </div>
              <div class="form-group">
                <input type="text" placeholder="Apellido" class="form-control">
              </div>
              <div class="form-group">
                <input type="email" placeholder="Email" class="form-control">
              </div>
              <div class="form-group">
                <textarea placeholder="mensaje" rows="10" class="form-control"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-secondary btn-block">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
/*
    window.sr = ScrollReveal();

    sr.reveal('.navbar', {duration: 2000, origin: 'button'});

    sr.reveal('.header-content-left', {duration: 2000, origin: 'top', distance: '300px'});

    sr.reveal('.header-content-right', {duration: 2000, origin: 'right', distance: '300px'});

    sr.reveal('.header-btn', {duration: 2000, origin: 'buttom', delay: '1000'});

    sr.reveal('#Testimonial', {duration: 2000, origin: 'left', distance: '300px', viewFactor: 0.2});
*/
    /* Smooth Scrolling */
/*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });
    
*/
  export default{
    
  }
</script>

<style scoped>
  body{
    font-family: "titillium web", sans-serif;
  }

  header{
    margin-top: 75px;
  }

  #Testimonial{
    background-color: #f1f1f1;
    padding: 50px 0 30px 0;
    text-align: center;
    margin-top: 40px;
  }

  footer{
    background: url(../../../public/image/balloon-sq4.jpg);
  }
</style>