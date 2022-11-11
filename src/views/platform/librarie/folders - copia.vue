<template>
<navBar /> 
<Transition name="fade">
    <main>
        <div class="container-fluid">
            <div class="row">
               <div class="col-md-2" style="height:calc(100vh - 70px);overflow:hidden;overflow-y:auto;padding:0;"> 
                 <columnLeft />
                </div> 
                <div class="col-md-10" style="height:calc(100vh - 70px);border:1px solid #E2E2E2;position:relative">   
                        <!-- ======================================= -->

  






                            <div class="row">
                                <div class="col-md-3" style="position:relative;overflow:hidden;overflow-y:auto;height:calc(100vh - 70px);" >

 



                                   <div class="col-12" style="font-weight:600;color:black;padding-top:2.5px;padding-bottom:2.5px;border-bottom:1px solid #e6e6e6">
                                     Carpetas
                                   </div> 
                                  <!--  <div class="col-12 text-center" style="padding-top:2.5px;padding-bottom:2.5px;border-bottom:1px solid #E5E5E5">
                                     <a href="#" style="font-size:13px;">Nueva carpeta</a>
                                   </div>  -->
                                   <div class="col-12 text-center" style="padding-top:8.5px;padding-bottom:8.5px;border-bottom:1px solid #E5E5E5">
                                     <input type="text" class="form-control type-input-3"  v-model="searchTarget.target" @keyup="search()" placeholder="Buscar..." />
                                   </div> 
                                   <div class="col-12"  style="padding-top:10px;padding-bottom:10px">
                                   
                               
       
      

      <a href="#" style="font-size:13pX;font-weight:600;" @click.prevent="openCreateFolderRootModal()"> <img src="@/assets/admin-add.png" style="width:20px;" /> Nueva carpeta raiz</a>

      <hr />


       <a href="#" style="font-size:13pX;font-weight:600;" @click.prevent="getAllDocuments()">  Todos los documentos</a>

      <hr />


<Tree
      id="my-tree-id"
      ref="my-tree"
      :custom-options="myCustomOptions"
      :custom-styles="myCustomStyles"
      :nodes="treeDisplayData"
    ></Tree>


    <span style="font-size:12px;font-weight:500;" v-if="treeDisplayData.length == 0">No se encontraron carpetas.</span>
 

 
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

                                <div class="col-md-3" style="border-left:1px solid  #e6e6e6;border-right:1px solid  #e6e6e6;padding:0;height:calc(100vh - 100px);overflow:hidden;overflow-y:auto;position:relative"> 
                                    <!-- <div class="col-12" style="background:#e0dfdf;padding:15px;">
                                        <b style="color:#858484;font-size:16px">Lorem ipsum dolor sit amet</b>
                                        <p style="color:#858484;font-size:13px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua...</p>
                                    </div>
                                     -->
                                  
                                    <div class="spinner-border spinner-border-sm" role="status" v-if="loadingDocuments" style="position:absolute">
                                      <span class="sr-only">Loading...</span>
                                    </div>
                                   

                                   
                                    <div class="col-12 item-wrapper__item" style="padding:15px;border-bottom:1px solid  #e6e6e6;cursor:pointer" v-for="(document,index) in fixerEditMode" :key="index" @click="getDocument(document._id)" v-bind:class="{ activeDocument: (document._id === activeDocumentId) }"   @contextmenu.prevent="openContextmenu($event, document,index)" v-if="fixerEditMode.length  > 0">


                                        <div class="col-12" style="padding:0" v-if="document._ext.edit_title == false">
                                            <span class="edit-mode">{{document.data.title}}  <img src="@/assets/boligrafo.png"  @click.prevent="document._ext.edit_title = true"/> </span>   
                                        </div>

                                        <form  @submit.prevent="saveEditMode(document._id,index)" class="col-12 " style="padding:0;display:flex;margin-bottom:10px" v-if="document._ext.edit_title" >
                                            <input type="text" class="form-control col-12" v-model="document.data.title"  style="font-size:13px;border-radius:30px;height:30px;min-height:30px;max-height:30px;background:white;font-weight:700" />
                                            <button type="submit" hidden="true" ></button> 
                                        </form>


                                        <p  class="edit-mode" style="color:#525252;font-size:12px" v-if="!document._ext.edit_description"  >{{document.data.description}}  <img src="@/assets/boligrafo.png"  @click.prevent="document._ext.edit_description = true"/>
                                        </p>


                                        <form @submit.prevent="saveEditMode(document._id,index)" class="col-12 " style="    padding: 0px;display: flex;flex-direction: row;flex-wrap: wrap;margin-bottom:10px" v-if="document._ext.edit_description" >
                                            <input type="text" class="form-control" v-model="document.data.description"  style="font-size:12px;border-radius:8px;height:fit-content;min-height:fit-content;max-height:fit-content;background:white;margin-bottom:5px" /> 
                                            <button type="submit" hidden="true" ></button> 
                                        </form>

                                        <!-- <b style="color:black;font-size:15px">{{document.data.title}}</b>
                                        <p style="color:#525252;font-size:12px">{{document.data.description}}</p> -->

                                        <div style="position:absolute:top:0:right:0;height:100%">
                                            <img src="@/assets/cerrar-con-llave.svg" style="height:20px;width:20px;" v-if="document.data.share == 0" />
                                            <img src="@/assets/candado-abierto(2).png" style="height:20px;width:20px;" v-if="document.data.share == 1" />

                                            <img src="@/assets/acortar.svg" style="height:20px;width:20px;" v-if="document.data.attachment.length > 0" /> 
                                             
                                        </div>
                                    </div> 
                                    

                                     
                                </div>
                                <div class="col-md-6 scroll-size-medium" style="border-left:1px solid  #e6e6e6;border-right:1px solid  #e6e6e6;padding:0;height:calc(100vh - 100px);overflow:hidden;overflow-y:auto;position:relative"> 
                                    <div class="spinner-border spinner-border-sm" role="status" v-if="loadingDocument" style="position:absolute">
                                      <span class="sr-only">Loading...</span>
                                    </div>
                                    <div class="col-12" v-if="document" style="padding:10px">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <b>{{document.data.title}}</b>
                                            </div>
                                            <div class="col-md-4 text-right"> 
                                               <buttonShare  v-bind:id="document.data.id_share_comuniy"  v-if="document.data.share == 1 "  />
                                            </div>
                                        </div>
                                    </div>

 
                                      <div id="editor2"   style="width:100%;padding:20px" v-html="contentDocument"> 
                                      </div>
                                </div>
                            </div>
                         

