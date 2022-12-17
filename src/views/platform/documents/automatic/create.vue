 
<template>
    <div style="width: 1px !important; height: 100vh !important;background:black;position:fixed;top:0;bottom:0;z-index:3000"
        class="line-ranger"></div>
    <navBar />
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2" style="
              height: calc(100vh - 70px);
              overflow: hidden;
              overflow-y: auto;
              padding: 0;
            ">
                    <columnLeft />
                </div>

                <div class="col-md-8 text-center create-doc-writing" style="padding-top: 0">

                    <div class="row" style="height: calc(100vh - 120px)" v-if="help_view">
                        <div class="col-12 text-left" style="margin-top: 20px">
                            <a href="@" v-tooltip="'Regresar'" @click.prevent="$router.go(-1)" style="margin-top: -40px"
                                class="text-left">
                                <img src="@/assets/flecha-izquierda.svg" style="height: 20px; width: 20px" />
                            </a>
                        </div>

                        <div class="col-12" style="
                  height: 100%;
                  display: flex;
                  align-content: center;
                  justify-content: center;
                  align-items: center;
                ">
                            <div class="row justify-content-center" style="margin-top:-350px">
                                <div class="col-12" style="padding-top: 30px; padding-bottom: 30px">
                                    <h4 style="font-weight: bold; margin-bottom: 60px">
                                        Instrucciones para automatizar escritos
                                    </h4>
                                </div>
                                <div class="col-md-3">
                                    <div class="col-12" style="
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                        justify-content: center;
                        align-items: center;
                      ">
                                        <div style="
                          height: 50px;
                          width: 50px;
                          color: white;
                          font-weight: 700;
                          border-radius: 100%;
                          margin-top: 15px;
                          margin-bottom: 15px;
                          display: flex;
                          background: #2b44ff;
                          justify-content: center;
                          align-items: center;
                          align-content: center;
                        ">
                                            1
                                        </div>
                                        <p style="color: black; font-weight: 600">
                                            Pega o redacta el escrito en el editor de texto
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="col-12" style="
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                        justify-content: center;
                        align-items: center;
                      ">
                                        <div style="
                          height: 50px;
                          width: 50px;
                          color: white;
                          font-weight: 700;
                          border-radius: 100%;
                          margin-top: 15px;
                          margin-bottom: 15px;
                          display: flex;
                          background: #2b44ff;
                          justify-content: center;
                          align-items: center;
                          align-content: center;
                        ">
                                            2
                                        </div>
                                        <p style="color: black; font-weight: 600">
                                            Selecciona las palabras modificables de a una por vez
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="col-12" style="
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                        justify-content: center;
                        align-items: center;
                      ">
                                        <div style="
                          height: 50px;
                          width: 50px;
                          color: white;
                          font-weight: 700;
                          border-radius: 100%;
                          margin-top: 15px;
                          margin-bottom: 15px;
                          display: flex;
                          background: #2b44ff;
                          justify-content: center;
                          align-items: center;
                          align-content: center;
                        ">
                                            3
                                        </div>
                                        <p style="color: black; font-weight: 600; font-size: 14px">
                                            Asignale el campo que corresponda con el dato a completar.
                                            Por ej. "Nombre", "DNI", etc.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary" style="max-width: 200px" @click="
    editor_view = true;
