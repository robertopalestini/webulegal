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





  <div class="col-12" style=" 
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 600;
    background: rgba(243, 241, 241, 0.07);
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center; 
" v-if="modalMoveDocument">
                        <div style=" 
    background: white;
    width: 500px;
    padding: 30px; 
    border: 1px solid rgb(226, 226, 226) !important;
    background: #f3f1f1; 
">
    <h5 style="font-size:15px;">Asignar carpeta</h5>
    <p style="font-size:12px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua..</p>  
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




                      <div class="col-12" style="padding-top:15px">
                        <div class="row"> 
                            <div class="col-6" style="padding:0;">
                                 <button type="submit" class="btn btn-primary" style="
                                 
    margin-top: 20px;
    font-size: 11.5px;
    padding: 6px !important;
    min-height: 8px;
    margin: 2.5px;
    margin-top: 20px;
}
" @click="selectPathMoveSave();" v-if="!saveCreateLoading">Guardar</button>

                                 <button type="submit" class="btn btn-primary" style="
                                 
    margin-top: 20px;
    font-size: 11.5px;
    padding: 6px !important;
    min-height: 8px;
    margin: 2.5px;
    margin-top: 20px;
 
" disabled="true" v-if="saveCreateLoading">
                                   <div class="spinner-border text-light spinner-border-sm" role="status">
                                    <span class="sr-only">Loading...</span>
                                  </div>
                                 </button>
                            </div>
                            <div class="col-6" style="padding:0;">
                                <a href="#" class="btn btn-primary" style="
                               
    margin-top: 20px;
    font-size: 11.5px;
    padding: 6px !important;
    min-height: 8px;
    margin: 2.5px;
    margin-top: 20px;
 
"   @click="modalMoveDocument = false">Cancelar</a>
                            </div>
                        </div>
                    </div>

               
                        
                   </div>
                </div>







                            <div class="row">
                                 <div class="col-md-3" style="position:relative;overflow:hidden;overflow-y:auto;height:calc(100vh - 70px);" >
                                   <div class="col-12" style="font-weight:600;color:black;padding-top:2.5px;padding-bottom:2.5px;border-bottom:1px solid #e6e6e6">
                                     Carpetas
                                   </div> 
                                  <!--  <div class="col-12 text-center" style="padding-top:2.5px;padding-bottom:2.5px;border-bottom:1px solid #E5E5E5">
                                     <a href="#" style="font-size:13px;">Nueva carpeta</a>
                                   </div>  -->
                                   <div class="col-12 text-center" style="padding-top:8.5px;padding-bottom:8.5px;border-bottom:1px solid #E5E5E5">
                                     <input type="text" class="form-control" style=" border-radius: 30px;height: 25px !important;max-height: 25px !important;min-height: 25px !important;border: 1px solid rgb(137 137 137);background: transparent;font-size: 12px;font-weight: 500; " v-model="searchTarget.target" @keyup="search()" placeholder="Buscar..." />
                                   </div> 
                                   <div class="col-12"  style="padding-top:10px;padding-bottom:0">
                                    <div class="spinner-border spinner-border-sm" role="status" v-if="loadingFolders">
                                      <span class="sr-only">Loading...</span>
                                    </div>
                                    <ul style="padding:0;margin:0;width:100%;list-style:none" v-if="items.length > 0"> 
                                        <li style="padding:0;margin:0;width:100%;list-style:none" v-for="item in filteredResources" :key="index" @click.prevent="getDocumentsByTag(item.id,item.text)"  >
                                            <a href="#" style="color:black;font-weight:600;">{{item.text}}</a>
                                        </li> 
                                    </ul>
                                   </div>



                                       <div class="col-12"  style="padding-top:10px;padding-bottom:10px">
                                   
                               
       
      

      <a href="#" style="font-size:13pX;font-weight:600;" @click.prevent="openCreateFolderRootModal()"> <img src="@/assets/admin-add.png" style="width:20px;" /> Nueva carpeta raiz</a>

      <hr />


       <a href="#" style="font-size:13pX;font-weight:600;" @click.prevent="loadAllDocuments()">  Todos los documentos</a>

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
                                   

                                  
                                    <div class="col-12" style="padding:15px;border-bottom:1px solid  #e6e6e6;cursor:pointer;position:relative" v-for="(document,index) in fixerEditMode" :key="index" @click="getDocument(document._id)" v-bind:class="{ activeDocument: (document._id === activeDocumentId) }"   @contextmenu.prevent="openContextmenu($event, document,index)" >
                                        

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





                                        <div style="position:absolute:top:0:right:0;height:100%">
                                            <img src="@/assets/cerrar-con-llave.svg" style="height:20px;width:20px;" v-if="document.data.share == 0" />
                                            <img src="@/assets/candado-abierto(2).png" style="height:20px;width:20px;" v-if="document.data.share == 1 " /> 

                                            <img src="@/assets/automatizado.svg" style="height:20px;width:20px;" v-if="document.data.complete == 1" />


                                            <span v-if="document.data.complete == 0"> 
                                               <img src="@/assets/a-automatizar.svg" style="height:20px;width:20px;cursor:pointer" v-if="document.data.form_complete" @click="getDocumentModal(document._id)" /> 
                                            </span>
                                        </div>
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
                                              <component v-if="document.data.complete == 1">
