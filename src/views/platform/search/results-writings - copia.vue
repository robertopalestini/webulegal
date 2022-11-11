<script setup="">
import columnLeft from '@/components/platform/left.vue';
import navBar from '@/components/platform/navbar.vue';
 
</script>
 
<template>
<navBar /> 
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2" style="height:calc(100vh - 70px);"> 
                 <columnLeft />
                </div> 
                <div class="col-md-10" style="height:calc(100vh - 70px);">   
                		<!-- ======================================= -->

                			<div class="row">
                				<div class="col-md-3" style="height:calc(100vh - 70px);overflow:hidden;overflow-y:auto;">
                					<div class="col-md-12">
                						<form @submit.prevent="getResults()">
                                        <input type="text" class="form-control" style=" 
    border-radius: 30px;
    height: 35px !important;
    max-height: 35px !important;
    min-height: 35px !important;
    border: none;
    background: #d8d5d5cf; 
"  v-model="searchInput.target" />
             <button type="submit" hidden="true" ></button>
             </form>
                					</div>
                					<div class="col-md-12" style="padding:15px;font-size:13px">
                						Seleccioná carpetas y/o etiquetas, para obtener mejores resultados 
                					</div>
                					<div class="col-md-12" style="padding:15px">
                						<i class="fas fa-filter"></i> Filtros
                					</div>
                					<div class="col-md-12">
                                       <b  v-if="foldersFilters.length == 0" style="font-size:12px;">No se han colocado filtros.</b>
                						<ul style="margin:0;padding:0;list-style:none">
                							<li style="padding:7px" v-for="(item,index) in foldersFilters" v-if="foldersFilters.length > 0"><a href="#" style="background: #d8d5d5;font-size: 12px;padding: 8px;border-radius: 25px;margin-bottom:10px">{{item.title}} <a href="#" style="margin-left:10px" @click="removeFilterFolder(index)"><i class="fas fa-times"></i></a> </a></li>
                							<li style="padding:7px" v-for="(item,index) in tagFilters" v-if="tagFilters.length > 0"><a href="#" style="background: #d8d5d5;font-size: 12px;padding: 8px;border-radius: 25px;margin-bottom:10px">{{item.title}}  <a href="#" style="margin-left:10px" @click="removeFilterTag(index)"><i class="fas fa-times"></i></a></a></li>
                						</ul>
                					</div>

                					<div class="col-md-12" style="
    padding: 15px;
    background: #e3e1e1;
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 13px;
    font-weight: 600;
    color: #505050;
    margin-bottom: 15px;
    margin-top: 15px;
    text-transform: uppercase;
">
                						Carpetas
                					</div>
                					<div class="col-md-12">
                                    <b  v-if="searchFoldersDocuments.length == 0" style="font-size:12px;">No se han encontrado carpetas.</b>

                						<ul style="margin:0;padding:0;list-style:none">
                							<li style="padding:7px" v-for="(item,index) in searchFoldersDocuments" v-if="searchFoldersDocuments.length > 0"><a href="#" style="background: #d8d5d5;font-size: 12px;padding: 8px;border-radius: 25px;margin-bottom:10px" @click.prevent="selectFolder(item.data.text)">{{item.data.text}}  </a></li> 
                						</ul>
                					</div>




                					<div class="col-md-12" style="
    padding: 15px;
    background: #e3e1e1;
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 13px;
    font-weight: 600;
    color: #505050;
    margin-bottom: 15px;
    margin-top: 15px;
    text-transform: uppercase;
">
                						Etiquetas
                					</div>

                                   
                					<div class="col-md-12">
                                    <b  v-if="searchTags.length == 0" style="font-size:12px;">No se han encontrado etiquetas.</b>
                						<ul style="margin:0;padding:0;list-style:none">
                							<li style="padding:7px" v-for="(item,index) in searchTags" v-if="searchTags.length > 0"><a href="#" style="background: #d8d5d5;font-size: 10px;padding: 8px;border-radius: 25px;margin-bottom:10px;font-weight:500" @click.prevent="selectTag(item.data.title)">{{item.data.title}}  </a></li> 
                						</ul>
                					</div>


                				</div>
                				<div class="col-md-9">
                				  <div class="row" style="border:1px solid #d0cece;border-radius:8px">
                				     <div class="col-md-12" style="
                				     padding: 15px;
    background: #e3e1e1;
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 13px;
    font-weight: 600;
    color: #505050;
    margin-bottom: 15px; 
    text-transform: uppercase;border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    ">Resultados de busqueda</div>
      <div style="height:90vh;overflow:hidden;overflow-y:auto">
       



                				  <div class="col-md-12" style="border-bottom:1px solid #d0cece;" v-for="(item,index) in searchDocuments" v-if="searchDocuments.length > 0"  >
       <div class="row">
       <div class="col-md-10">
       <b style="font-size:14px;cursor:pointer" @click="goToDocument(item._id)">{{item.data.title}}</b>
                				  <p style="font-size:13px;cursor:pointer" @click="goToDocument(item._id)">{{item.data.description}}</p>
                				  </div>
       <div class="col-md-2">
        <i class="fas fa-star" style="color:#EDD612"></i> <i class="fas fa-star" style="color:#EDD612"></i> <i class="fas fa-star" style="color:#EDD612"></i> <i class="fas fa-star" style="color:#EDD612"></i> <i class="fas fa-star" style="color:#EDD612"></i></div>
       </div>
                				  </div>



 


                				  </div>
                				  </div>

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
 
