<template>
  <header style=" 
    height: 70px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
 " v-if="user">

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 text-center">
          <img src="@/assets/logo-transparent.png" class="img-fluid" style="max-width:120px" />
        </div>
        <div class="col-md-9 text-right" style="    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;">
          <ul style="
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
">
            <li style="padding:0;display:flex;">
              <RouterLink to="/platform/formar-parte" style="padding-left:20px;padding-right:20px;font-size:15px">Formar
                Parte</RouterLink>
            </li>
            <li style="padding:0;display:flex;">
              <RouterLink to="/platform/como-funciona" style="padding-left:20px;padding-right:20px;font-size:15px">¿Cómo
                Funciona?</RouterLink>
            </li>
            <li style="padding:0;display:flex;">
              <RouterLink to="/platform/dejanos-tu-opinion" style="padding-left:20px;padding-right:20px;font-size:15px">
                Dejanos tu opinion</RouterLink>
            </li>

            <li style="padding:0;display:flex;">
              <button type="button" class="btn btn-primary"
                style="width:120px;position:relative;z-index:1000;padding:5px;font-size:12px;margin-left:20px"
                v-if="suscription.pending" @click.prevent="openModal()">Suscribite</button>
            </li>


          </ul>
        </div>


        <div class="col-md-1 text-right">
          <a href="#">
            <img
              :src="'https://ui-avatars.com/api/?background=000000&color=fff&name=' + user.profile.firstname + user.profile.lastname"
              style="height:30px;border-radius:100%;margin-right:10px" @click="open_dropdown_user()" />



            <transition name="slide">
              <div style="
 width:270px;
 height:auto;
 background:red;
 opacity: 1;
 position: absolute;
 z-index: 500;
 border-radius: 8px;
 background: white; 
 border: 1px solid #d0cece;
 margin-top: 10px;
 padding-top:20px;
     left: -200px;
 " v-if="dropdown_user" v-click-outside="onClickOutside">
                <div class="col-md-12 text-center" style="margin-bottom:10px">
                  <img
                    :src="'https://ui-avatars.com/api/?background=000000&color=fff&name=' + user.profile.firstname + user.profile.lastname"
                    style="height:50px;border-radius:100%" />
                </div>
                <div class="col-md-12" style="text-align:center;margin-top:20px;margin-bottom:20px;">
                  <h5 style="text-align:center;font-size:15px;margin:0;">{{user.profile.firstname}}
                    {{user.profile.lastname}} </h5>
                  <span class="text-muted" style="font-size:12px">{{user.email}}</span>
                </div>

                <div class="col-md-12" style="text-align:center;margin-top:20px;margin-bottom:20px;">
                  <h2 style="text-align:center;margin:0;font-weight: 600;font-size:22px">{{user.points}}</h2>
                  <span class="text-muted" style="text-transform:uppercase;font-size:12px">puntos</span>
                </div>


                <div class="col-md-12" style="text-align:center;margin-top:20px;margin-bottom:20px;">
                  <RouterLink to="/change/points" style="font-size:12px">Canjear</RouterLink>
                </div>


                <div class="col-md-12"
                  style="text-align:center;padding-top:15px;padding-bottom:15px;text-align:center;border-top: 1px solid #d0cece;">
                  <RouterLink to="/platform/account"  style="font-size:14px;font-weight:600;background:transparent !important">Mi cuenta</RouterLink>
                </div>


                <div class="col-md-12"
                  style="text-align:center;padding-top:15px;padding-bottom:15px;text-align:center;border-top: 1px solid #d0cece;">
                  <a href="#" @click.prevent="logout()" style="font-size:14px;font-weight:600">Cerrar sesion</a>
                </div>


              </div>
            </transition>
          </a>
        </div>
      </div>
    </div>
  </header>
















  <!-- Modal -->
  <div class="modal fade" id="suscriptionModal" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true" style="backdrop-filter:blur(5px)">
    <div class="modal-dialog modal-dialog-centered ">
      <div class="modal-content" @submit.prevent="selectPathMoveSave()"
        style="border-radius:10px;border:none;    box-shadow: 0 0 300px #00000087;">
        <div class="modal-header text-center" style="background : #dedcdc;color:#454545;border-top-left-radius: 10px;
    border-top-right-radius: 10px">
          <h5 class="modal-title" style="    font-size: 15px;
    font-weight: 600;
    text-align: center !important;
    display: block !important;
    width: 100%;">Suscribite</h5>

        </div>
        <div class="modal-body text-center" style="padding-top:50px;padding-bottom:50px;">
          <h4 class="text-center"
            style="margin-top:30px;margin-bottom:30px;margin-bottom:10px;font-size:25px;font-weight:600;">FINALIZÓ TU
            PERIODO DE PRUEBA!</h4>
          <p class="text-center">Para seguir disfrutando de <b>Webu</b>, suscribite por sólo</p>
          <h1 class="text-center" style="font-size:60px;font-weight:600;margin-top:50px;">${{amount}}</h1>
          <p class="text-center" style="margin-bottom:50px;">Mensual</p>

          <a :href="link" class="btn btn-primary" style="width:200px;position:relative;z-index:1000">Suscribirme</a>

        </div>
        <!--      <div class="modal-footer" style="border:none"> 
        <button type="submit" class="btn btn-primary" style="font-size:15px">Guardar</button>
      </div> -->
      </div>
    </div>
  </div>







</template>




<script>
import vClickOutside from 'click-outside-vue3'

export default {
  data() {
    return {
      dropdown_user: false,
      user: false,
      suscription: {
        pending: false
      },
      tmpEvent: null,
      amount: 0,
      link: ''
    }
  },
  created() {

  },
  mounted() {
    this.auth();
    this.checkSuscription();


  },

  directives: {
    clickOutside: vClickOutside.directive
  },


  methods: {


    openModal() {
      $('#suscriptionModal').modal('show')
    },
    checkSuscription() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          auth: localStorage.getItem('auth')
        })
      };
      fetch(window.ENDPOINT + '/users/check/suscription', requestOptions).then(response => response.json()).then((data) => {
        this.suscription.pending = data.pending;
        if (data.pending) {
          this.amount = data.payment.response.auto_recurring.transaction_amount;
          this.link = data.payment.response.init_point;
          $('#suscriptionModal').modal('show')
        }
      })


    },
    auth() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          auth: localStorage.getItem('auth')
        })
      };
      fetch(window.ENDPOINT + '/users/auth', requestOptions).then(response => response.json()).then((data) => {
        this.user = data.data;
      })
    },
    logout() {
      localStorage.removeItem('auth');
      localStorage.removeItem('user');
      this.$router.push('/')
      this.$toast.show(
        "Gracias por utilizar nuestra plataforma.",
        {
          position: "bottom-right"
        }
      )

    },
    open_dropdown_user() {
      if (this.dropdown_user) {
        this.dropdown_user = false;

      } else {
        this.dropdown_user = true;
      }
    },

    onClickOutside(event) {
      this.dropdown_user = false;
    }

  }
}

</script>