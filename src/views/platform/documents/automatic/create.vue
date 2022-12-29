 
<template>
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
                    <div class="row" style="height: 100%" v-if="help_view">
                        <div class="col-12 text-left" style="margin-top: 20px">
                            <a href="@" @click.prevent="$router.go(-1)" style="margin-top: 40px">
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
                            <div class="row justify-content-center">
                                <div class="col-12" style="padding-top: 30px; padding-bottom: 30px">
                                    <h4 style="font-weight: bold">
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
                                            Por ej. "Nombre", "DNI" , etc.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary" style="max-width: 200px" @click="
    editor_view = true;
help_view = false;
startText();
                                    ">
                                        Siguiente <i class="fas fa-long-arrow-alt-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" v-if="editor_view">
                        <div class="col-12 text-right">
                            <a href="@" @click.prevent="
    help_view = true;
editor_view = false;
                            " style="position: absolute; z-index: 1000; margin-top: 20px">
                                <img src="@/assets/flecha-izquierda.svg" style="height: 20px; width: 20px" />
                            </a>
                        </div>

                        <div class="col-12" style="position: relative; padding: 0">
                            <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgb(0, 0, 0, 0.1);
                    z-index: 600;
                  " v-if="showEditorLoading">
                                <div class="spinner-border text-light spinner-border-sm" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                            <div id="editparent" style="
                    text-align: left;
                    position: sticky;
                    background: #fbfbfb;
                    top: 0;
                  ">

                            </div>
                            <editor id="crearEscrito" api-key="9a51lim0mxaojg1o8fhwtga2lfro3fnyw6k21n3r146f7weq"
                                :modelValue="contentText" :init="{
    lenguage: 'es_ES',
    branding: false,
    height: '91vh',
    menubar: true,
    powerpaste_allow_local_images: true,
    powerpaste_keep_unsupported_src: true,
    smart_paste: true,
    powerpaste_html_import: 'prompt',
    powerpaste_word_import: 'clean',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tableofcontents footnotes mergetags autocorrect typography inlinecss',
    toolbar: 'undo redo |  fontfamily forecolor  fontsize | bold italic underline strikethrough  removeformat| link image media table mergetags | addcomment showcomments | spellcheckdialog typography blocks| align lineheight | checklist numlist bullist indent outdent | emoticons charmap | ',
}" initial-value='Escribí o pegá acá el modelo a automatizar' />

                        </div>
                    </div>
                </div>

                <div class="col-md-2" style="
              height: calc(100vh - 70px);
              overflow: hidden;
              overflow-y: scroll;
              padding: 0;
              text-align: center;
              padding: 20px;
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
                            {{ !isEdit ? 'Crear' : 'Editar' }}
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
                    <form @submit="replaceSelectedText" style="padding:20px">
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

.text-map {
    border-bottom: 1px solid transparent;
}

.text-map:hover {
    border-bottom: 1px solid #3c00ff;
}