<div class="dropdown"  style="margin:5px;display:inline"  >
  <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
   <img src="@/assets/descargar.svg" style="width:14px;height:14px;margin-right:5px" />
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#" @click.prevent="exportWord()">Documento Word</a>
    <a class="dropdown-item" href="#" @click.prevent="exportPDF()">Documento PDF</a> 
  </div>
</div>
</component>
                                              
                                                <buttonShare  v-bind:id="document.data.id_share_comuniy"  v-if="document.data.share == 1 "  />
                                            </div>
                                        </div>
                                    </div>

<div id="editparent" v-if="editor_enabled">
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




<div class="box" @contextmenu="onContextMenu($event)" style="position:fixed;z-index:1000;background:#fdfafa;width:auto;height:auto;padding:10px; 
    border: 1px solid #e1e1e1; border:1px solid #E2E2E2 !important;
    background: #f3f1f1; " :style="{ top: selected.clientY   ,left : selected.clientX  }">
  <ul style="padding:0;margin:0;list-style:none"> 
    <li style="padding:0;margin:0;list-style:none;padding-top:6px;padding-bottom:6px; border-bottom: 1px solid rgb(225 225 225 / 48%)">
        <a href="#" style="font-size:11px;font-weight:600;color:black;" @click="openModalMoveDocument()">Mover</a>
    </li>
    <li style="padding:0;margin:0;list-style:none;padding-top:6px;padding-bottom:6px;  ">
        <a href="#" style="font-size:11px;font-weight:600;color:black;" @click="deleteDocument()">Eliminar</a>
    </li>
</ul>
</div>







<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <form class="modal-content" @submit.prevent="createFolderRoot()" style="border-radius:10px;border:none">
      <div class="modal-header text-center" style="background : #dedcdc;color:#454545;border-top-left-radius: 10px;
    border-top-right-radius: 10px">
             <h5 class="modal-title" style="    font-size: 15px;
    font-weight: 600;
    text-align: center !important;
    display: block !important;
    width: 100%;">Nueva carpeta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control" style="    border: 1px solid #DDDDDD;
    border-radius: 5px;
    height: 30px;
    padding: 5px;
    max-height: 30px;
    min-height: 36px;background:transparent"    v-model="nameNewFolder.title" required="true" />
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
      <div class="modal-header text-center" style="background : #dedcdc;color:#454545;border-top-left-radius: 10px;
    border-top-right-radius: 10px">
             <h5 class="modal-title" style="    font-size: 15px;
    font-weight: 600;
    text-align: center !important;
    display: block !important;
    width: 100%;">Nueva carpeta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control" style="    border: 1px solid #DDDDDD;
    border-radius: 5px;
    height: 30px;
    padding: 5px;
    max-height: 30px;
    min-height: 36px;background:transparent"    v-model="nameNewFolder.title" required="true" />
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
      <div class="modal-header text-center" style="background : #dedcdc;color:#454545;border-top-left-radius: 10px;
    border-top-right-radius: 10px">
             <h5 class="modal-title" style="    font-size: 15px;
    font-weight: 600;
    text-align: center !important;
    display: block !important;
    width: 100%;">Eliminar carpeta</h5>
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






<!-- Modal -->
<div class="modal fade" id="moveDocumentTofolder" data-backdrop="static" data-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <form class="modal-content" @submit.prevent="selectPathMoveSave()" style="border-radius:10px;border:none">
      <div class="modal-header text-center" style="background : #dedcdc;color:#454545;border-top-left-radius: 10px;
    border-top-right-radius: 10px">
             <h5 class="modal-title" style="    font-size: 15px;
    font-weight: 600;
    text-align: center !important;
    display: block !important;
    width: 100%;">Asignar carpeta</h5>
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
<ul style="padding: 0px;list-style: none;width: 100%;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;align-content: flex-start;" v-if="documentMoveTemp">
    <li style="width: 100%;display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;align-content: flex-start;margin-bottom:5px"  v-for="(item, index)   in  documentMoveTemp.data.categories"  >
         <a href="#" style="font-size: 12px;padding: 5px;background: rgb(234, 234, 234);border-radius: 30px;    display: flex;place-content: flex-start;align-items: center;flex-direction: row;padding-left:10px;padding-right:10px">{{item.text}} 
           <a href="#" style="margin-left:10px" @click="pathMoveSelectedRemove(index,item.id)"><i class="fas fa-times"></i></a>
          </a>