<div class="box" @contextmenu="onContextMenu($event)" style="position:fixed;z-index:1000;background:#fdfafa;width:auto;height:auto;padding:10px; 
    border: 1px solid #e1e1e1; border:1px solid #E2E2E2 !important;
    background: #f3f1f1; " :style="{ top: selected.clientY   ,left : selected.clientX  }">
  <ul style="padding:0;margin:0;list-style:none">
   <!--  <li style="padding:0;margin:0;list-style:none;padding-top:6px;padding-bottom:6px; border-bottom: 1px solid rgb(225 225 225 / 48%)">
        <a href="#" style="font-size:11px;font-weight:600;color:black;" @click="modalRename = true;">Cambiar nombre</a>
    </li> -->
    <li style="padding:0;margin:0;list-style:none;padding-top:6px;padding-bottom:6px; border-bottom: 1px solid rgb(225 225 225 / 48%)">
        <a href="#" style="font-size:11px;font-weight:600;color:black;" @click="openModalMoveDocument()">Mover</a>
    </li>
    <li style="padding:0;margin:0;list-style:none;padding-top:6px;padding-bottom:6px;  ">
        <a href="#" style="font-size:11px;font-weight:600;color:black;" @click="deleteDocument()">Eliminar</a>
    </li>
</ul>
</div>
<!-- Selected row: {{ !Object.keys(selected.row).length ? 'N/A' : selected.row }} -->
                            <!-- ======================================= -->     
                 </div>  
            </div>
        </div> 
    </main> 
</Transition>



























<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <form class="modal-content" @submit.prevent="createFolderRoot()" style="border-radius:10px;border:none">
      <div class="modal-header text-center">
             <h5 class="modal-title">Nueva carpeta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control type-input-2" v-model="nameNewFolder.title" required="true" />
      </div>
      <div class="modal-footer" style="border:none"> 
        <button type="submit" class="btn btn-primary" style="font-size:15px">Crear carpeta</button>
      </div>
    </form>
  </div>
</div>