.text-map-hover {
    border-bottom: 1px solid #3c00ff;
    background: #3000ff;
    color: white;
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
</style>
   
  
  
<script>
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import striptags from 'striptags';
import Editor from '@/tinymce/tinymce-vue';

function eliminarDiacriticosEs(texto) {
    return texto
        .normalize("NFD")
        .replace(
            /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
            "$1"
        )
        .normalize();
}

var sel, range, base;

export default {
    components: {
        'editor': Editor
    },
    data() {
        return {
            data: {},
            auth: localStorage.getItem("auth"),
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
            showEditorLoading: false,
            showPopSelected: false,
            getSelection: null,
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
            isEdit: false,
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
                editFont: "Arial",
            },
        };
    },
    created() {
        this.contentText = "";
        if (this.$route.name == 'autowriting-new') {
            this.isEdit = false
            localStorage.removeItem('editDocument')
        }
        if (this.$route.name == 'autowriting-edit') {
            this.editor_view = true;
            this.help_view = false;
            this.isEdit = true
            this.editarDoc()
        }
    },
    mounted() {
    },
    computed: {

    },
    methods: {
        editarDoc() {
            const getDocStorage = JSON.parse(
                localStorage.getItem("editDocument")
            );
            console.log(getDocStorage);
            setTimeout(() => {
                console.log(window.tinymce.activeEditor)
                window.tinymce.activeEditor.setContent(getDocStorage.data.content)
                this.fields = getDocStorage.data.fields
            }, 1500);
        },
        countExistentFieldTotal(id) {
            var countTotal = 0;
            this.fields.forEach(element => {
                if (id == element.existent_id) {
                    countTotal++;
                }
            });
            return countTotal;
        },

        actionTeste(event, role) {
            if (role == "font") {
                document.execCommand("fontName", false, this.temp.editFont);
                return;
            }
            switch (role) {
                case "h1":
                case "h2":
                case "p":
                    document.execCommand("formatBlock", false, role);
                    break;
                default:
                    document.execCommand(role, false, null);
                    break;
            }
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
                        content: window.tinymce.activeEditor.getContent(),
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
        mouseoverfield(index) {
            var element = this.fields[index].element;
            element.className = "text-map-hover";
            console.log(element);
        },
        mouseleavefield(index) {
            var element = this.fields[index].element;
            element.classList.remove("text-map-hover");
            console.log(element);
        },

        addExistentField(event, index) {
            this.replaceforExistent = true;
            this.replaceforExistentIndex = index;
            this.replaceSelectedText(event);
        },

        openModalChangeText() {


            sel = window.tinymce.activeEditor.selection.getContent()
            base = sel
                .anchorNode.data.substring(
                    window.getSelection().anchorOffset,
                    window.getSelection().extentOffset
                );
            range = sel.getRangeAt(0);

            let selection = sel
                .anchorNode.textContent.substring(
                    window.getSelection().extentOffset,
                    window.getSelection().anchorOffset
                );

            if (selection.length !== 0) {
                //open popup in cursor
                var event;
                // const onMouseMove = (e) => {
                //   var popup = document.querySelector("#popup-selected-text");
                //   popup.style.left = e.pageX + 20 + "px";
                //   popup.style.top = e.pageY + 20 + "px";
                //   popup.style.visibility = "visible";
                //   document.removeEventListener("mousemove", onMouseMove);
                // };

                // var event = document.addEventListener("mousemove", onMouseMove);
            }
        },



        openAddField() {
            $('#staticBackdrop4').modal('show');
        },

        replaceSelectedText(e) {
            console.log(this.fields)
            e.preventDefault();
            if (this.replaceforExistent) {
                var element = this.fields[this.replaceforExistentIndex].element;
                this.replace_text.target = element.getAttribute("replace");
                // this.replaceforExistent = false;
            }
            // range.deleteContents();

            var a = document.createElement("a");
            a.innerText = "[" + this.replace_text.target + "]";
            a.className = "text-map";
            a.className = "testeo";
            var id = Math.ceil(Math.random() * 1000000);
            a.setAttribute("data-id", id);
            a.setAttribute("replace", this.replace_text.target);
            a.setAttribute(
                "base",
                base
            );

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
                    base: base
                };
                this.replaceforExistent = false;


                this.fields[this.replaceforExistentIndex].existent_fields.push(newField)
            } else {
                newField = {
                    existent: false,
                    field: this.replace_text.target,
                    element: a,
                    id: id,
                    replace: this.replace_text.target,
                    base: base
                };
            }

            this.fields.push(newField);

            window.tinymce.activeEditor.selection.setContent(`${this.replace_text.target}`)
            window.tinymce.activeEditor.selection.setNode(a);

            this.replace_text.target = null;
            // var popup = document.querySelector("#popup-selected-text");
            // popup.style.visibility = "hidden";
            $('#staticBackdrop4').modal('hide');
        },

        next() {
            this.text_view = true;

            this.help_view = false;

            this.categories_view = false;

            setTimeout(() => {
                ["mouseup", "keyup", "selectionchange"].forEach((e) => {
                    document
                        .querySelector("#editor3")
                        .addEventListener(e, this.openModalChangeText);
                });
            }, 1000);
        },

        startText() {

        },
    },
};
</script>
  
<script setup>
import columnLeft from "@/components/platform/left.vue";
import navBar from "@/components/platform/navbar.vue";
import { Editable } from "@livingdocs/editable.js/src/core";
</script>