help_view = false;
startText();
                                    ">
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" v-if="editor_view">
                        <div class="col-2 text-left" style="margin-top: 20px">
                            <a href="@" v-tooltip="'Regresar'" @click.prevent="$router.go(-1)" style="margin-top: -30px"
                                class="text-left">
                                <img src="@/assets/flecha-izquierda.svg" style="height: 20px; width: 20px" />
                            </a>
                        </div>
                        <div class="col-10" style="position: relative ;padding-left:20px; padding-right:0;">
                            <div style="
                                position: absolute; 
                                top: 0;
                                left: 10px;
                                right: 0;
                                bottom: 0;
                                background: rgb(0, 0, 0, 0.1);
                                z-index: 600; 
                                " v-if="showEditorLoading">
                                <div class="spinner-border text-light spinner-border-sm" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                            <div id="cke_ruler_wrap"></div>
                            <div class="document-editor"></div>

                            <div>
                                <div class="editor-wrapper" style="margin-left:-190px">

                                    <ckeditor placeholders="Pega" id="editor" :editor="editorCK" v-html="contentText"
                                        v-model="contentText" @ready="onReadyCK" @overflow="onAddPage" style="
                                     
                                height: calc(700px);
                                text-align: left;  
                                padding-left:10px;
                                padding-right:0; 
                                
                                ">

                                    </ckeditor>


                                    <!-- <div class="editor-page" v-for="i in pages" :key="i">
                                        <div class="editor-page-break" v-if="i < pages.length">
                                            <hr>
                                            <p>Página {{ i + 1 }}</p>
                                        </div>

                                        <textarea :value="contentText" :rows="linesDoc" :cols="columnsDoc" />
                                    </div> -->
                                </div>
                            </div>
                            <!-- <div id="editor" v-html="this.contentText" @selectionChange="" style="
              height: calc(100vh - 110px);
              overflow: hidden;
              overflow-y: scroll;
             
              text-align: center;
              padding-left:0;
              padding-right:0; 
            "></div>  -->


                        </div>
                    </div>
                </div>

                <div class="col-md-2" style="
                    height: calc(100vh - 70px);
                    overflow: hidden;
                    overflow-y: scroll;
                    text-align: center;
                    padding-left:10px;
                    padding-right:10px; 
                    " v-if="editor_view">

                    <button type="submit" class="btn btn-primary" style="width:200px;position:relative;z-index:1000; "
                        @click="openAddField()">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px"
                            fill="#FFFFFF">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg> Nuevo campo
                    </button>



                    <ul style="padding: 0;
                            list-style: none;
                            border: 1px solid #cfcfcf;
                            border-top-left-radius: 10px;
                            border-top-right-radius: 10px;
                            margin-top: 3vh" v-if="fields.length > 0">

                        <li style=" 
                                border-top-left-radius: 10px;
                                border-top-right-radius: 10px;
                                background: #e0dede;
                                padding: 5px; 
                                text-align: center;
                                font-weight: 700;
                                
                                border-bottom: 1px solid #c9c9c9;
                                vertical-align:middle;
                            ">
                            Campos
                        </li>

                        <li style="padding: 5px; border-bottom: 1px solid #c9c9c9;word-wrap: break-word;"
                            v-for="(field, index) in fields" @click="console.log(fields)" @mouseleave="mouseleavefield">
                            {{ field.field }}
                            <a href="#" v-tooltip="'Eliminar Campo'" @click="removefield(index)"><img
                                    src="@/assets/cerrar-simbolo-de-boton-circular.png"
                                    style="max-width: 15px; max-height: 15px" /></a>
                        </li>

                    </ul>

                    <div class="col-12" style="position: relative">
                        <button type="submit" @click="save()" class="btn btn-primary"
                            style="width: 120px; position: relative" v-if="!shopsavepop && fields.length > 0">
                            Crear
                        </button>

                        <button type="submit" class="btn btn-primary" style="width: 120px; position: relative"
                            disabled="true" v-if="shopsavepop">
                            <div class="spinner-border text-light spinner-border-sm" role="status"
                                style="width: 15px; height: 15px; border-width: 1px; margin: 0">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </button>

                        <div style="
                  display: flex;
                  top: 0px;
                  left: 0px;
                  right: 0px;
                  position: fixed;
                  bottom: 0;
                  align-content: center;
                  justify-content: center;
                  align-items: center;
                " v-if="popshared">
                            <div style="
                    color: rgb(52, 52, 52);
                    width: 355px;
                    right: 180px;
                    font-size: 14px;
                    border-radius: 8px;
                    font-weight: 600;
                    background: #e7e7e7;
                    padding: 10px;
                  ">

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                                    @click="popshared = false"><span aria-hidden="true">×</span></button>


                                El escrito automatizado se guardara en tu carpeta privada "Mis
                                escritos". ¿Queres compartirlo con la comunidad legal?
                                <div class="col-12 text-right" style="display: flex">
                                    <button class="btn btn-primary" style="margin: 5px" @click="saveShare(1)"
                                        :disabled="saveLoadingShareDisabled">
                                        <span v-if="!saveLoadingShare">Si</span>
                                        <div class="spinner-border spinner-border-sm" role="status"
                                            v-if="saveLoadingShare" style="
                                                height: 10px;
                                                margin: 0px;
                                                padding: 0px;
                                                width: 10px !important; 
                                                color: white;
                                                margin-top: -10px !important;
                                            ">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </button>

                                    <button href="#" class="btn btn-primary" style="margin: 5px" @click="saveShare(0)"
                                        :disabled="saveLoadingNtShareDisabled">
                                        <span v-if="!saveLoadingNtShare">No</span>
                                        <div class="spinner-border spinner-border-sm" role="status"
                                            v-if="saveLoadingNtShare" style="
                          height: 10px; 
                          margin: 0px;
                          padding: 0px;
                          width: 10px !important;
                          color: white;
                          margin-top: -10px !important;
                        ">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>












    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content" style="border-radius: 10px; border: none">
                <div class="modal-header text-center">
                    <h5 class="modal-title" style="padding-left:20px">Asignar campo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-danger" style="padding:0;">
                    <form @submit.prevent="replaceSelectedText" style="padding:20px">
                        <input type="text" class="form-control" style="
                            font-weight: 600;
                            height: 32px !important;
                            max-height: 32px !important;
                            min-height: 32px !important;
                            font-size: 16px;
                            background: #efefef;
                            border-radius: 30px !important;
                            " v-model="replace_text.target" id="popup-selected-text-input" />
                        <div class="col-12 text-center" style="padding-top: 10px">
                            <button type="submit" class="btn btn-primary" style="width: 100px">
                                Crear
                            </button>
                        </div>
                    </form>


                    <div class="modal-header text-center" style="padding: 10px;
      border-radius: 0 !important;" v-if="fields.length > 0">
                        <h5 class="modal-title">Repetir campo</h5>
                    </div>


                    <ul style="
            padding: 0px;
            list-style: none;
            max-height: 100px;
            overflow: hidden;
            overflow-y: scroll;
          " v-if="fields.length > 0">
                        <li v-for="(field, index) in fields">
                            <a href="#" @click="addExistentField($event, index)" @mouseover="mouseoverfield(index)"
                                v-if="field.existent == false" @mouseleave="mouseleavefield(index)"
                                style="padding: 7px; border-bottom: 1px solid #c9c9c9;width:100%;display:block;position:relative">{{
        field.field
                                }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


</template>
<style>
@import "@/assets/platform.css";

.document-editor {

    border-radius: var(--ck-border-radius);
    /* Set vertical boundaries for the document editor. */
    max-height: 700px;
    /* This element is a flex container for easier rendering. */
    display: flex;
    flex-flow: column nowrap;
}

.document-editor__toolbar {
    /* Make sure the toolbar container is always above the editable. */
    z-index: 1;
    /* Create the illusion of the toolbar floating over the editable. */
    box-shadow: 0 0 5px hsla(0, 0%, 0%, .2);
    /* Use the CKEditor CSS variables to keep the UI consistent. */
    border-bottom: 1px solid var(--ck-color-toolbar-border);
}

/* Adjust the look of the toolbar inside of the container. */
.document-editor__toolbar .ck-toolbar {
    border: 0;
    border-radius: 0;
}

/* Make the editable container look like the inside of a native word processor app. */
.document-editor__editable-container {
    padding: calc(2 * var(--ck-spacing-large));
    background: var(--ck-color-base-foreground);
    /* Make it possible to scroll the "page" of the edited content. */
    overflow-y: scroll;
}

.document-editor__editable-container .document-editor__editable.ck-editor__editable {
    /* Set the dimensions of the "page". */
    width: 15.8cm;
    min-height: 21cm;
    /* Keep the "page" off the boundaries of the container. */
    padding: 1cm 2cm 2cm;
    border: 1px hsl(0, 0%, 82.7%) solid;
    border-radius: var(--ck-border-radius);
    background: white;
    /* The "page" should cast a slight shadow (3D illusion). */
    box-shadow: 0 0 5px hsla(0, 0%, 0%, .1);
    /* Center the "page". */
    margin: 0 auto;
}

/* Override the page's width in the "Examples" section which is wider. */
.main__content-wide .document-editor__editable-container .document-editor__editable.ck-editor__editable {
    width: 18cm;
}

/* Set the default font for the "page" of the content. */
.document-editor .ck-content,
.document-editor .ck-heading-dropdown .ck-list .ck-button__label {
    font: 16px/1.6 "Helvetica Neue", Helvetica, Arial, sans-serif;
}

/* Adjust the headings dropdown to host some larger heading styles. */
.document-editor .ck-heading-dropdown .ck-list .ck-button__label {
    line-height: calc(1.7 * var(--ck-line-height-base) * var(--ck-font-size-base));
    min-width: 6em;
}

/* Scale down all heading previews because they are way too big to be presented in the UI.
  Preserve the relative scale, though. */
.document-editor .ck-heading-dropdown .ck-list .ck-heading_heading1 .ck-button__label,
.document-editor .ck-heading-dropdown .ck-list .ck-heading_heading2 .ck-button__label {
    transform: scale(0.8);
    transform-origin: left;
}

/* Set the styles for "Heading 1". */
.document-editor .ck-content h2,
.document-editor .ck-heading-dropdown .ck-heading_heading1 .ck-button__label {
    font-size: 2.18em;
    font-weight: normal;
}

.document-editor .ck-content h2 {
    line-height: 1.37em;
    padding-top: .342em;
    margin-bottom: .142em;
}

/* Set the styles for "Heading 2". */
.document-editor .ck-content h3,
.document-editor .ck-heading-dropdown .ck-heading_heading2 .ck-button__label {
    font-size: 1.75em;
    font-weight: normal;
    color: hsl(203, 100%, 50%);
}

.document-editor .ck-heading-dropdown .ck-heading_heading2.ck-on .ck-button__label {
    color: var(--ck-color-list-button-on-text);
}

/* Set the styles for "Heading 2". */
.document-editor .ck-content h3 {
    line-height: 1.86em;
    padding-top: .171em;
    margin-bottom: .357em;
}

/* Set the styles for "Heading 3". */
.document-editor .ck-content h4,
.document-editor .ck-heading-dropdown .ck-heading_heading3 .ck-button__label {
    font-size: 1.31em;
    font-weight: bold;
}

.document-editor .ck-content h4 {
    line-height: 1.24em;
    padding-top: .286em;
    margin-bottom: .952em;
}

/* Make the block quoted text serif with some additional spacing. */
.document-editor .ck-content blockquote {
    font-family: Georgia, serif;
    margin-left: calc(2 * var(--ck-spacing-large));
    margin-right: calc(2 * var(--ck-spacing-large));
}

@media only screen and (max-width: 960px) {

    /* Because on mobile 2cm paddings are to big. */
    .document-editor__editable-container .document-editor__editable.ck-editor__editable {
        padding: 1.5em;
    }
}

@media only screen and (max-width: 1200px) {
    .main__content-wide .document-editor__editable-container .document-editor__editable.ck-editor__editable {
        width: 100%;
    }
}

/* Style document editor a'ka Google Docs.*/
@media only screen and (min-width: 1360px) {
    .main .main__content.main__content-wide {
        padding-right: 0;
    }
}

@media only screen and (min-width: 1600px) {
    .main .main__content.main__content-wide {
        width: 24cm;
    }

    .main .main__content.main__content-wide .main__content-inner {
        width: auto;
        margin: 0 50px;
    }

    /* Keep "page" look based on viewport width. */
    .main__content-wide .document-editor__editable-container .document-editor__editable.ck-editor__editable {
        width: 60%;
    }
}

.document-editor__editable-container .document-editor__editable.ck-editor__editable {
    width: 600px;
    min-height: 21cm;
    padding: 1cm 2cm 2cm;
    border: 1px hsl(0, 0%, 82.7%) solid;
    border-radius: var(--ck-border-radius);
    background: white;
    box-shadow: 0 0 5px hsla(0, 0%, 0%, .1);
    margin: 0 auto;
}

.ck-editor__editable {
    width: calc(90vh);
    padding: 1cm 2cm 2cm;
    border: 1px hsl(0, 0%, 82.7%) solid;
    border-radius: var(--ck-border-radius);
    background: white;
    box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.1);
    margin: 20px auto;
    overflow: visible;
}


