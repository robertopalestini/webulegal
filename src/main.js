import {
    createApp
} from 'vue'
import {
    createPinia
} from 'pinia'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import VueProgressBar from "@aacassandra/vue3-progressbar";
const options = {
    color: "#0C00FF",
    failedColor: "#B62B2B",
    thickness: "3px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
};
 
window.ENDPOINT = 'https://webulegal.com/api';
window.PATHUPLOAD = 'https://webulegal.com/uploads/';
window.ENDPOINTEXPORTS = 'https://webulegal.com/exports/';
window.BASEURL = 'https://webulegal.com';


 
 

// window.ENDPOINT = 'http://localhost:4000/api';
// window.PATHUPLOAD = 'http://localhost:4000/uploads/';
// window.ENDPOINTEXPORTS = 'http://localhost:4000/exports/';
// window.BASEURL = 'http://localhost:4000';



 
import CKEditor from '@ckeditor/ckeditor5-vue';


 
import vue3GoogleLogin from 'vue3-google-login'








import Toaster from '@meforma/vue-toaster';


app.use(Toaster)
 
app.use(vue3GoogleLogin, {
    clientId: '873163088650-rdtnllo0415r64pdgi4gilgnghgr5soc.apps.googleusercontent.com',
    buttonConfig : {
        theme : 'outline',
        shape: 'circle',
        locale : 'es'
    }
  })
  

app.use(createPinia())
app.use(VueProgressBar, options);
app.use(router)
app.use(CKEditor)
app.mount('#app')