<template>
<navBar /> 
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2" style="height:calc(100vh - 70px);overflow:hidden;overflow-y:auto;padding:0;"> 
                 <columnLeft />
                </div> 
                <div class="col-md-10" style="height:calc(100vh - 70px);border:1px solid #E2E2E2">   
                		<!-- ======================================= -->

                			<div class="row">
                				<div class="col-md-3" >
                				   <div class="col-12" style="font-weight:600;color:black;padding-top:2.5px;padding-bottom:2.5px;border-bottom:1px solid #e6e6e6">
                				     Carpetas
                				   </div> 
                				   <div class="col-12 text-center" style="padding-top:2.5px;padding-bottom:2.5px;border-bottom:1px solid #E5E5E5">
                				     <a href="#" style="font-size:13px;">Nueva carpeta</a>
                				   </div> 
                				   <div class="col-12 text-center" style="padding-top:8.5px;padding-bottom:8.5px;border-bottom:1px solid #E5E5E5">
                				     <input type="text" class="form-control" style=" border-radius: 30px;height: 25px !important;max-height: 25px !important;min-height: 25px !important;border: 1px solid #949494;background: transparent; " />
                				   </div> 
                				   <div class="col-12"  style="padding-top:10px;padding-bottom:10px">
                                    <div class="spinner-border spinner-border-sm" role="status" v-if="loadingFolders">
                                      <span class="sr-only">Loading...</span>
                                    </div>
                				   	<ul style="padding:0;margin:0;width:100%;list-style:none"> 
                						<li style="padding:0;margin:0;width:100%;list-style:none" v-for="item in items" :key="index" @click="getDocumentsFolder(item.id)">
                							<a href="#" style="color:black;font-weight:600;">{{item.name}}</a>
                						</li> 
                					</ul>
                				   </div>
                				</div>
                				<div class="col-md-3" style="border-left:1px solid  #e6e6e6;border-right:1px solid  #e6e6e6;padding:0;height:calc(100vh - 100px);overflow:hidden;overflow-y:auto;"> 
                					<div class="col-12" style="background:#e0dfdf;padding:15px;">
                						<b style="color:#858484;font-size:16px">Lorem ipsum dolor sit amet</b>
                					    <p style="color:#858484;font-size:13px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                							tempor incididunt ut labore et dolore magna aliqua...</p>
                					</div>

                					<div class="col-12" style="padding:15px;border-bottom:1px solid  #e6e6e6;" v-for="index in 25" :key="index">
                						<b style="color:#5f5d5d;font-size:15px">Lorem ipsum dolor sit amet</b>
                					    <p style="color:#5f5d5d;font-size:12.5px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                							tempor incididunt ut labore et dolore magna aliqua...</p>
                					</div> 

                					 
                				</div>
                				<div class="col-md-6"> 
                				</div>
                			</div>
                     
                			<!-- ======================================= -->	 
                 </div>  
            </div>
        </div> 
    </main> 
</template>

<style>
    @import   '@/assets/platform.css';
</style>

<script setup="">
import columnLeft from '@/components/platform/left.vue';
import navBar from '@/components/platform/navbar.vue';
 
</script>
 

<script>

 export default {
  data() {
    return {
      auth:localStorage.getItem('auth'), 
      endpoint:'http://api.webu.lt/librarie/folders',
      items:[],
      loadingFolders:true,
    }
  },
    created() {
    
    },
    mounted() { 
        const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                auth:this.auth 
             })
         };
         fetch(this.endpoint, requestOptions).then(response => response.json()).then((data) => {
        console.log(data)
      setTimeout(() => {
         if(data.error == true) {
                
            } else {
              this.items = data;
              this.loadingFolders = false;
            } 
          
      },200)
            
         })

    },


  methods: { 
    submit(e) { 
      
    }, 
    pause() {
       
    },
    hover() {
       
    } 
  }
}
 
</script>
