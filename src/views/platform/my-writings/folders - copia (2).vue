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
                                <div class="col-md-3" style="height:calc(100vh - 70px);">
                                   <div class="col-12" style="font-weight:600;color:black;padding-top:2.5px;padding-bottom:2.5px;border-bottom:1px solid #e6e6e6">
                                     Carpetas
                                   </div> 
                                  <!--  <div class="col-12 text-center" style="padding-top:2.5px;padding-bottom:2.5px;border-bottom:1px solid #E5E5E5">
                                     <a href="#" style="font-size:13px;">Nueva carpeta</a>
                                   </div>  -->
                                   <div class="col-12 text-center" style="padding-top:8.5px;padding-bottom:8.5px;border-bottom:1px solid #E5E5E5">
                                     <input type="text" class="form-control" style=" border-radius: 30px;height: 25px !important;max-height: 25px !important;min-height: 25px !important;border: 1px solid rgb(137 137 137);background: transparent;font-size: 12px;font-weight: 500; " v-model="searchTarget.target" @keyup="search()" placeholder="Buscar carpeta..." />
                                   </div> 
                                   <div class="col-12"  style="padding-top:10px;padding-bottom:10px">
                                    <div class="spinner-border spinner-border-sm" role="status" v-if="loadingFolders">
                                      <span class="sr-only">Loading...</span>
                                    </div>
                                    <ul style="padding:0;margin:0;width:100%;list-style:none" v-if="items.length > 0"> 
                                        <li style="padding:0;margin:0;width:100%;list-style:none" v-for="item in filteredResources" :key="index" @click.prevent="getDocumentsByTag(item.id,item.text)"  >
                                            <a href="#" style="color:black;font-weight:600;">{{item.text}}</a>
                                        </li> 
                                    </ul>
                                   </div>
                                   <div class="col-12 text-center" style="padding-top:8.5px;padding-bottom:8.5px;border-bottom:1px solid #E5E5E5">
 
   
 
