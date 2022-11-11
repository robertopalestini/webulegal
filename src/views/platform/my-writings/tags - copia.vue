<template>
<navBar /> 
<Transition name="fade">
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2" style="height:calc(100vh - 70px);overflow:hidden;overflow-y:auto;padding:0;"> 
                 <columnLeft />
                </div> 
                <div class="col-md-10" style="height:calc(100vh - 70px);border:1px solid #E2E2E2">   
                		<!-- ======================================= -->

                			<div class="row">
                				<div class="col-md-3" style="height:calc(100vh - 70px);overflow:hidden;overflow-y:auto;">
                				   <div class="col-12" style="font-weight:600;color:black;padding-top:2.5px;padding-bottom:2.5px;border-bottom:1px solid #e6e6e6">
                				     Etiquetas
                				   </div> 
                				  <!--  <div class="col-12 text-center" style="padding-top:2.5px;padding-bottom:2.5px;border-bottom:1px solid #E5E5E5">
                				     <a href="#" style="font-size:13px;">Nueva carpeta</a>
                				   </div>  -->
                				   <div class="col-12 text-center" style="padding-top:8.5px;padding-bottom:8.5px;border-bottom:1px solid #E5E5E5">
                				     <input type="text" class="form-control" style=" border-radius: 30px;height: 25px !important;max-height: 25px !important;min-height: 25px !important;border: 1px solid rgb(137 137 137);background: transparent;font-size: 12px;font-weight: 500; " v-model="searchTarget" @keyup="search()" />
                				   </div> 
                				   <div class="col-12"  style="padding-top:10px;padding-bottom:10px">
                                    <div class="spinner-border spinner-border-sm" role="status" v-if="loadingFolders">
                                      <span class="sr-only">Loading...</span>
                                    </div>
                				   	<ul style="padding:0;margin:0;width:100%;list-style:none" v-if="items.length"> 
                						<li style="padding:0;margin:0;width:100%;list-style:none" v-for="item in filteredResources" :key="index" @click="getDocumentsByTag(item.id,item.title)"  >
                							<a href="#" style="color:black;font-weight:600;">{{item.title}}</a>
                						</li> 
                					</ul>
                				   </div>
                				   <div class="col-12 text-center" style="padding-top:8.5px;padding-bottom:8.5px;border-bottom:1px solid #E5E5E5">

   
 
<ul style="padding: 0px;list-style: none;width: 100%;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;align-content: flex-start;">
    <li style="
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    align-content: flex-start;
    margin-bottom:5px
"  v-for="(tagSelected, index)   in tagsSelected"  >
<a href="#" style="font-size: 12px;padding: 5px;background: rgb(234, 234, 234);border-radius: 30px;    display: flex;
    place-content: flex-start;
    align-items: center;
    flex-direction: row;padding-left:10px;padding-right:10px">{{tagSelected.title}} 
 <a href="#" style="margin-left:10px" @click="removeFilterTag(index,tagSelected.title)"><i class="fas fa-times"></i></a>
</a>
</li>
</ul>


                				   </div>
                				</div>

                				<div class="col-md-3" style="border-left:1px solid  #e6e6e6;border-right:1px solid  #e6e6e6;padding:0;height:calc(100vh - 70px);overflow:hidden;overflow-y:auto;position:relative"> 
                					<!-- <div class="col-12" style="background:#e0dfdf;padding:15px;">
                						<b style="color:#858484;font-size:16px">Lorem ipsum dolor sit amet</b>
                					    <p style="color:#858484;font-size:13px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                							tempor incididunt ut labore et dolore magna aliqua...</p>
                					</div>
                                     -->
                                  
                					<div class="spinner-border spinner-border-sm" role="status" v-if="loadingDocuments" style="position:absolute">
                                      <span class="sr-only">Loading...</span>
                                    </div>
                                   

                                  
                					<div class="col-12" style="padding:15px;border-bottom:1px solid  #e6e6e6;cursor:pointer" v-for="document in documents" :key="index" @click="getDocument(document._id)" v-bind:class="{ activeDocument: (document._id === activeDocumentId) }">
                						<b style="color:black;font-size:15px">{{document.data.title}}</b>
                					    <p style="color:#525252;font-size:12px">{{document.data.description}}</p>
                					</div> 
                				    

                					 
                				</div>
                				<div class="col-md-6" style="border-left:1px solid  #e6e6e6;border-right:1px solid  #e6e6e6;padding:0;height:calc(100vh - 70px);overflow:hidden;overflow-y:auto;position:relative"> 
                                    <div class="spinner-border spinner-border-sm" role="status" v-if="loadingDocument" style="position:absolute">
                                      <span class="sr-only">Loading...</span>
                                    </div>
                                    <div class="col-12" v-if="document" style="padding:10px">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <b>{{document.data.title}}</b>
                                            </div>
                                            <div class="col-md-4 text-right">
                                                <a href="#" style="margin:5px"><img src="@/assets/descargar.svg" style="width:14px;height:14px;margin-right:5px" /></a>
                                                <a href="#" style="margin:5px"><img src="@/assets/cuota.svg" style="width:14px;height:14px;margin-right:5px" /></a>
                                            </div>
                                        </div>
                                    </div>

                                      <div id="editor2" contenteditable="true" style="width:100%;padding:20px" v-html="contentDocument"> 
                                      </div>
                				</div>
                			</div>
                     
                			<!-- ======================================= -->	 
                 </div>  
            </div>
        </div> 
    </main> 