<script>

 export default {
  data() {
    return {
      auth:localStorage.getItem('auth'), 
      endpointSearchWriting: window.ENDPOINT + '/search/writing',
      endpointSearchDocument: window.ENDPOINT + '/search/document',
      endpointSearchTags: window.ENDPOINT + '/search/tags',
 

      searchMode:'document',
      searchInput: {
         target: this.$route.query.search,
      },
      searchDocuments:[],
      searchFolders:[],
      searchTags : [],
      searchFoldersDocuments : [],
      teste:[],
      BestDocuments: [],
      bestWritings: [],

      tagFilters: [],
      foldersFilters : [],
      document : [{ data : {
        title:null
      }}]
    }
  },
    created() {
      console.log('BestDocuments',this.BestDocuments)
    },
    mounted() {  
      this.search()
    }, 
    computed: { 
  }, 
  methods: { 
    removeFilterTag(index) {
        this.tagFilters.splice(index, 1); 
    },
    removeFilterFolder(index) {
        this.foldersFilters.splice(index, 1); 
    },
    selectTag(title) {
     this.tagFilters.push({title : title})
    },
    selectFolder(title) {
     this.foldersFilters.push({title : title})
    },

    getStars(count) {
      if(count <= 10) {
          return 1;
        }

         if(count <= 20) {
          return 2;
        }
         if(count <= 30) {
          return 3;
        }

         if(count <= 40) {
          return 4;
        }
         if(count <= 50) {
          return 5;
        }

         if(count >= 50) {
          return 5;
        }
    },
    displayStars(count) {
      var svg = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" style="fill: #ead723"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>`;
       var stars = this.getStars(count); 
        var e = 1;
        var out = '';
        while (e <= stars) {
          out  = out + svg;
          // statement
          e++;
        } 
        return out; 
    },
    getBestDocuments() {
         this.$Progress.start(); 
         const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                auth:this.auth, 
             })
         }; 
         fetch(window.ENDPOINT + '/comunity/best/documents', requestOptions).then(response => response.json()).then((data) => { 
            this.BestDocuments = data; 
            this.$Progress.finish(); 
         })  
    },

    getbestWritings() {
      this.$Progress.start();
 
      const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                auth:this.auth, 
             })
         }; 
         fetch(window.ENDPOINT + '/comunity/best/writings', requestOptions).then(response => response.json()).then((data) => { 
            this.bestWritings = data;
         
            this.$Progress.finish();
   
         }) 
      
    },

     
    goToDocument(id) { 
   
        this.$router.push({ name: 'view-document', params: { id: id }  }) 
    
    },
 

    gotoFolder(folder) {
       this.$router.push({ name: 'search', query: { folder : folder } }) 
    },

    gotoTag(tag) {
       this.$router.push({ name: 'search', query: { tag : tag } }) 
    },

    gotoSearch() {
       this.$router.push({ name: 'search', query: { search : this.searchInput.target } }) 
    },

     

    changeMode(mode) {
       this.searchMode = mode;
    },

    
   getResults() { 
      return new Promise((resolve, reject) => {
      const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                auth:this.auth, 
                search:this.searchInput.target,
                tags : this.tagFilters,
                folders : this.foldersFilters
             })
         };
          
         fetch( window.ENDPOINT + '/search/results/documents', requestOptions).then(response => response.json()).then((data) => { 
          if(data.empty) {
               this.searchDocuments = [];
                 

          } else {
               this.searchDocuments = data;
                this.searchAllTags().then((data) => { 
              this.searchTags = data;
       }) 

       this.searchAllFoldersDocuments().then((data) => { 
              this.searchFoldersDocuments = data;
       }) 
       

          } 
         }) 
       })
    },  



    searchAllDocuments() {
      return new Promise((resolve, reject) => {
      const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                auth:this.auth, 
                search:this.searchInput.target,
             })
         };
         if(this.searchMode == 'document') {
              var endpoint = this.endpointSearchDocument;
         } else {
              var endpoint = this.endpointSearchWriting;
         }
         fetch(endpoint, requestOptions).then(response => response.json()).then((data) => { 
          if(data.empty) {
            resolve([]); 
          } else {
            resolve(data); 
          } 
         }) 
       })
    },  


    searchAllTags() { 
      return new Promise((resolve, reject) => {
      const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                auth:this.auth, 
                search:this.searchInput.target,
             })
         }; 
         fetch(this.endpointSearchTags, requestOptions).then(response => response.json()).then((data) => { 
          if(data.empty) {
            resolve([]); 
          } else {
            resolve(data); 
          } 
         }) 
       })
    },


    searchAllFoldersDocuments() { 
      return new Promise((resolve, reject) => {
      const requestOptions = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                auth:this.auth, 
                search:this.searchInput.target,
             })
         }; 
          if(this.searchMode == 'document') {
              var endpoint =  window.ENDPOINT + '/search/folders/documents';
         } else {
              var endpoint = this.endpointSearchWriting;
         }

         fetch(endpoint, requestOptions).then(response => response.json()).then((data) => { 
          if(data.empty) {
            resolve([]); 
          } else {
            resolve(data); 
          } 
         }) 
       })
    },


     


    search() {
      //  searchDocuments:[],
      // searchFolders:[],
      // searchTags : [],
       this.$Progress.start();

       this.searchAllDocuments().then((data) => {
           this.searchDocuments = data;

       }) 

       this.searchAllTags().then((data) => { 
              this.searchTags = data;
       }) 

       this.searchAllFoldersDocuments().then((data) => { 
              this.searchFoldersDocuments = data;
       }) 
       

        

       this.$Progress.finish();
       
    }, 
    
    pause() {
       
    },
    hover() {
       
    } 
  }
}
 
</script>