<ul style="padding: 0px;list-style: none;width: 100%;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;align-content: flex-start;">
    <li style="width: 100%;display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;align-content: flex-start;margin-bottom:5px"  v-for="(tagSelected, index)   in tagsSelected"  >
         <a href="#" style="font-size: 12px;padding: 5px;background: rgb(234, 234, 234);border-radius: 30px;    display: flex;place-content: flex-start;align-items: center;flex-direction: row;padding-left:10px;padding-right:10px">{{tagSelected.text}} 
           <a href="#" style="margin-left:10px" @click="removeFilterTag(index,tagSelected.text)"><i class="fas fa-times"></i></a>
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
                                   

                                  
                                    <div class="col-12" style="padding:15px;border-bottom:1px solid  #e6e6e6;cursor:pointer;position:relative" v-for="(document,index) in fixerEditMode" :key="index" @click="getDocument(document._id)" v-bind:class="{ activeDocument: (document._id === activeDocumentId) }"  >
                                        <div class="col-12" style="padding:0" v-if="document._ext.edit_title == false">
                                            <b style="color:black;font-size:15px">{{document.data.title}}</b> 
                                             <a   href="#"  style="margin-left:10px;"> <img src="@/assets/boligrafo.png" style="width:15px;height:15px" @click.prevent="document._ext.edit_title = true"/></a>
                                        </div>

                                        <form  @submit.prevent="saveEditMode(document._id,index)" class="col-12 " style="padding:0;display:flex;margin-bottom:10px" v-if="document._ext.edit_title" >
                                            <input type="text" class="form-control" v-model="document.data.title"  style="font-size:13px;border-radius:30px;height:30px;min-height:30px;max-height:30px;background:white;font-weight:700" />
                                            <button type="submit" class="btn btn-primary" style="width:40px;    min-width: 40px;font-size:12px;padding:0;">
                                                 <img src="@/assets/check.svg" style="width:10px;height:10px;filter:invert();" /> 
                                            </button> 
                                            <button type="button"  @click.prevent="document._ext.edit_title = false" class="btn btn-primary" style="width:40px;    min-width: 40px;font-size:12px;padding:0;border-color:transparent;background:#C2C2C2;color:black">
                                                 <img src="@/assets/cross.svg" style="width:10px;height:10px" /> 
                                            </button> 
                                        </form>


                                        <p style="color:#525252;font-size:12px" v-if="!document._ext.edit_description"  >{{document.data.description}} <a   href="#"  style="margin-left:10px;"> <img src="@/assets/boligrafo.png" style="width:15px;height:15px" @click.prevent="document._ext.edit_description = true"/></a></p>


                                        <form @submit.prevent="saveEditMode(document._id,index)" class="col-12 " style="    padding: 0px;display: flex;flex-direction: row;flex-wrap: wrap;margin-bottom:10px" v-if="document._ext.edit_description" >
                                            <textarea class="form-control" v-model="document.data.description"  style="font-size:12px;border-radius:8px;height:fit-content;min-height:fit-content;max-height:fit-content;background:white;margin-bottom:5px" ></textarea>
                                            <button type="submit" class="btn btn-primary" style="width:40px;    min-width: 40px;font-size:12px;padding:0;">
                                                 <img src="@/assets/check.svg" style="width:10px;height:10px;filter:invert();" /> 
                                            </button> 
                                            <button type="button"  @click.prevent="document._ext.edit_description = false" class="btn btn-primary" style="width:40px;    min-width: 40px;font-size:12px;padding:0;border-color:transparent;background:#C2C2C2;color:black">
                                                 <img src="@/assets/cross.svg" style="width:10px;height:10px" /> 
                                            </button> 
                                        </form>





                                        <div style="position:absolute:top:0:right:0;height:100%">
                                            <img src="@/assets/cerrar-con-llave.svg" style="height:20px;width:20px;" v-if="document.data.share == 0" />
                                            <img src="@/assets/candado-abierto(2).png" style="height:20px;width:20px;" v-if="document.data.share == 1 " /> 

                                            <img src="@/assets/automatizado.svg" style="height:20px;width:20px;" v-if="document.data.complete == 1" />


                                            <span v-if="document.data.complete == 0"> 
                                               <img src="@/assets/a-automatizar.svg" style="height:20px;width:20px;" v-if="document.data.form_complete" /> 
                                            </span>
                                        </div>
                                    </div> 
                                    

                                     
                                </div>
                                <div class="col-md-6" style="border-left:1px solid  #e6e6e6;border-right:1px solid  #e6e6e6;padding:0;height:calc(100vh - 70px);overflow:hidden;overflow-y:auto;position:relative"> 
                                    <div class="spinner-border spinner-border-sm" role="status" v-if="loadingDocument" style="position:absolute">
                                      <span class="sr-only">Loading...</span>
                                    </div>
                                    <div class="col-12" v-if="document.data.title" style="padding:10px">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <b>{{document.data.title}}</b>
                                            </div>
                                            <div class="col-md-4 text-right">
                                              <div class="dropdown"  style="margin:5px;display:inline">
  <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
   <img src="@/assets/descargar.svg" style="width:14px;height:14px;margin-right:5px" />
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#" @click.prevent="exportWord()">Documento Word</a>
    <a class="dropdown-item" href="#" @click.prevent="exportPDF()">Documento PDF</a> 
  </div>