<!-- Modal -->
<div class="modal fade" id="staticBackdrop2" data-backdrop="static" data-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <form class="modal-content" @submit.prevent="createFolder()" style="border-radius:10px;border:none">
      <div class="modal-header text-center">
             <h5 class="modal-title" >Nueva carpeta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control type-input-2" v-model="nameNewFolder.title" required="true" />
      </div>
      <div class="modal-footer" style="border:none"> 
        <button type="submit" class="btn btn-primary" style="font-size:15px">Guardar</button>
      </div>
    </form>
  </div>
</div>











<!-- Modal -->
<div class="modal fade" id="moveDocumentTofolder" data-backdrop="static" data-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <form class="modal-content" @submit.prevent="selectPathMoveSave()" style="border-radius:10px;border:none">
      <div class="modal-header text-center">
             <h5 class="modal-title">Asignar carpeta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
   <Tree
      id="my-tree-id"
      ref="my-tre-2"
      :custom-options="myCustomOptions2"
      :custom-styles="myCustomStyles2"
      :nodes="treeDisplayData"
    ></Tree>


<hr />
<ul style="padding: 0px;list-style: none;width: 100%;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;align-content: flex-start;">
    <li style="width: 100%;display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;align-content: flex-start;margin-bottom:5px"  v-for="(item, index)   in pathMoveSelected"  >
         <a href="#" style="font-size: 12px;padding: 5px;background: rgb(234, 234, 234);border-radius: 30px;    display: flex;place-content: flex-start;align-items: center;flex-direction: row;padding-left:10px;padding-right:10px">{{item.text}} 
           <a href="#" style="margin-left:10px" @click="pathMoveSelectedRemove(index,item.id)"><i class="fas fa-times"></i></a>
          </a>
</li>
</ul>
 
      </div>
      <div class="modal-footer" style="border:none"> 
        <button type="submit" class="btn btn-primary" style="font-size:15px">Guardar</button>
      </div>
    </form>
  </div>
</div>
















<!-- Modal -->
<div class="modal fade" id="staticBackdrop4" data-backdrop="static" data-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <form class="modal-content" @submit.prevent="modalDeleteFolder()" style="border-radius:10px;border:none">
      <div class="modal-header text-center">
             <h5 class="modal-title">Eliminar carpeta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-danger">
      Esta accion no se puede deshacer
      </div>
      <div class="modal-footer" style="border:none"> 
        <button type="submit" class="btn btn-primary" style="font-size:15px">Eliminar</button>
      </div>
    </form>
  </div>
</div>







</template>

<style>

    @import   '@/assets/platform.css';
  
.activeFolder {
   color: #2b44ff !important;
    transition: all 250ms;
}

#column_left {
    background-color: #515151;
}

.nav-list li a {
    text-decoration: none;
    display: block;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #515151 !important;
    color: #9d9d9d;
}

.nav-list > li > a {
    color: #C4C4C4;
    font-size: 14px;
    padding-left: 13px !important;
    border-bottom: 1px solid #585858;
}

.nav-list > li > a:hover {
    background-color: #444444;
}
.folder-menu {
    padding:0;margin:0;width:100%;list-style:none
}
.folder-menu  li {
padding:0;margin:0;width:100%;list-style:none
}
.folder-menu li a {
    color:black;font-weight:600;font-size:12px;
}
.folder-menu li:hover > .icon-add{
    opacity: 1;
}

.folder-menu li .icon-add {
    opacity: 0;
    float: right;
    cursor: pointer;
}

.folder-menu-child {
       padding:0;margin:0;width:100%;list-style:none;padding-left:10px;
     }

     .folder-menu-child li {
      padding:0;margin:0;width:100%;list-style:none
     }

     .folder-menu-child li a{
      color:black;font-weight:600;font-size:12px;
     }

     .folder-menu-child li:hover > .icon-add{
    opacity: 1;
}

.folder-menu-child li   .icon-add {
    opacity: 0;
    float: right;
    cursor: pointer;
}

.folder_icon_active , .folder_icon {
    display: none !important;
}

input[type=checkbox], input[type=radio] {
      display: none !important;
}

.expanded_icon {
    transform: rotate(0deg);
    transition: all .2s ease;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: -2px 0 4px 8px;
    border-color: transparent transparent transparent #555;
}

 
.button-move-tree {
    background-image: url(/src/assets/boton-agregar.png);
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    display: block;
    margin-left: 5px;
}
.add_icon {
    background-image: url(/src/assets/boton-agregar.png);
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    display: block;
    margin-left: 5px;
}
.add_icon::before {
    display: none !important;
    content: '';
}

