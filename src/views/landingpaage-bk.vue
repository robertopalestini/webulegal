 
<template>
 
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" >

<component style="background:white !important">
<div class="container-fluid scroll-size-medium" style="background:white !important;margin-top:-70px !important;padding-top:80px !important;">
    <nav class="menu fixed-top">
        <div class="contenedor">
            <label class="logo">
                <a href="/"> <img src="@/assets/landing/logo.png" alt="" ></a>
            </label>
            <div class="wrapper">

           
            
            <ul id="otroModo" class="menu_items">
                <li class="active"><a class="link" href="#fp">Formar Parte</a></li>
                <li><a class="link2" href="#cf">¿Cómo Funciona?</a></li>
                <li><a class="link3" href="#do">Dejanos tu opinion</a></li>
            </ul>
            </div>
        </div>
        <span class="btn_menu">
            <i class="fa fa-bars"></i>
        </span>
        <span class="btn_menu2 btn_menu_none">
            <i class="fa fa-times">
            </i>
        </span>
    </nav>
    <button id="btnScrollToTop" @click="toTop()">
        <i class="fa-solid fa-arrow-up"></i>
    </button>
    <div class="" style="margin-top: 90px;">
         <!--SECTION 1-->
        <section  style="width:72%; height: 100vh; margin: auto;">
            <div  class="row justify-content-center" style="height: 68vh;">
                <div class="col-md-6" style="    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;">
                <h1 class="titles"  style="margin-bottom: 45px;">¡Bienvenido a la comunidad legal!</h1>
                    <p style="margin-bottom: 45px;">Encontrá y compartí legislación, doctrina, jurisprudencia y escritos automatizados. 
                        Hacé eficiente tu trabajo legal</p>
                        <div class="row">
                            <div class="col-6">
                                <a href="#" @click.prevent="goToRegister()" class="btn btn-regis">Registrarse</a>
                                <!-- <a href="login.html" class="btn btn-regis"> Registrarse</a> -->
                            </div>
                            <div class="col-6">
                                <!-- <a href="login.html" class="btn btn-sesion"> Iniciar Sesión</a> -->
                                <a href="#" @click.prevent="goToLogin()" class="btn btn-regis" style="    cursor: pointer;
    color: #2b44ff;
    background: transparent;
    border: 1px solid #2b44ff;">Iniciar Sesión</a>
                            </div>
                        </div>
                    

                </div>
                <div class="col-md-6 ">
                    <img   src="@/assets/render-legal.webp"  class="img-fluid">
                </div>

            </div>
        </section>
        <!--SECTION 2-->
        <div id="fp"></div>
        <section class="fp-section" style="width:65%; height: 100vh; margin: 100px auto;">
            <div class="row">
                <div class="col-md-12">
                <h1 class="text-center titles" >¿Por qué formar parte de Webu?</h1>
                    <p class="text-center mt-3">
                        Somos la comunidad de abogados que, de manera colaborativa, logramos hacer más eficiente el trabajo legal</p>
                </div>
           
                <div class="col-md-3 text-center iconos">
                    <i class="fas fa-file-contract"></i> 
                    <h5>Escritos automatizados</h5>
                    <p>Automatizá tus escritos más repetitivos  y 
                        decidí si los querés compartir a la comunidad o 
                        mantenerlos en privado</p>
                </div>
                <div class="col-md-3 text-center iconos">
                    <i class="fas fa-book-open"></i> 
                    <h5>Biblioteca legal colaborativa</h5>
                    <p>Encontrá y compartí legislación,  jurisprudencia y doctrina. Ordenado por materias, jurisdicción y etiquetas

                    </p>
                </div>
                <div class="col-md-3 text-center iconos">
                    <i class="fas fa-star"></i> 
                    <h5>Contenido validado</h5>
                    <p>Todo el material que encuentres en la plataforma está validado por otros colegas</p>
                </div>
                <div class="col-md-3 text-center iconos">
                    <i class="fas fa-medal"></i> 
                    <h5>Obtené recompensas</h5>
                    <p>Si los demás usuarios validan el contenido que compartiste, sumás puntos canjeables por increíbles premios</p>
                </div>
            </div>
        </section>
        <!--SECTION 3-->
        <div ></div>
        <section class="c-func" id="cf">
            <div class="row justify-content-center mt-20">
                <div class="col-md-12 text-center mb-5" >
                    <h1 class="titles" >
                        ¿Como Funciona?
                    </h1>
                </div>
                <div class="col-md-7">
                    <h1 class="text-wrap titles">
                        Automatizá tus escritos más repetitivos
                    </h1>
                    <p class="text-wrap mt-3">
                        Ahorra tiempo y esfuerzo usando nuestra 
                        herramienta de automatización. 
                    </p>
                    <p class="text-wrap mt-3">
                        Decidí si querés compartirlo a la 
                        comunidad o mantenerlo privado.
                    </p>
                    <a target="_blank"  href="https://drive.google.com/file/d/1jF-zfQ-jyoHG9Gt_ZJ0oOvsZPAbVLd6w/view?usp=sharing">Saber más</a>
                </div>
                <div class="col-md-5">
                    <img class="img-fluid" src="@/assets/automatiza.png" alt="">
                </div>
            </div>
             <!--SECTION 4-->
            <div style="margin: 80px auto;">
                <div class="row justify-content-center">
                    
                    <div class="col-md-5">
                              <img class="img-fluid" src="@/assets/econtra.png" alt="">
                    </div>
                    <div class="col-md-7">
                        <h1 class="text-wrap titles" >
                            Encontrá escritos automatizados
                        </h1>
                        <p class="text-wrap mt-3">
                            Ordenados por jurisdicciones y validados por otros colegas.
                        </p>
                        <p class="text-wrap mt-3">
                            Completá los datos y el escrito se generará automáticamente. Modificalo y adaptalo a tu necesidad.
                        </p> 
                    </div>
                
                </div>
            </div>
        </section>
       
         <!--SECTION 5-->
         <div style="width:64%;height: 100vh; margin:120px auto;">
            <div class="row justify-content-center">
                
                <div class="col-md-7">
                    <h1 class="text-wrap titles">
                        Biblioteca legal colaborativa
                    </h1>
                    <p class="text-wrap mt-3">
                        Encontrá y compartí legislación, jurisprudencia, doctrina y demás contenido legal, clasificado por jurisdicciones y materias. 
                    </p> 
                </div>
                <div class="col-md-5">
                   <img class="img-fluid" src="@/assets/bibliotecacola.png" alt="">
                </div>
               
            </div>
        </div>
        <!--SECTION 5-->
        <div id="do"></div>
        <section class="form" style="width:60%; height: 100vh; margin: 200px  auto;">
            <div class="row justify-content-center">
                
                <div class="col-md-12">
                    <h1 class="text-center mb-5 titles" >
                        Ayudanos a mejorar
                    </h1>   
                </div>
                <div class="col-md-12">
                    <p class="text-wrap mt-3">
                        En <strong>Webu</strong>  nos apasiona dar soluciones a los abogados para que puedan hacer su trabajo
                         más eficiente. Nuestro compromiso es poner a disposición
                          de la comunidad legal las herramientas que los abogados
                           realmente necesiten. 
                    </p>
                    <p class="text-wrap mt-3">       
                        Para ello, tu opinión es fundamental y por eso te pedimos
                        que nos aportes todo tipo de críticas para
                        poder mejorar nuestro servicio.
                        
                    </p>
                    <p class="text-wrap mt-3">       
                      
                        Muchas Gracias.
                    </p>
                </div>
               
                <div class="col-md-12" >
                    <form action="" method="post" @submit.prevent="saveFeedback()">
                        <div class="row">
                            <input class="mb-3" type="email" name="" id="" placeholder="Email" v-model="feedback.email" required :disabled="sendStatus">
                            <input class="mb-3" type="text" name="" id="" placeholder="Nombre" v-model="feedback.name" required :disabled="sendStatus">
                            <input class="mb-3" type="text" name="" id="" placeholder="Comentario" v-model="feedback.message" required :disabled="sendStatus">
                            <button class="btn-send" type="submit" :disabled="sendStatus">Enviar feedback</button>
                        </div>
                    </form>
                </div>

            </div>
        </section>

        <footer class="row">

            <div class="col-md-12 text-center iconos-footer">
                <a href="https://www.instagram.com/webu_ar/" style="background:transparent !important"><i class="fab fa-instagram" style="background:transparent !important"></i></a>
                <a href="https://www.linkedin.com/company/wearewebu/" style="background:transparent !important"><i class="fab fa-linkedin-in" style="background:transparent !important"></i></a>
                <a href="https://www.facebook.com/Webu-102265205747930" style="background:transparent !important"><i class="fab fa-facebook-f" style="background:transparent !important"></i></a>
            </div>
            <div class="col-md-12">
                <p class="text-center mt-3">Copyright Webu 2022</p>
            </div>
                
            

        </footer>



    </div>