</div>
                                              
                                                <a href="#" style="margin:5px"><img src="@/assets/cuota.svg" style="width:14px;height:14px;margin-right:5px" /></a>
                                            </div>
                                        </div>
                                    </div>

                                     <div id="editparent">
          <div id='editControls' style='text-align:left; padding:5px;'>
             <div class='btn-group'>
            <select class='btn'  v-model="temp.editFont" @change="actionTeste($event,'font')">
                 <option value="Arial">Arial</option>
                 <option value="Calibri">Calibri</option>
                 <option value="Comic Sans MS">Comic Sans MS</option>
            </select>
            </div> 
            <div class='btn-group'>
              <a class='btn' @click="actionTeste($event,'undo')"  href='#'  ><span class="material-icons">undo</span></a>
              <a class='btn' @click="actionTeste($event,'redo')"  href='#'  ><span class="material-icons">redo</span></a>
            </div>
            <div class='btn-group'>
              <a class='btn' @click="actionTeste($event,'bold')"  href='#'  ><span class="material-icons">format_bold</span></a>
              <a class='btn' @click="actionTeste($event,'italic')"  href='#'  ><span class="material-icons">format_italic</span></a>
              <a class='btn' @click="actionTeste($event,'underline')"  href='#'  ><span class="material-icons">format_underline</span></a>
              <a class='btn' @click="actionTeste($event,'strikeThrough')"  href='#'  ><span class="material-icons">strikethrough_s</span></a>
            </div>
            <div class='btn-group'>
              <a class='btn' @click="actionTeste($event,'justifyLeft')" href='#'><span class="material-icons">format_align_left</span></a>
              <a class='btn' @click="actionTeste($event,'justifyCenter')" href='#'><span class="material-icons">format_align_center</span></a>
              <a class='btn' @click="actionTeste($event,'justifyRight')" href='#'><span class="material-icons">format_align_right</span></a>
              <a class='btn' @click="actionTeste($event,'justifyFull')" href='#'><i class='icon-align-justify'></i></a>
            </div>
            <div class='btn-group'>
              <a class='btn' @click="actionTeste($event,'indent')" href='#'><span class="material-icons">format_indent_increase</span></a>
              <a class='btn' @click="actionTeste($event,'outdent')" href='#'><span class="material-icons">format_indent_decrease</span></a>
            </div>
            <div class='btn-group'>
              <a class='btn' @click="actionTeste($event,'insertUnorderedList')" href='#'><span class="material-icons">format_list_bulleted</span></a>
              <a class='btn' @click="actionTeste($event,'insertOrderedList')" href='#'><span class="material-icons">format_list_numbered</span></a>
            </div>
            <div class='btn-group'>
              <a class='btn' data-role='h1' href='#'>h<sup>1</sup></a>
              <a class='btn' data-role='h2' href='#'>h<sup>2</sup></a>
              <a class='btn' data-role='p' href='#'>p</a>
            </div>
            <div class='btn-group'>
              <a class='btn' data-role='subscript' href='#'><i class='icon-subscript'></i></a>
              <a class='btn' data-role='superscript' href='#'><i class='icon-superscript'></i></a>
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






 
<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered  modal-xl" role="document">
    <div class="modal-content">
       
      <div class="modal-body">
        

<div class="row justify-content-center">
          

          <div class="col-12 text-left" style="margin-bottom:20px">
            <b>{{document.data.title}}</b>
            <p>{{document.data.description}}</p>
           
            <p style="padding:0;margin:0;margin-top:8px;font-size:14px;">Para crear el documento, completa el siguiente cuestionario</p>
          </div>

        


 

          <div class="col-4" style="position:relative;position:sticky;top:0;">
            <div class="col-12" style="border-radius:8px;background:#fbf4fe;height:400px;border:1px solid #E2E2E2;overflow:hidden;overflow-y:auto;">

               <div class="form-group" v-for="(field,index) in documentModal.data.fields" style="text-align: left;padding: 10px;">
                <label style="font-size: 13px;color: black;font-weight: 600;">{{field.replace}}</label>
                <input type="text" class="form-control" v-model="field.user.input" style="height: 30px !important;min-height: 30px !important;border: none;background: transparent;border-bottom: 2px solid #8d8d8d;font-size: 13px;color: black;font-weight: 500;" @keyup="previewText(index)" />
              </div>

         <div class="col-12 text-center">
             <button type="submit" class="btn btn-primary" style="width:120px;position:relative" @click="createDocument()" >Crear</button>
         </div>

            </div>
          </div>
          <div class="col-8">
             <div class="col-12" style="border-radius:8px;background:#fef8f8;padding:0;border-radius:8px;border:1px solid #E2E2E2">
              <div class="col-12" style="padding:10px;background:#2b44ff;border-top-left-radius:8px;border-top-right-radius:8px;text-align:center;font-weight:600;color:white;">
                Previsualizacion del documento
              </div>
              <div class="col-12" style="height:400px;padding:20px;overflow:hidden;overflow-y:auto;" v-html="documentModal.data.content"> 
              </div>
            </div>
          </div>
          


 
         </div>




      </div>
       
    </div>
  </div>
</div>




</template>