#cke_ruler_wrap {
    width: 780px;
    margin: 0 auto;
    display: block;
}

.text-map {
    cursor: pointer;
    border-bottom: 1px solid transparent;
}

.text-map:hover {
    border-bottom: 1px solid #3c00ff;
}

.text-map-hover {
    border-bottom: 1px solid #3c00ff;
    background: #efefef;
    color: #2b44ff
}

.categorieActive {
    border: 1px solid #2b44ff !important;
    color: #2b44ff !important;
}


.input-field {
    height: 30px !important;
    min-height: 30px !important;
    border-top: none !important;
    border-right: none !important;
    border-bottom: 2px solid rgb(141, 141, 141) !important;
    border-left: none !important;
    border-image: initial !important;
    background: transparent !important;
    font-size: 13px !important;
    color: black !important;
    font-weight: 500 !important;
}

#cke_ruler_wrap {
    width: 780px;
    margin: 0 auto;
    display: block;
}



.ck.ck-editor__editable_inline {
    border: 1px solid var(--ck-color-base-border);
    overflow: auto
}
</style>
   
  
  
<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ref } from 'vue'
import RichTextEditor from "@/components/platform/RichTextEditor.vue";
// import "@vueup/vue-quill/dist/vue-quill.snow.css";

import { Quill, QuillEditor } from "@vueup/vue-quill";
import QuillImageDropAndPaste from "quill-image-drop-and-paste";
import quillTable from "quill-table";