</div>  
</component>

</template>

<style>
@import   '@/assets/landing/style.css';
@import   '@/assets/landing/home.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html , body { 
    font-family: 'Montserrat', sans-serif !important;
}

::-webkit-scrollbar {
    width: 10px !important;
    background: #DDDDDD !important;
    visibility: visible;
}


::-webkit-scrollbar-thumb {
    background: #A9A9A9 !important;
    width: 50px;
    display: block !important;
    visibility: visible; 
    height: 10px !important;
     }
</style>

 
<script>
import * as EmailValidator from 'email-validator';
 
 
 export default {
  data() {
    return {
        feedback: {
                email : null,
                message : null,
                name : null,
             },
        sendStatus : false
    }
  }, 
  created() {
        


addEventListener('DOMContentLoaded', () => {

    var contadorcart = 0;
    const btn_menu = document.querySelector(".btn_menu")
    if(btn_menu){
        btn_menu.addEventListener('click', ()=>{
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle('show')
            const btn_menu2 = document.querySelector(".btn_menu2")
            var contadora = 0;
            
            if(contadora == 0){
                btn_menu.classList.toggle('btn_menu_none')
                contadora = 1;
            } else (contadora == 1); {
                btn_menu2.classList.remove('btn_menu_none');
                if(contadorcart == 1){
                    btn_menu2.classList.toggle('btn_menu_none');
                }
                contadora = 0;
            }
        })
    }
    const btn_menu2 = document.querySelector(".btn_menu2")
    if(btn_menu2){
        btn_menu2.addEventListener('click', ()=>{
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.remove('show')
            const btn_menu = document.querySelector(".btn_menu")
            btn_menu.classList.remove('btn_menu_none')
            btn_menu2.classList.toggle('btn_menu_none')
        })
    }
    const link = document.querySelector(".link")
    if(link){
        link.addEventListener('click', ()=>{
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.remove('show')
            const btn_menu = document.querySelector(".btn_menu")
            btn_menu.classList.remove('btn_menu_none')
            const btn_menu2 = document.querySelector(".btn_menu2")
            btn_menu2.classList.toggle('btn_menu_none')
        })
    }
    const link2 = document.querySelector(".link2")
    if(link2){
        link2.addEventListener('click', ()=>{
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.remove('show')
            const btn_menu = document.querySelector(".btn_menu")
            btn_menu.classList.remove('btn_menu_none')
            const btn_menu2 = document.querySelector(".btn_menu2")
            btn_menu2.classList.toggle('btn_menu_none')
        })
    }
    const link3 = document.querySelector(".link3")
    if(link3){
        link3.addEventListener('click', ()=>{
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.remove('show')
            const btn_menu = document.querySelector(".btn_menu")
            btn_menu.classList.remove('btn_menu_none')
            const btn_menu2 = document.querySelector(".btn_menu2")
            btn_menu2.classList.toggle('btn_menu_none')
        })
    }
     
});

  },
  methods: {
  toTop() {
 window.scrollTo(0,0);
  } ,

  saveFeedback() { 

      if(!EmailValidator.validate(this.feedback.email)) {
        this.$toast.show(
              "E-mail incorrecto.",
                {
                   position: "bottom-right" 
                }
              ) 
           return;
      }

      const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                email : this.feedback.email,
                message : this.feedback.message,
                name : this.feedback.name,
             })
         };
         fetch( window.ENDPOINT + '/requests/new/feedback', requestOptions).then(response => response.json()).then((data) => {
                this.$toast.success( "Tu solicitud ha sido procesada. Muchas gracias por ayudarnos a mejorar",{position: "bottom-right" })
                this.sendStatus = true;
                this.feedback =  {
                email : null,
                message : null,
                name : null,
                }
         }) 
    },


    goToLogin() {
        if(this.$route.query.rel) {
                this.$router.push({
                            name: 'login',
                            query: {
                         rel: this.$route.query.rel
                }
              })
                return;
            }


            this.$router.push('/login')
    },
    goToRegister() {
       if(this.$route.query.rel) {
                this.$router.push({
                            name: 'register',
                            query: {
                         rel: this.$route.query.rel
                }
              })
                return;
            }


            this.$router.push('/register')
    } 
  }
}
 
</script>

 