.row_data:hover {
    color:  #0C00FF !important;
}
.edit-mode {
  color:black;font-size:15px
}
.edit-mode img {
  visibility: collapse;
  width:15px;height:15px
}

.edit-mode:hover img {
  visibility: visible;
}


 

 .button-add-tree {
    background-image: url('/src/assets/add(1).png');
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    display: block;
    margin-left: 5px;
}

 .button-delete-tree {
    background-image: url(/src/assets/trash.png);
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    display: block;
    margin-left: 5px;
}


.button-move-tree {
    background-image: url(/src/assets/angle-small-right.png);
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    display: block;
    margin-left: 5px;
}

</style>

<script setup="">
import columnLeft from '@/components/platform/left.vue';
import navBar from '@/components/platform/navbar.vue'; 
import Tree from 'vuejs-tree'
import buttonShare from '@/components/platform/share-button-document-private.vue';

// import VueProgressBar from 'vue-progressbar'
</script>
 

 <script>
export default {
    data() {
        return {
            auth: localStorage.getItem('auth'),
            endpoint: window.ENDPOINT + '/library/get/folders',
            endpointDocumentsAll: window.ENDPOINT + '/library/get/documents',
            endpointDocuments: window.ENDPOINT + '/library/get/folders/documents',
            endpointDocument: window.ENDPOINT + '/library/get/document',
            endpointGetAll: 'http://api.webu.lt/libraries/folders',
            endpointGetFolder: 'http://api.webu.lt/libraries/folders/parent',
            endpointSaveFolders: window.ENDPOINT + '/library/save/folders',
            endpointMoveSave: window.ENDPOINT + '/library/save/folders/document',
            endpointDeleteDocument: window.ENDPOINT + '/library/delete/documents',
            folders: [],
            documents: [],
            loadingFolders: true,
            loadingDocument: false,
            tagsSelected: [],
            contentDocument: null,
            activeDocumentId: null,
            document: {
                data: {
                    title: null,
                    description: null,
                }
            },
            searchTarget: {
                target: null,
            },
            createTitle: null,
            createId: 0,
            inputCreate: null,
            nameNewFolder: {
                title: null,
            },
            nameEditFolder: {
                title: null,
            },
            modalMoveDocument: false,
            modalRename: false,
            modalCreate: false,
            modalCreateTouchClose: false,
            loadingDocuments: true,
            activeFolderId: 0,
            showContextMenu: false,
            selected: {
                row: {},
                action: "",
                clientX: null,
                clientY: null
            },
            selectedIdDocument: null,
            selectedIndexDocument: null,
            treeDisplayData: [],
            pathMoveSelected: [],
            lastnodeId: null,
            temp: {
                editFont: "Arial",
            }
        }
    },
    created() {
        document.addEventListener("click", () => {
            this.showContextMenu = false;
            this.selected.row = {};
            this.selected.clientX = null;
            this.selected.clientY = null;
            // setTimeout(() => {
            //    if(this.modalCreateTouchClose) {
            //    this.modalCreate = false;
            //    this.modalCreateTouchClose = false;
            // }
            // },500)
        });
    },
    mounted() {
        this.getAllDocuments();
        this.loadFolders();
        if (this.$route.query.id) {
            this.activeDocumentId = this.$route.query.id;
            this.getDocument(this.activeDocumentId);
        }
    },
    computed: {
        fixerEditMode() {
            for (var i = this.documents.length - 1; i >= 0; i--) {
                this.documents[i]._ext = {
                    edit_title: false,
                    edit_description: false
                }
            }
            return this.documents;
        },
        filteredResources() {
            if (this.searchTarget.target) {
                return this.folders.filter((item) => {
                    console.log(item.title.startsWith(this.searchTarget.target))
                    return item.title.startsWith(this.searchTarget.target);
                })
            } else {
                console.log(this.folders)
                return this.folders;
            }
        },
        myCustomStyles() {
            return {
                tree: {
                    style: {
                        height: "auto",
                        maxHeight: "300px",
                        overflowY: "visible",
                        display: "inline-block",
                        textAlign: "left",
                    },
                },
                deleteNode: {
                    class: 'button-delete-tree',
                    style: {
                        color: '#EE5F5B'
                    }
                },
                row: {
                    style: {
                        width: "500px",
                        cursor: "pointer",
                    },
                    child: {
                        class: "",
                        style: {
                            height: "35px",
                        },
                        active: {
                            style: {
                                height: "35px",
                            },
                        },
                    },
                },
                rowIndent: {
                    paddingLeft: "20px",
                },
                text: {
                    // class: "" // uncomment this line to overwrite the 'capitalize' class, or add a custom class
                    style: {
                        "font-weight": "600",
                        "font-size": "12px",
                    },
                    active: {
                        style: {
                            "font-weight": "bold",
                            "color": "#1200FF",
                            "font-size": "12px",
                        },
                    },
                },
            };
        },
        myCustomOptions() {
            return {
                treeEvents: {
                    expanded: {
                        state: true,
                        fn: this.getDocumentsFromFolder,
                    },
                    collapsed: {
                        state: true,
                        fn: this.getDocumentsFromFolder,
                    },
                    selected: {
                        state: false,
                        fn: this.mySelectedFunction,
                    },
                    checked: {
                        state: false,
                        fn: this.myCheckedFunction,
                    },
                },
                events: {
                    expanded: {
                        state: true,
                    },
                    selected: {
                        state: true,
                    },
                    checked: {
                        state: true,
                    },
                    editableName: {
                        state: true,
                        calledEvent: "expanded",
                    },
                },
                addNode: {
                    state: true,
                    class: 'add_icon',
                    style: {
                        color: 'red'
                    },
                    fn: this.addNodeFunction,
                    appearOnHover: true,
                },
                editNode: {
                    state: false, //mostrar opc
                    fn: null,
                    appearOnHover: true
                },
                deleteNode: {
                    state: true, //mostrar opc
                    fn: this.deleteFolder,
                    appearOnHover: true,
                },
                showTags: true,
            };
        },
        myCustomStyles2() {
            return {
                tree: {
                    style: {
                        height: "auto",
                        maxHeight: "300px",
                        overflowY: "visible",
                        display: "inline-block",
                        textAlign: "left",
                    },
                },
                deleteNode: {
                    class: 'button-move-tree',
                    style: {
                        color: '#EE5F5B'
                    }
                },
                row: {
                    style: {
                        width: "500px",
                        cursor: "pointer",
                    },
                    child: {
                        class: "",
                        style: {
                            height: "35px",
                        },
                        active: {
                            style: {
                                height: "35px",
                            },
                        },
                    },
                },
                rowIndent: {
                    paddingLeft: "20px",
                },
                text: {
                    // class: "" // uncomment this line to overwrite the 'capitalize' class, or add a custom class
                    style: {
                        "font-weight": "600",
                        "font-size": "12px",
                    },
                    active: {
                        style: {
                            "font-weight": "bold",
                            "color": "#1200FF",
                            "font-size": "12px",
                        },
                    },
                },
            };
        },
        myCustomOptions2() {
            return {
                treeEvents: {
                    expanded: {
                        state: true,
                        fn: this.mySelectedFunction,
                    },
                    collapsed: {
                        state: true,
                        fn: this.mySelectedFunction,
                    },
                    selected: {
                        state: false,
                        fn: this.mySelectedFunction,
                    },
                    checked: {
                        state: false,
                        fn: this.myCheckedFunction,
                    },
                },
                events: {
                    expanded: {
                        state: true,
                        // fn: this.testeoEvent,
                    },
                    selected: {
                        state: true,
                        // fn: this.testeoEvent,
                    },
                    checked: {
                        state: true,
                        // fn: this.testeoEvent,
                    },
                    editableName: {
                        state: true,
                        calledEvent: "expanded",
                    },
                },
                addNode: {
                    state: false,
                    class: 'add_icon',
                    style: {
                        color: 'red'
                    },
                    fn: this.addNodeFunction,
                    appearOnHover: true,
                },
                editNode: {
                    state: false,
                    fn: null,
                    appearOnHover: true
                },
                deleteNode: {
                    state: true,
                    fn: this.selectPathMove,
                    appearOnHover: false,
                },
                showTags: true,
            };
        },
    },
    methods: {
        openModalMoveDocument() {
            $('#moveDocumentTofolder').modal('show')
        },
















         modalDeleteFolder() {
            const nodePath = this.$refs["my-tree"].findNodePath(this.temp.node.id);
            const parentNodeId = nodePath.slice(-2, -1)[0];
            if (parentNodeId === undefined) {
                var test = this.$refs["my-tree"].nodes.findIndex((x) => x.id == this.temp.node.id)
                this.$refs["my-tree"].nodes.splice(test, 1);
            } else {
                const parentNode = this.$refs["my-tree"].findNode(parentNodeId);
                // child node
                if (parentNode.nodes === undefined) {
                    var test = this.$refs["my-tree"].nodes.findIndex((x) => x.id == this.temp.node.id)
                    this.$refs["my-tree"].nodes.splice(test, 1);
                    $('#staticBackdrop4').modal('hide')
                    const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    folders: this.treeDisplayData
                })
            };
            fetch(this.endpointSaveFolders, requestOptions).then(response => response.json()).then((data) => {})
                    return;
                    // console.log('CHILD',parentNode.nodes);
                }
                const nodeIndex = parentNode.nodes.findIndex((x) => x.id == this.temp.node.id);
                parentNode.nodes.splice(nodeIndex, 1);
            }
            $('#staticBackdrop4').modal('hide')
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    folders: this.treeDisplayData
                })
            };
            fetch(this.endpointSaveFolders, requestOptions).then(response => response.json()).then((data) => {})
        },
        deleteFolder(node, index) {
            console.log('deleteforlder', node, index)
            this.temp = {
                index: index,
                node: node
            };
            $('#staticBackdrop4').modal('show')
            return;
        },






        // deleteFolder(node, index) {
        //     const nodePath = this.$refs["my-tree"].findNodePath(node.id);
        //     const parentNodeId = nodePath.slice(-2, -1)[0];
        //     if (parentNodeId === undefined) {
        //         var test = this.$refs["my-tree"].nodes.findIndex((x) => x.id == node.id)
        //         this.$refs["my-tree"].nodes.splice(test, 1);
        //     } else {
        //         const parentNode = this.$refs["my-tree"].findNode(parentNodeId);
        //         // child node
        //         if (parentNode.nodes === undefined) {
        //             var test = this.$refs["my-tree"].nodes.findIndex((x) => x.id == node.id)
        //             this.$refs["my-tree"].nodes.splice(test, 1);
        //             const requestOptions = {
        //                 method: "POST",
        //                 headers: {
        //                     "Content-Type": "application/json"
        //                 },
        //                 body: JSON.stringify({
        //                     auth: this.auth,
        //                     folders: this.treeDisplayData
        //                 })
        //             };
        //             fetch(this.endpointSaveFolders, requestOptions).then(response => response.json()).then((data) => {})
        //             return;
        //             // console.log('CHILD',parentNode.nodes);
        //         }
        //         const nodeIndex = parentNode.nodes.findIndex((x) => x.id == node.id);
        //         parentNode.nodes.splice(nodeIndex, 1);
        //     }
        //     const requestOptions = {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             auth: this.auth,
        //             folders: this.treeDisplayData
        //         })
        //     };
        //     fetch(this.endpointSaveFolders, requestOptions).then(response => response.json()).then((data) => {})
        // },
        saveEditMode(id, index) {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    id: id,
                    data: {
                        title : this.documents[index].data.title,
                        description : this.documents[index].data.description
                    }
                })
            };
            fetch(window.ENDPOINT + '/library/edit', requestOptions).then(response => response.json()).then((data) => {
                this.documents[index]._ext.edit_title = false;
                this.documents[index]._ext.edit_description = false;
                this.$Progress.finish();
                this.$toast.success("Documento editado...", {
                    position: "bottom-right"
                })
                if (this.document._id == id) {
                    this.document.data.title = this.documents[index].data.title;
                    this.document.data.description = this.documents[index].data.description;
                }
            });
        },
        openCreateFolderRootModal() {
            $('#staticBackdrop').modal('show');
        },
        actionTeste(event, role) {
            if (role == 'font') {
                document.execCommand("fontName", false, this.temp.editFont);
                return;
            }
            switch (role) {
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
        download(file, text, type) {
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
            fetch(window.ENDPOINT + '/library/export/pdf', requestOptions).then(response => response.json()).then((data) => {
                this.$toast.show("Descargando...", {
                    position: "bottom-right"
                })
                this.download(window.ENDPOINTEXPORTS + '/' + data.name, data.name, 'data:application/pdf');
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
            fetch(window.ENDPOINT + '/library/export/word', requestOptions).then(response => response.json()).then((data) => {
                this.$toast.show("Descargando...", {
                    position: "bottom-right"
                })
                this.download(window.ENDPOINTEXPORTS + '/' + data.name, data.name, 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document');
                this.$Progress.finish();
                console.log(data)
            });
        },
        openContextmenu(evt, row, index = null) {
            this.showContextMenu = true;
            this.selected.row = row;
            this.selected.clientX = (evt.pageX || evt.clientX) + 1 + "px";
            this.selected.clientY = (evt.pageY || evt.clientY) + "px";
            this.selectedIdDocument = row._id;
            this.selectedIndexDocument = index;
            this.pathMoveSelected = row.data.categories;
            // console.log('target',row._id)
            // console.log(this.selected)
        },
        getAllDocuments() {
            this.activeFolderId = 0;
            this.loadingDocuments = true;
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    // id_tag:idtag,
                    // name:tag
                })
            };
            fetch(this.endpointDocumentsAll, requestOptions).then(response => response.json()).then((data) => {
             
                if(data.empty) {
                    this.loadingDocuments = false;
                    this.documents = [];
                    return;
                 }  

                if (data.error == true) {
                    this.loadingDocuments = false;
                } else {
                    this.documents = data;
                    this.loadingDocuments = false;
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
                    id: id,
                    // id_tag:idtag,
                    // name:tag
                })
            };
            fetch(this.endpointDocument, requestOptions).then(response => response.json()).then((data) => {
                if(data.code) {
                    this.document = false;
                    this.loadingDocument = false; 
                    this.$Progress.finish();
                    return;
                }

                if(data.empty) {
                    this.document = false;
                    this.loadingDocument = false; 
                    this.$Progress.finish();
                    return;
                }
                this.document = data;
                this.contentDocument = data.data.content;
                this.loadingDocument = false; 
                this.$Progress.finish();
            })
        },
        loadFolders() {
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
                console.log(data)
                setTimeout(() => {

                    if(data.length == 0) {
                    this.treeDisplayData = []; 
                    this.loadingFolders = false;
                    return;
                    }

                    this.treeDisplayData = this.prepareArray(data); 
                    this.loadingFolders = false; 

                    // if(data.empty) {
                    //      this.treeDisplayData = []; 
                    //      this.loadingFolders = false;
                    //      return;
                    // }
                    // if (data.error == true) {
                    //      this.treeDisplayData = []; 
                    //      this.loadingFolders = false;
                    //      return;
                    //  } else {
                    //     this.treeDisplayData = data; 
                    //     this.loadingFolders = false;
                    //     return;
                    // }
                }, 200)
            })
        },
        loadAllDocuments() {
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
                 if(data.empty) {
                    this.documents = [];
                 } else {
                    this.documents = data;
                 }
            })
        },
        search() {
            this.$Progress.start();
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    target: this.searchTarget.target
                })
            };
            fetch(window.ENDPOINT + '/library/folders/search', requestOptions).then(response => response.json()).then((data) => {
                 if(data.empty) {
                    this.loadingDocuments = false;
                    this.documents = [];
                    this.$Progress.finish();
                    return;
                 }  

                this.documents = data;
                this.$Progress.finish();
            })
        },
        removeFilterTag(index, name) {
            delete this.tagsSelected[index];
            this.tagsSelected = this.tagsSelected.filter(function(a) {
                return typeof a !== 'undefined';
            })
            this.loadingDocuments = true;
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    tags: this.tagsSelected,
                    // id_tag:idtag,
                    // name:tag
                })
            };
            fetch(this.endpointDocuments, requestOptions).then(response => response.json()).then((data) => {
                 if(data.empty) {
                    this.loadingDocuments = false;
                    this.documents = [];
                    this.$Progress.finish();
                    return;
                 }  

                if (data.error == true) {} else {
                    this.documents = data;
                    this.loadingDocuments = false;
                }
            })
        },
        
        getDocumentsFromFolder(nodeId, state) {
            this.lastnodeId = nodeId;
            this.$Progress.start();
            this.loadingDocuments = true;
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    folders: nodeId,
                })
            };
            fetch(this.endpointDocuments, requestOptions).then(response => response.json()).then((data) => {
                console.log(data)
                setTimeout(() => {
                     if(data.empty) {
                    this.loadingDocuments = false;
                    this.documents = [];
                    this.$Progress.finish();
                    return;
                 }  

                    if (data.error == true) {} else {
                        this.documents = data;
                        this.loadingDocuments = false; 
                        this.$Progress.finish();
                    }
                }, 200)
            })
        }, 
         prepareArray(data) { 
            var fix = [];
            for (var i = data.length - 1; i >= 0; i--) {
                fix.push({
                    id : data[i]._id,
                    text : data[i].data.text,
                    nodes : [
                     {
                        id:"934",
                        text : "Cargando carpetas..",
                        nodes : [],
                        "state": {
                           "checked": false,
                           "selected": false,
                           "expanded": false
                        }
                     }
                     ],
                    "state": {
                      "checked": false,
                      "selected": false,
                      "expanded": false
                    },
                })
            } 
            return fix; 
        },
        mySelectedFunction: function(nodeId, state) {
            console.log(`is ${nodeId} selected ? ${state}`);
            console.log(this.$refs["my-tree"].getSelectedNode());
            // this.$refs['my-tree-2'].getSelectedNode().$el.classList.add('some-class')
        },
        selectPathMoveSave() {
            this.$Progress.start();
            console.log(this.selectedIdDocument)
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    folders: this.pathMoveSelected,
                    id: this.selectedIdDocument,
                })
            };
            fetch(this.endpointMoveSave, requestOptions).then(response => response.json()).then((data) => {
                console.log(data)
                this.modalMoveDocument = false;
                //this.$Progress.tempColor('#66DE82')
                this.$Progress.finish();
                // this.getDocumentsFromFolder(this.lastnodeId,null);
                this.$toast.success("El documento fue movido correctamente...", {
                    position: "bottom-right"
                }) 
                $('#moveDocumentTofolder').modal('hide')
            })
        },
        pathMoveSelectedRemove(index, nodeid) {
            delete this.pathMoveSelected[index];
            this.pathMoveSelected = this.pathMoveSelected.filter(function(a) {
                return typeof a !== 'undefined';
            })
        },
        selectPathMove(node) {
            console.log(node);
            this.pathMoveSelected.push({
                id: node.id,
                text: node.text
            })
        },
        deleteDocument() {
            this.$Progress.start();
            console.log(this.selectedIdDocument)
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    id: this.selectedIdDocument,
                })
            };
            fetch(this.endpointDeleteDocument, requestOptions).then(response => response.json()).then((data) => {
                this.$Progress.finish();
                //this.$Progress.tempColor('#66DE82')
                // if(this.tagsSelected.length > 0) {
                //    this.getDocumentsFromFolder(this.lastnodeId,null);
                // } else {
                //       this.getAllDocuments();
                // }
                this.$toast.success("Documento eliminado...", {
                    position: "bottom-right"
                })
                delete this.documents[this.selectedIndexDocument];
                this.documents = this.documents.filter(function(a) {
                    return typeof a !== 'undefined';
                })
            })
        },
     
        addNodeFunction: function(node) {
            $('#staticBackdrop2').modal('show');
            this.modalCreateNode = node;
        },
        createFolder() {
            this.$Progress.start();
            const newNode = {
                text: this.nameNewFolder.title,
                id: Math.floor(Math.random() * 100),
                "state": {
                    "checked": false,
                    "selected": false,
                    "expanded": false
                },
            };
            if (this.modalCreateNode.nodes === undefined) {
                // the node doesn't have childs
                // I use $set to ensure that VueJs detect the change
                this.modalCreateNode.nodes = [];
                this.modalCreateNode.nodes.push(newNode);
                // this.$set(node, "nodes", [newNode]);
            } else {
                this.modalCreateNode.nodes.push(newNode);
            }
            var test = this.treeDisplayData;
            this.treeDisplayData = [];
            this.treeDisplayData = test;
            // save tree
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    folders: this.treeDisplayData
                })
            };
            fetch(this.endpointSaveFolders, requestOptions).then(response => response.json()).then((data) => {
                this.$Progress.finish();
                $('#staticBackdrop2').modal('hide');
                this.nameNewFolder = {
                    title: null
                };
            })
        },
        createFolderRoot() {
            this.$Progress.start();
            const newNode = {
                text: this.nameNewFolder.title,
                id: Math.floor(Math.random() * 100),
                "state": {
                    "checked": false,
                    "selected": false,
                    "expanded": false
                },
                nodes: []
            };
            this.treeDisplayData.push(newNode);
            var test = this.treeDisplayData;
            this.treeDisplayData = [];
            this.treeDisplayData = test;
            // save tree
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    folders: this.treeDisplayData
                })
            };
            fetch(this.endpointSaveFolders, requestOptions).then(response => response.json()).then((data) => {
                this.$Progress.finish();
                $('#staticBackdrop').modal('hide');
                this.nameNewFolder = {
                    title: null
                };
            })
        }
    }
}
</script>