</li>
</ul>


<b>Nuevas carpetas</b>

<ul style="padding: 0px;list-style: none;width: 100%;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;align-content: flex-start;margin-top:15px" v-if="pathMoveSelected">
    <li style="width: 100%;display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;align-content: flex-start;margin-bottom:5px"  v-for="(item, index)   in  pathMoveSelected"  >
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




</template>

<style>
    @import   '@/assets/platform.css';
     .activeDocument {
    padding: 15px;
    border-bottom: 1px solid rgb(230, 230, 230);
    border-left: transparent !important;
    transition: all 250ms;
   background: #DBDBDB !important;
    opacity: 1 !important;
}
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

 
 

 .button-add-tree {
    background-image: url('/src/assets/add(1).png');
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    display: block;
    margin-left: 5px;
}

 .button-edit-tree {
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
</style>

<script setup="">
import columnLeft from '@/components/platform/left.vue';
import navBar from '@/components/platform/navbar.vue'; 
import Tree from 'vuejs-tree'
import buttonShare from '@/components/platform/share-button-writting-private.vue';

</script>
 

<script>
export default {
    data() {
        return {
            auth: localStorage.getItem('auth'),
            endpoint: window.ENDPOINT + '/writings/get/folders',
            endpointDocuments: window.ENDPOINT + '/writings/get/folders/documents',
            endpointDocument: window.ENDPOINT + '/writings/get/document',
            endpointGetAll: window.ENDPOINT + '/writings/get/documents',
            endpointTextPreview: window.ENDPOINT + '/writings/fields/preview',
            endpointSaveFolders: window.ENDPOINT + '/writings/save/folders',
            endpointMoveSave: window.ENDPOINT + '/writings/save/folders/document',
            endpointDeleteDocument: window.ENDPOINT + '/writings/delete/documents',
            endpointSave: window.ENDPOINT + '/writings/folders/edit',
            editor_enabled: false,
            items: [],
            documents: [],
            loadingFolders: true,
            loadingDocument: false,
            tagsSelected: [],
            contentDocument: null,
            activeDocumentId: null,
            documentModal: {
                data: {
                    title: null,
                    description: null,
                    complete: 0,
                    fields: [],
                    content: null,
                }
            },
            document: {
                data: {
                    title: null,
                    description: null,
                    complete: 0,
                }
            },
            searchTarget: {
                target: null
            },
            editField: {
                index: null,
                id: null,
                enabled: false,
            },
            temp: {
                editFont: "Arial",
            },
            treeDisplayData: [],
            nameNewFolder: {
                title: null,
            },
            nameEditFolder: {
                title: null,
            },
            showContextMenu: false,
            selected: {
                row: {},
                action: "",
                clientX: null,
                clientY: null
            },
            selectedIdDocument: null,
            selectedIndexDocument: null,
            pathMoveSelected: null,
            modalMoveDocument: false,
            temp: {
                index: null,
                node: null
            },
            documentMoveTemp: false,
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
        this.loadAllDocuments();
        this.loadFolders();
        if (this.$route.query.id) {
            this.activeDocumentId = this.$route.query.id;
              this.getDocument(this.$route.query.id);
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
                return this.items.filter((item) => {
                    console.log(item.text.startsWith(this.searchTarget.target))
                    return item.text.startsWith(this.searchTarget.target);
                })
            } else {
                return this.items;
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
                editNode: {
                    class: 'button-edit-tree',
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
                    state: true,
                    fn: this.deleteFolder,
                    appearOnHover: true
                },
                deleteNode: {
                    state: false, //mostrar opc
                    fn: this.deleteNodeFunction,
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
            fetch(window.ENDPOINT + '/documents/get', requestOptions).then(response => response.json()).then((data) => {
                this.documentMoveTemp = data;
                $('#moveDocumentTofolder').modal('show')
            });
        },
        openCreateFolderRootModal() {
            $('#staticBackdrop').modal('show');
        },
        saveEditMode(id, index) {
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
                if (this.document._id == id) {
                    this.document.data.title = this.documents[index].data.title;
                    this.document.data.description = this.documents[index].data.description;
                }
            });
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
            fetch(window.ENDPOINT + '/writings/export/pdf', requestOptions).then(response => response.json()).then((data) => {
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
            fetch(window.ENDPOINT + '/writings/export/word', requestOptions).then(response => response.json()).then((data) => {
                this.$toast.show("Descargando...", {
                    position: "bottom-right"
                })
                this.download(window.ENDPOINTEXPORTS + '/' + data.name, data.name, 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document');
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
                    content: this.documentModal.data.content
                })
            };
            fetch(window.ENDPOINT + '/writings/document/create/writing', requestOptions).then(response => response.json()).then((data) => {
                if (this.tagsSelected.length > 0) {
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
                        if (data.error == true) {} else {
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
            fetch(window.ENDPOINT + '/writings/folders/search', requestOptions).then(response => response.json()).then((data) => {
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
            this.$Progress.start();
            delete this.tagsSelected[index];
            this.tagsSelected = this.tagsSelected.filter(function(a) {
                return typeof a !== 'undefined';
            })
            if (this.tagsSelected.length == 0) {
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
                if(data.empty) {
                    this.loadingDocuments = false;
                    this.documents = [];
                    this.$Progress.finish();
                    return;
                 }  

                if (data.error == true) {} else {
                    this.documents = data;
                    this.$Progress.finish();
                }
            })
        },


         getDocumentModal(id) {
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
                
                if (data.error == true) {} else { 

                    if(data.data.complete == 0) {
                        this.editor_enabled = false;
                        if(data.data.form_complete) { 
                            this.documentModal = data;
                            this.contentDocument = null;
                            this.loadingDocument = false;
                            this.$Progress.finish();

                            this.openmodalcomplete();
                            return;
                        }
                    } else {
                        this.editor_enabled = true;
                    } 
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


                if (data.error == true) {} else { 

                    if(data.data.complete == 0) {
                     this.editor_enabled = false; 
                    this.document = data;
                    this.contentDocument = null;
                    this.loadingDocument = false;
                    this.$Progress.finish();

                    } else {
                    this.editor_enabled = true;
                    this.document = data;
                    this.contentDocument = data.data.content;
                    this.loadingDocument = false;
                    this.$Progress.finish();
                    }

                     
                }
            })
        },


        // getDocument(id) {
        //     this.$Progress.start();
        //     this.activeDocumentId = id;
        //     this.loadingDocument = true;
        //     const requestOptions = {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             auth: this.auth,
        //             id: id
        //         })
        //     };
        //     fetch(this.endpointDocument, requestOptions).then(response => response.json()).then((data) => {
        //         if(data.code) {
        //             this.document = false;
        //             this.loadingDocument = false; 
        //             this.$Progress.finish();
        //             return;
        //         }

        //         if(data.empty) {
        //             this.document = false;
        //             this.loadingDocument = false; 
        //             this.$Progress.finish();
        //             return;
        //         }

        //         if (data.error == true) {} else {
        //             if (data.data.complete == 0) {
        //                 this.editor_enabled = false;
        //                 if (data.data.form_complete) {
        //                     this.documentModal = data;
        //                     this.contentDocument = null;
        //                     this.loadingDocument = false;
        //                     this.$Progress.finish();
        //                     this.openmodalcomplete();
        //                     return;
        //                 }
        //             } else {
        //                 this.editor_enabled = true;
        //             }
        //             this.document = data;
        //             this.contentDocument = data.data.content;
        //             this.loadingDocument = false;
        //             this.$Progress.finish();
        //         }
        //     })
        // },
        getDocumentsByTag(idtag, tag) {
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
                    this.$Progress.finish();
                }
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

                      if(data.empty) {
                    this.treeDisplayData = [];
                        // alert(this.treeDisplayData.length)
                        this.loadingFolders = false;
                    return;
                 }  


                    if (data.error == true) {

                    } else {
                        this.treeDisplayData = data[0].folders;
                        // alert(this.treeDisplayData.length)
                        this.loadingFolders = false;
                    }
                }, 200)
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

                    if (data.error == true) {
                    } else {
                        this.documents = data;
                        this.loadingDocuments = false;
                        //this.$Progress.tempColor('#66DE82')
                        this.$Progress.finish();
                    }
                }, 200)
            })
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
                    this.saveFolders();
                    return;
                    // console.log('CHILD',parentNode.nodes);
                }
                const nodeIndex = parentNode.nodes.findIndex((x) => x.id == this.temp.node.id);
                parentNode.nodes.splice(nodeIndex, 1);
            }
            $('#staticBackdrop4').modal('hide')
            this.saveFolders(true);
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
        saveFolders(deletefolder = false) {
            this.$Progress.start();
            var requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth: this.auth,
                    data: this.treeDisplayData,
                })
            };
            if (deletefolder) {
                var requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        auth: this.auth,
                        data: this.treeDisplayData,
                        delete: true,
                        target: this.temp.node
                    })
                };
            }
            fetch(this.endpointSave, requestOptions).then(response => response.json()).then((data) => {
                this.$Progress.finish();
                this.pathMoveSelected = [];
            })
        }
    }
}
 
</script>