<style>
    @import   '@/assets/platform.css';
    .activeDocument { 
    padding: 15px;
    border-bottom: 1px solid rgb(230, 230, 230);
    border-left: 3px solid #2b44ff;
    transition: all 250ms;

        padding: 15px;
    border-bottom: 1px solid rgb(230, 230, 230);
    border-left: transparent !important;
    transition: all 250ms;
    background: #DBDBDB !important;
    opacity: 1 !important;
    
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
            auth: localStorage.getItem('auth'),
            endpoint: window.ENDPOINT + '/writings/get/folders',
            endpointDocuments: window.ENDPOINT + '/writings/folders/documents',
            endpointDocument: window.ENDPOINT + '/writings/get/document',
            endpointGetAll: window.ENDPOINT + '/writings/get/documents',

            endpointTextPreview: window.ENDPOINT + '/writings/fields/preview',

            items: [],
            documents: [],
            loadingFolders: true,
            loadingDocument: false,
            tagsSelected: [],
            contentDocument: null,
            activeDocumentId: null,
            documentModal: {
            data : {
                title:null,
                description : null,
                complete : 0,
                fields: [],
                content:null,
             }
            },

             document: {
             data : {
                title:null,
                description : null,
                complete : 0,
               }
            },
            searchTarget: {target:null},
            editField : {
                index : null,
                id: null,
                enabled : false,
            },
            temp : {
                 editFont : "Arial",
            }
        }
    },
    created() {},
    mounted() {
        this.loadAllDocuments();
        this.loadTags();

         if(this.$route.query.id) { 
            this.activeDocumentId = this.$route.query.id; 
            // this.getDocument(this.$route.query.id);
         }
    },
    computed: {
        fixerEditMode() {
           for (var i = this.documents.length - 1; i >= 0; i--) {
               this.documents[i]._ext = {edit_title : false , edit_description : false}

           }
           return this.documents;
        },
        filteredResources() {
            if (this.searchTarget.target) {
                return this.items.filter((item) => {
                    console.log(item.text.startsWith(this.searchTarget.target))
                    return item.text.startsWith(this.searchTarget.target);
                })
            } else {
                return this.items;
            }
        }
    },
    methods: {
        saveEditMode(id,index) {
             
              const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    id: id,
                    data: this.documents[index].data
                })
            };
            fetch(window.ENDPOINT + '/writings/edit', requestOptions).then(response => response.json()).then((data) => {
               this.documents[index]._ext.edit_title = false;
               this.documents[index]._ext.edit_description = false;
               this.$Progress.finish(); 
               this.$toast.success("Documento editado...", {
                    position: "bottom-right"
                })
               if(this.document._id == id) { 
                 this.document.data.title = this.documents[index].data.title;
                 this.document.data.description = this.documents[index].data.description;
               }
            });


         },

          actionTeste(event,role) {
              if(role == 'font') {
                 
                document.execCommand("fontName", false, this.temp.editFont);
                return;
            }
        switch(role) {
      case 'h1':
      case 'h2':
      case 'p':
        document.execCommand('formatBlock', false, role);
        break;
      default:
        document.execCommand(role, false, null);
        break;
    }
    },
           download(file, text , type) {
              
                //creating an invisible element
                var element = document.createElement('a');
                element.setAttribute('href', file);
                element.setAttribute('download', text);
                 element.setAttribute('target', "_blank");
              
                // Above code is equivalent to
                // <a href="path of file" download="file name">
              
                document.body.appendChild(element);
              
                //onClick property
                element.click();
              
                document.body.removeChild(element);
            },
        exportPDF() {
   this.$Progress.start();
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    id: this.activeDocumentId
                })
            };
            fetch(window.ENDPOINT + '/writings/export/pdf', requestOptions).then(response => response.json()).then((data) => {
                this.$toast.show("Descargando...", {
                    position: "bottom-right"
                })

                    
                this.download(window.ENDPOINTEXPORTS + '/' + data.name , data.name , 'data:application/pdf');

                  this.$Progress.finish();
                 console.log(data)
            });

        },
        exportWord() {
             this.$Progress.start();
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    id: this.activeDocumentId
                })
            };
            fetch(window.ENDPOINT + '/writings/export/word', requestOptions).then(response => response.json()).then((data) => {
                this.$toast.show("Descargando...", {
                    position: "bottom-right"
                })

                 this.download(window.ENDPOINTEXPORTS + '/' + data.name , data.name , 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document');
 this.$Progress.finish();
                 console.log(data)
            });


 
        }, 
        createDocument() {
            this.$Progress.start();
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    id: this.documentModal._id,
                    doc_original: this.documentModal._id,
                    fields: this.documentModal.data.fields,
                    content:  this.documentModal.data.content
                })
            };
            fetch(window.ENDPOINT + '/writings/document/create/writing', requestOptions).then(response => response.json()).then((data) => {

                if(this.tagsSelected.length > 0) {

                    const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    tags: this.tagsSelected, 
                })
            };
            fetch(this.endpointDocuments, requestOptions).then(response => response.json()).then((data) => {
                console.log(data)
                if (data.error == true) {

                } else {
                    this.documents = data;
                    this.loadingDocuments = false;
 
                    
                }
            })


                } else {
                    this.loadAllDocuments();
                }
  
              

             
                    this.$Progress.finish();
                this.$toast.success("Documento creado correctamente.", {
                    position: "bottom-right"
                })
                  $('#exampleModalLong').modal('hide');
                 
            })
        },
        previewText(index = null) {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    id: this.documentModal._id,
                    fields: this.documentModal.data.fields
                })
            };
            fetch(this.endpointTextPreview, requestOptions).then(response => response.json()).then((data) => { 
                this.documentModal.data.content = data.content;
            })
        },
        openmodalcomplete() {
            $('#exampleModalLong').modal('show');
            this.previewText();
        },
        // getPrice(prices,currency) {
        //    for (var i = prices.length - 1; i >= 0; i--) {
        //        if(prices[i].currency === currency) {
        //         return prices[i].price
        //        }
        //    }
        // },
        loadTags() {
              this.$Progress.start();
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth
                })
            };
            fetch(this.endpoint, requestOptions).then(response => response.json()).then((data) => {
                if (data.error == true) {} else {
                    this.items = data;
                    this.loadingFolders = false;
                    this.$Progress.finish();
                }
            })
        },
        loadAllDocuments() {
              this.$Progress.start();
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth
                })
            };
            fetch(this.endpointGetAll, requestOptions).then(response => response.json()).then((data) => {
                this.documents = data;
                this.$Progress.finish();
            })
        },
        search() { 
        },
        removeFilterTag(index, name) {
               this.$Progress.start();

            delete this.tagsSelected[index];
            this.tagsSelected = this.tagsSelected.filter(function(a) {
                return typeof a !== 'undefined';
            })

 

            if(this.tagsSelected.length == 0) {
                this.loadAllDocuments(); 
                return;
            }


            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    tags: this.tagsSelected, 
                })
            };
            fetch(this.endpointDocuments, requestOptions).then(response => response.json()).then((data) => {
                if (data.error == true) {} else {
                    this.documents = data; 
                    this.$Progress.finish();
                }
            })
        },
        getDocument(id) {
            this.$Progress.start();
            this.activeDocumentId = id;
            this.loadingDocument = true;
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    id: id 
                })
            };
            fetch(this.endpointDocument, requestOptions).then(response => response.json()).then((data) => {
                if (data.error == true) {} else {
                    
                    if(data.data.complete == 0) {
                        if(data.data.form_complete) {
                            this.documentModal = data;
                            this.contentDocument = null;
                            this.loadingDocument = false;
                            this.$Progress.finish();

                            this.openmodalcomplete();
                            return;
                        }
                    }


                    this.document = data;
                    this.contentDocument = data.data.content;
                    this.loadingDocument = false;
                    this.$Progress.finish();
                }
            })
        },
        getDocumentsByTag(idtag, tag) {
         
         console.log('getDocumentsByTag',idtag,tag)
              this.$Progress.start();
            this.tagsSelected.push({
                'text': tag,
                'id': idtag
            });
            this.loadingDocuments = true;
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    tags: this.tagsSelected, 
                })
            };

               console.log('getDocumentsByTag',this.tagsSelected)
            fetch(this.endpointDocuments, requestOptions).then(response => response.json()).then((data) => {
                console.log(data)
                if (data.error == true) {} else {
                    this.documents = data;
                    this.loadingDocuments = false;
                      this.$Progress.finish();
                }
            })
        },
        pause() {},
        hover() {}
    }
}
 
</script>