import noUiSlider from "nouislider"

Quill.register("modules/imageDropAndPaste", QuillImageDropAndPaste);
Quill.register(quillTable.TableCell);
Quill.register(quillTable.TableRow);
Quill.register(quillTable.Table);
Quill.register(quillTable.Contain);
Quill.register('modules/table', quillTable.TableModule);


function replaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
}

function eliminarDiacriticosEs(texto) {
    return texto
    // .normalize("NFD")s
    // .replace(
    //     /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
    //     "$1"
    // )
    // .normalize();
}


var sel, range, base

var CLONE,
    CLONEWHITID,
    CLONEWHITFIELDS,
    fieldrandomid,
    fieldoriginal,
    startMovv = true;
export default {
    components: {
        RichTextEditor,
        QuillEditor,
        ckeditor: CKEditor.component
    },
    data() {


        return {
            data: {},
            auth: localStorage.getItem("auth"),
            pages: null,
            original: null,
            endpointUpload: window.ENDPOINT + "/upload",
            endpoint: window.ENDPOINT + "/writings/create",
            endpointTags: "http://api.webu.lt/search/tags/default",
            endpointGetAll: "http://api.webu.lt/writings",
            endpointShare: "http://api.webu.lt/document/update/share",
            popshared: false,
            help_view: true,
            editor_view: false,
            categories_view: false,
            searchInputTags: null,
            editor: null,
            quill: null,
            toolbarOptions: null,
            addCampos: null,
            showEditorLoading: false,
            showPopSelected: false,
            replace_text: { target: null },
            temp_content: null,
            fields: [],
            replaceforExistent: false,
            replaceforExistentIndex: 0,
            shopsavepop: false,
            titleDocument: null,
            descriptionDocument: null,
            saveLoadingShare: false,
            saveLoadingShareDisabled: false,
            saveLoadingNtShare: false,
            saveLoadingNtShareDisabled: false,
            categories: [
                {
                    id: 1,
                    title: "Titulo de la categoria",
                    description: " descripcion de la categoria ",
                    active: 0,
                },
                {
                    id: 2,
                    title: "Titulo de la categoria",
                    description: " descripcion de la categoria ",
                    active: 0,
                },
                {
                    id: 3,
                    title: "Titulo de la categoria",
                    description: " descripcion de la categoria ",
                    active: 0,
                },
                {
                    id: 4,
                    title: "Titulo de la categoria",
                    description: " descripcion de la categoria ",
                    active: 0,
                },
                {
                    id: 5,
                    title: "Titulo de la categoria",
                    description: " descripcion de la categoria ",
                    active: 0,
                },
                {
                    id: 6,
                    title: "Titulo de la categoria",
                    description: " descripcion de la categoria ",
                    active: 0,
                },
                {
                    id: 7,
                    title: "Titulo de la categoria",
                    description: " descripcion de la categoria ",
                    active: 0,
                },
                {
                    id: 8,
                    title: "Titulo de la categoria",
                    description: " descripcion de la categoria ",
                    active: 0,
                },
            ],
            categoriesSelected: [],
            tags: [],
            tagSelected: [],
            selected: {
                row: null,
                clientX: null,
                clientY: null,
            },
            temp: {
                editFont: ['Arial/Arial, Helvetica, sans-serif;',
                    'Comic Sans MS/Comic Sans MS, cursive;',
                    'Courier New/Courier New, Courier, monospace;',
                    'Georgia/Georgia, serif;',
                    'Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;',
                    'Tahoma/Tahoma, Geneva, sans-serif;',
                    'Times New Roman/Times New Roman, Times, serif;',
                    'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;',
                    'Verdana/Verdana, Geneva, sans-serif'],
                editColor: ['#bf9000', '#000000']
            },
            scale: 2, //658813476562495, //1,
            startX: 0,
            startY: 0,
            lines: {
                h: [100, 200],
                v: [100, 200]
            },
            thick: 20,
            isShowRuler: true,
            isShowReferLine: true,
            sel: null,
            base: null,
            range: null,
            editDocument: null,
            editorCK: DecoupledEditor,
            linesDoc: 20,
            columnsDoc: null
            // editorCKData: '<p>Content of the editor.</p>',
            // editorCKConfig: {
            //     // Run the editor with the German UI.
            //     language: 'es'
            // }
        };
    },
    created() {



        if (this.editDocument) {
            console.log(this.editDocument)
            this.contentText = this.editDocument.data.content;
            this.fields = this.editDocument.data.fields

        } else {
            console.log('aaaa' + this.editDocument)
            // this.contentText = 'Nuevo escrito'
            this.fields = []
        }


        const maxRows = 10;
        const maxCols = 5;
        const tableOptions = [];
        for (let r = 1; r <= maxRows; r++) {
            for (let c = 1; c <= maxCols; c++) {
                tableOptions.push('newtable_' + r + '_' + c);
            }
        }

        const addCampos = 'ql-customb'

        this.toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['image', 'video'],
            [{ table: tableOptions }, { table: 'append-row' }, { table: 'append-col' }],


            ['clean']                                         // remove formatting button
        ];




    },
    setup() {



    },
    methods: {

        onAddPage(editor) {
            this.pages = 0
            this.original = document.querySelectorAll('#editor')


            for (let index = 0; index <= this.original.keys.length; index++) {
                this.pages = this.pages++


                var place = document.querySelector('.editor-wrapper');
                var clone = this.original[index].cloneNode(true);
                clone.id = "editor";
                place.appendChild(clone);
                console.log(clone)



            }
        },

        onReadyCK(editor) {


            // Insert the toolbar before the editable area.
            editor.ui.getEditableElement().parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
            );

        },


        saveShare(value) {
            console.log(this.data);
            if (value == 1) {
                this.saveLoadingShare = true;
                this.saveLoadingNtShareDisabled = true;
                this.saveLoadingShareDisabled = true;
                setTimeout(() => {
                    this.$router.push({
                        name: "autowriting-organize",
                        params: { id: this.data.insertedId },
                    });
                }, 1500);
            } else {
                this.saveLoadingNtShare = true;
                this.saveLoadingShareDisabled = true;
                this.saveLoadingNtShareDisabled = true;
                this.popshared = false;

                this.$router.push({
                    name: "my-writings-folders",
                    query: {
                        id: this.data.insertedId,
                    },
                });
                this.$toast.success("Escrito creado", { position: "bottom-right" });

                // setTimeout(() => {
                //      this.$router.push({ name: 'my-writings-view-automatic-document', params: { id: this.data.id }})
                //  },1500)
            }
        },
        removeTag(index) {
            this.tagSelected.splice(index, 1);
        },
        selectTag(index) {
            this.tagSelected.push(this.tags[index]);
        },
        searchTags() {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    auth: this.auth,
                    search: this.searchInputTags,
                }),
            };
            fetch(this.endpointTags, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.tags = data;
                });
        },

        selectCategorie(index) {
            this.categoriesSelected.push(this.categories[index]);
        },
        activeClass(index, id) {
            if (this.categories[index].active == 1) {
                this.categories[index].active = 0;
            } else {
                this.categories[index].active = 1;
            }
        },
        save() {
            this.shopsavepop = true;

            var temp = [];
            var copy = this.fields;
            for (var i = copy.length - 1; i >= 0; i--) {
                copy[i].element = null;
                copy[i].user = {
                    input: null,
                    data: null,
                };
                temp.push(copy[i]);
            }
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    auth: this.auth,
                    data: {
                        content: document.getElementById("editor").innerHTML,
                        fields: temp,
                        title: "Documento sin titulo", //this.titleDocument,
                        description: "Documento sin descripcion", //this.descriptionDocument,
                        categories: [],
                        tags: [],
                    },
                }),
            };
            fetch(this.endpoint, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setTimeout(() => {
                        this.shopsavepop = false;
                        this.popshared = true;
                    }, 1500);
                    this.data = data;
                });
        },
        removefield(index) {
            var element = this.fields[index];
            console.log(element)
            element.outerHTML = element.base;
            this.fields.splice(index, 1);
            element.classList.remove("text-map-hover");

        },
        mouseoverfield(e) {
            // if (this.fields.length) {
            //     e.target.classList.add("text-map-hover");

            //     for (let index = 0; index < array.length; index++) {
            //         const elements = this.fields[index];
            //         const element = elements.field
            //         element[index].data - id
            //         console.log(document.querySelector(`'data-id'=${element.data - id}`))
            //         console.log(e.target)
            //     }

            // }
        },

        addExistentField(event, index) {
            this.replaceforExistent = true;
            this.replaceforExistentIndex = index;
            this.replaceSelectedText(event);
        },

        openModalChangeText() {
            sel = window.getSelection();
            base = window
                .getSelection()
                .anchorNode.data.substring(
                    window.getSelection().anchorOffset,
                    window.getSelection().extentOffset
                );
            range = sel.getRangeAt(0);

            let selection = window
                .getSelection()
                .anchorNode.textContent.substring(
                    window.getSelection().extentOffset,
                    window.getSelection().anchorOffset
                );

            if (selection.length !== 0) {
                //open popup in cursor
                var event;
                this.openAddField()
                // this.replaceSelectedText(event);
                // const onMouseMove = (e) => {
                //     var popup = document.querySelector("#popup-selected-text");
                //     popup.style.left = e.pageX + 20 + "px";
                //     popup.style.top = e.pageY + 20 + "px";
                //     popup.style.visibility = "visible";
                //     document.removeEventListener("mousemove", onMouseMove);
                // };

                // var event = document.addEventListener("mousemove", onMouseMove);
            }
        },
        openAddField() {

            $('#staticBackdrop4').modal('show');
        },
        closeAddField() {
            $('#staticBackdrop4').modal('hide');
        },

        replaceSelectedText(e) {
            // e.preventDefault();
            console.log(range)
            console.log(this.fields)
            e.preventDefault();
            if (this.replaceforExistent) {
                var element = this.fields[this.replaceforExistentIndex].element;
                this.replace_text.target = element.getAttribute("replace");
                // this.replaceforExistent = false;
            }



            var a = document.createElement("a");
            a.innerText = "[" + this.replace_text.target + "]";
            // a.className = "text-map";

            // a.className = "testeo";
            a.classList.add('text-map', 'testeo')
            var id = Math.ceil(Math.random() * 1000000);
            a.setAttribute("data-id", id);
            a.setAttribute("replace", this.replace_text.target);
            a.setAttribute(
                "base",
                eliminarDiacriticosEs(base)


            );
            console.log(a)
            var newField;


            if (this.replaceforExistent) {
                if (!this.fields[this.replaceforExistentIndex].existent_fields) {
                    this.fields[this.replaceforExistentIndex].existent_fields = [];
                }

                var existent_id = this.fields[this.replaceforExistentIndex].id;

                newField = {
                    existent: true,
                    existent_index: this.replaceforExistentIndex,
                    existent_id: existent_id,
                    field: this.replace_text.target,
                    element: a,
                    id: id,
                    replace: this.replace_text.target,
                    base: eliminarDiacriticosEs(base)


                };
                this.replaceforExistent = false;
                this.fields[this.replaceforExistentIndex].existent_fields.push(newField)
            } else {
                newField = {
                    existent: false,
                    field: this.replace_text.target,
                    element: a.getAttribute('replace'),
                    id: id,
                    replace: this.replace_text.target,
                    base: eliminarDiacriticosEs(base)


                }
            }

            this.fields.push(newField);

            // selectionrr.insertNode(a);
            range.insertNode(a);
            range.deleteContents();
            this.replace_text.target = null
            this.closeAddField()

            // var popup = document.querySelector("#popup-selected-text");
            // popup.style.visibility = "hidden";
        },

        next() {
            this.text_view = true;

            this.help_view = false;

            this.categories_view = false;

            setTimeout(() => {
                document
                    .querySelector("#editor")
                    .addEventListener('overflow', this.onAddPage());
            }, 300);



            setTimeout(() => {
                ["mouseup", "keyup", "selectionchange"].forEach((e) => {
                    document
                        .querySelector("#editor")
                        .addEventListener(e, this.openModalChangeText);
                });
            }, 300);

        },

        startText() {

            this.onAddPage()

            //     this.quill = new Quill('#editor', {
            //         theme: 'snow',
            //         placeholder: 'Edit text',
            //         modules: {
            //             // table: true,
            //             toolbar: this.toolbarOptions,
            //             // imageDropAndPaste: {
            //             //     handler: this.imageHandler
            //             // },
            //         }
            //     });

            setTimeout(() => {
                ["mouseup", "keyup", "selectionchange"].forEach((e) => {



                    document
                        .querySelector("#editor")
                        .addEventListener("paste", (e) => {
                            e.preventDefault();
                            var contentOnBlur = (e.originalEvent || e).clipboardData.getData('text/html') || prompt('Paste something..');
                            // contentOnBlur = contentOnBlur.replace(/(<([^>]+)>)/ig,''); 
                            contentOnBlur = striptags(contentOnBlur, ['span', 'table', 'tbody', 'tr', 'td', 'h1', 'h2', 'h3', 'h4', 'h5', 'b', 'em', 'strong', 'br', 'u', 'strike', 'p']);
                            document.execCommand('insertHtml', false, contentOnBlur.replace(/[\s;]background-color:[^;]+(?=;)|^background-color:[^;]+;/g, '').replace(/[\s;]color:[^;]+(?=;)|^color:[^;]+;/g, ''));
                        })


                });
            }, 300);
        },
    }
} 
</script>
  
<script setup>
import columnLeft from "@/components/platform/left.vue";
import navBar from "@/components/platform/navbar.vue";
import { Editable } from "@livingdocs/editable.js/src/core";

</script>