</Transition>
</template>

<style>
    @import   '@/assets/platform.css';
    .activeDocument { 
    padding: 15px;
    border-bottom: 1px solid rgb(230, 230, 230);
    border-left: transparent !important;
    transition: all 250ms;
    background: #B9B9B9 !important;
    opacity: 0.6 !important;
} 
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
      endpoint: window.ENDPOINT + '/writings/get/tags',
      endpointDocuments: window.ENDPOINT + '/writings/get/tags/documents',
      endpointDocument: window.ENDPOINT + '/writings/get/document',
      endpointGetAll: 'http://api.webu.lt/writings',
      items:[],
      documents:[],
      loadingFolders:true,
      loadingDocument:false,
      tagsSelected:[],
      contentDocument:null,
      activeDocumentId:null,
      document:null,
      searchTarget:null,
    }
  }, 
    created() {
      
    },
    mounted() {  

         this.loadAllDocuments();
         this.loadTags();

    },

    computed: {
    filteredResources (){
      if(this.searchTarget){
      return this.items.filter((item)=>{
        console.log(item.title.startsWith(this.searchTarget))
        return item.title.startsWith(this.searchTarget);
      })
      }else{
        console.log(this.items)
        return this.items;
      }
    }
  },
 
 


  methods: { 
    loadTags() {
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
              
         if(data.error == true) { 
            } else {
              this.items = data;
              this.loadingFolders = false;
            } 
          
       
            
         })



    },
    loadAllDocuments() {
        const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                auth:this.auth 
             })
         };
         fetch(this.endpointGetAll, requestOptions).then(response => response.json()).then((data) => {
          this.documents = data;
         }) 
    },
    search() {
      console.log(this.searchTarget); 
    },
    removeFilterTag(index,name) { 
        delete this.tagsSelected[index]; 
       this.tagsSelected =  this.tagsSelected.filter(function(a){return typeof a !== 'undefined';})
       this.loadingDocuments = true;
      const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                auth:this.auth,
                tags:this.tagsSelected,
                // id_tag:idtag,
                // name:tag
             })
         };
         fetch(this.endpointDocuments, requestOptions).then(response => response.json()).then((data) => { 
            
              if(data.error == true) {    
              } else {
                this.documents = data; 
                this.loadingDocuments = false;
              } 
           
         })
    },
    getDocument(id) {
        this.activeDocumentId = id;
        this.loadingDocument = true;
      const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                auth:this.auth,
                id:id,
                // id_tag:idtag,
                // name:tag
             })
         };
         fetch(this.endpointDocument, requestOptions).then(response => response.json()).then((data) => { 
            
              if(data.error == true) {    
              } else {
               this.document = data;

                this.contentDocument = data.data.content;
                this.loadingDocument = false;
              } 
         
         })
    },
    getDocumentsByTag(idtag,tag) { 
      this.tagsSelected.push({'title' : tag,'id':idtag});

      this.loadingDocuments = true;
      const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                auth:this.auth,
                tags:this.tagsSelected,
                // id_tag:idtag,
                // name:tag
             })
         };
         fetch(this.endpointDocuments, requestOptions).then(response => response.json()).then((data) => { 
            
              if(data.error == true) {    
              } else {
                this.documents = data;
                this.loadingDocuments = false;
              } 
          console.log(this.documents);
         })
    }, 
    pause() {
       
    },
    hover() {
       
    } 
  }
}
 
</script>
