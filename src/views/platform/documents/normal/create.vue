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
        <div class="col-md-10 create-doc-normal" style="padding-top: 0">
          <div class="row" v-if="editor_view">
            <div class="col-12 text-left" style="position: absolute; padding-top: 20px">
              <a href="@" @click.prevent="$router.go(-1)">
                <img src="@/assets/flecha-izquierda.svg" style="height: 20px; width: 20px" />
              </a>
            </div>

            <div>
              <div class="editor-wrapper" style="overflow:hidden;">
                <editor id="crearEscrito" api-key="9a51lim0mxaojg1o8fhwtga2lfro3fnyw6k21n3r146f7weq"
                  v-html="editDocument" :init="{
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
            <!-- <div id="cke_ruler_wrap"></div> -->

            <div class="col-12" style="position: relative; margin-top:15px" v-if="editor_view">
              <div class="text-center">
                <button type="submit" class="btn btn-primary" style="width: 120px; position: relative" disabled="true"
                  v-if="shopsavepop">
                  <div class="spinner-border text-light spinner-border-sm" role="status" style="
                      width: 15px;
                      height: 15px;
                      border-width: 1px;
                      margin: 0;
                      align-content: center;
                      justify-content: center;
                      align-items: center;
                    ">
                    <span class="sr-only">Loading...</span>
                  </div>
                </button>
              </div>

              <!-- v-if="popshared" -->
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
                " v-if="shopsavepop">
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
                    @click="popshared = false">
                    <span aria-hidden="true">×</span>
                  </button>

                  El archivo de biblioteca se guardará en tu carpeta privada “Mi
                  biblioteca”. ¿Querés compartirlo con la comunidad legal?
                  <div class="col-12 text-right" style="display: flex">
                    <button class="btn btn-primary" style="margin: 5px" @click="saveShare(1)"
                      :disabled="saveLoadingShareDisabled">
                      <span v-if="!saveLoadingShare">Si</span>
                      <div class="spinner-border spinner-border-sm" role="status" v-if="saveLoadingShare" style="
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
                      <div class="spinner-border spinner-border-sm" role="status" v-if="saveLoadingNtShare" style="
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

          <div class="text-center">
            <button type="submit" class="btn btn-primary" style="width: 120px; position: relative" @click="openOrg()"
              v-if="!shopsavepop">
              Crear
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- 
<div id="editor3"   style="width:100%;padding:20px;outline:none !important;border:1px solid dashed #D9D9D9 !important "  contenteditable="true" class="text-left"  >
  

</div>
 -->
</template>
<style>
@import "@/assets/platform.css";

.btn-attach {
  background: #efeded;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: #6e6e6e;
}

/* 
.text-map {
  border-bottom: 1px solid transparent;
}

.text-map:hover {
  border-bottom: 1px solid #3C00FF;
}

.text-map-hover {
  border-bottom: 1px solid #3C00FF;
  background: #3000FF;
  color: white;
}

.categorieActive {
  border: 1px solid #2b44ff !important;
  color: #2b44ff !important;
}
*/
.ql-toolbar.ql-snow+.ql-container.ql-snow {
  border-top: 0px;
  border-top: 1px solid #cfcfcf;
}

.ql-toolbar.ql-snow {
  border: 1px solid #d1d5db;
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  padding: 8px;
  border: none;
  margin-left: 3vw;
  text-align: left;
}

.ql-toolbar.ql-snow+.ql-container.ql-snow {
  border-top: 0px;
  background: white;
  border: transparent;
}

/* 
.ql-video,
.ql-image,
.ql-link,
.ql-size,
.ql-code-block {
  display: none !important;
} */

#toolbarViewer {
  height: 32px;
  background: #f4f2f2 !important;
}

iframe {
  border: 1px solid #bbbbbb;
  border-radius: 8px;
  width: 100% !important;
}

.ql-attachment {
  background-color: red;
}

/* .ql-toolbar.ql-snow {
  border: 1px solid #d1d5db;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  padding: 8px;
  border: none;
  top: 0;
  position: sticky;
  z-index: 1000;
  background: #f4f2f2;
} */
</style>

<script setup>
import columnLeft from "@/components/platform/left.vue";
import navBar from "@/components/platform/navbar.vue";
import { Editable } from "@livingdocs/editable.js/src/core";
import Editor from '@tinymce/tinymce-vue'

</script>

<script>
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import { Quill, QuillEditor } from "@vueup/vue-quill";
import QuillImageDropAndPaste from "quill-image-drop-and-paste";
import quillTable from "quill-table";
import { ImageHandler, VideoHandler, AttachmentHandler } from "quill-upload";
import BaseHandler from "quill-upload/src/handlers/BaseHandler";
import { AttachmentBlot } from "quill-upload/src/blots";

Quill.register("blots/attachment", AttachmentBlot);
// register quill-upload
Quill.register("modules/imageHandler", ImageHandler);
Quill.register("modules/videoHandler", VideoHandler);
Quill.register("modules/attachmentHandler", AttachmentHandler);
Quill.register("modules/imageDropAndPaste", QuillImageDropAndPaste);
Quill.register(quillTable.TableCell);
Quill.register(quillTable.TableRow);
Quill.register(quillTable.Table);
Quill.register(quillTable.Contain);
Quill.register("modules/table", quillTable.TableModule);

export default {
  components: {
    QuillEditor,
    'editor': Editor
  },
  data() {
    return {
      data: {},
      auth: localStorage.getItem("auth"),
      endpointUpload: window.ENDPOINT + "/upload",
      endpoint: window.ENDPOINT + "/documents/save",
      quill: null,
      toolbarOptions: null,
      addCampos: null,
      endpointShare: window.ENDPOINT + "/documents/save",
      popshared: false,
      editor_view: true,
      categories_view: false,
      searchInputTags: null,
      showEditorLoading: false,
      showPopSelected: false,
      getSelection: null,
      replace_text: null,
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
      attachFiles: [],
      contentText: null,
    };
  },
  created() {
    const maxRows = 10;
    const maxCols = 5;
    const tableOptions = [];
    for (let r = 1; r <= maxRows; r++) {
      for (let c = 1; c <= maxCols; c++) {
        tableOptions.push("newtable_" + r + "_" + c);
      }
    }

    const addCampos = "ql-customb";

    this.toolbarOptions = [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      // ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["image", "video", "attachment"],
      // [{ table: tableOptions }, { table: 'append-row' }, { table: 'append-col' }],

      ["clean"], // remove formatting button
    ];
  },
  mounted() {
    // if (this.$route.name == 'document-edit') {
    const getDocStorage = JSON.parse(
      localStorage.getItem("editDocumentPrivate")
    );
    console.log(getDocStorage);
    this.data = getDocStorage;
    this.contentText = getDocStorage.data.content;
    this.fields = getDocStorage.data.fields;
    // } else if (this.$route.name == 'document-new') {
    //   localStorage.removeItem('editDocumentPrivate')
    //   console.log('aaaa' + this.contentText)
    //   this.contentText = null
    //   this.fields = []

    // }

    setTimeout(() => {
      this.quill = new Quill("#editor", {
        theme: "snow",
        placeholder:
          "Pega o escribi aca el contenido legal que quieras agregar.",
        modules: {
          // table: true,
          toolbar: this.toolbarOptions,
          attachmentHandler: {
            upload: (file) => {
              // return a Promise that resolves in a link to the uploaded image
              return new Promise((resolve) => {
                const fd = new FormData();

                fd.append("file", file);
                fd.append("name", file.name);

                this.attachFile(fd);
              });
            },
          },
        },
      });
      this.changeButtonForQuill()
    }, 1000);



    // document
    //   .querySelector("#editor3")
    //   .addEventListener("paste", (e) => {
    //     e.preventDefault();
    //     var contentOnBlur = (e.originalEvent || e).clipboardData.getData('text/html') || prompt('Paste something..');
    //     // contentOnBlur = contentOnBlur.replace(/(<([^>]+)>)/ig,'');
    //     contentOnBlur = striptags(contentOnBlur, ['span', 'table', 'tbody', 'tr', 'td', 'h1', 'h2', 'h3', 'h4', 'h5', 'b', 'em', 'strong', 'br', 'u', 'strike', 'p']);
    //     document.execCommand('insertHtml', false, contentOnBlur.replace(/[\s;]background-color:[^;]+(?=;)|^background-color:[^;]+;/g, '').replace(/[\s;]color:[^;]+(?=;)|^color:[^;]+;/g, ''));
    //   })

    //   document.querySelector('#editor3').addEventListener('paste', (event) => {

    //      let paste = (event.clipboardData || window.clipboardData).getData('text');
    //       paste.replace(/<[^>]*>?/gm, '');

    //     const selection = window.getSelection();
    //     if (!selection.rangeCount) return false;
    //     selection.deleteFromDocument();
    //    selection.getRangeAt(0).insertNode(document.createTextNode(paste));

    //     event.preventDefault();
    // });
  },
  computed: {},
  methods: {
    crearPaginas() {
      const new_div = document.createElement("div");

      const total_elements_kept = 8;

      // Move the children of the original div into the new div
      Array.from(document.querySelector("#editor").children)
        .slice(total_elements_kept)
        .forEach(function (elm) {
          new_div.appendChild(elm).classList.add("margin-bottom: 10px");
        });
    },

    attachFile(fd) {
      this.$Progress.start();
      console.log(fd);

      fetch(this.endpointUpload, {
        method: "POST",
        body: fd,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            const url = window.PATHUPLOAD + data.data.name;

            // if(data.data.ext === ".doc") {
            if (data.data.ext.startsWith(".doc")) {
              // $('#editor3').append(` <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=https://www.mtsac.edu/webdesign/accessible-docs/word/example03.docx" width="100%" height="500px"></iframe><br/><p></p>`)
              this.quill = $(".ql-editor").append(
                ` <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=` +
                url +
                `" width="100%" height="500px"></iframe><br/><p></p>`
              );
            }

            if (data.data.ext === ".pdf") {
              this.quill = $(".ql-editor").append(
                ` <iframe src="` +
                url +
                `" width="100%" height="500px"></iframe><br/><p></p>`
              );
            }

            // if(data.data.ext === ".xls") {
            if (data.data.ext.startsWith(".xl")) {
              // $('#editor3').append(` <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=https://dornsife.usc.edu/assets/sites/298/docs/ir211wk12sample.xls" width="100%" height="500px"></iframe><br/><p></p>`)

              this.quill = $(".ql-editor").append(
                ` <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=` +
                url +
                `" width="100%" height="500px"></iframe><br/><p></p>`
              );
            }
            this.attachFiles.push(data.data);

            this.$Progress.finish();
          }
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    actionTeste(event, role) {
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
      if (value == 1) {
        this.save();
        this.saveLoadingShare = true;
        this.saveLoadingNtShareDisabled = true;
        this.saveLoadingShareDisabled = true;
        this.$router.push({
          name: "document-organize",
          params: { id: this.data._id },
        });
      } else {
        this.save();
        this.saveLoadingNtShare = true;
        this.saveLoadingShareDisabled = true;
        this.saveLoadingNtShareDisabled = true;
        this.popshared = false;

        // this.$toast.success("Archivo creado", { position: "bottom-right" })

        // setTimeout(() => {
        //      this.$router.push({ name: 'my-writings-view-automatic-document', params: { id: this.data.id }})
        //  },1500)
      }
    },
    openOrg() {
      this.shopsavepop = true;
    },

    save() {
      this.contentText = this.quill.container.innerHTML;
      console.log(this.quill.container.innerHTML);
      // this.quill.setHTML('<div>Hello</div>');
      var temp = [];
      var copy = this.fields;
      for (var i = copy.length - 1; i >= 0; i--) {
        copy[i].element = null;
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
            type: "document",
            content: this.contentText,
            // fields: temp,
            title: "Documento sin titulo", //this.titleDocument,
            description: "Documento sin descripcion", //this.descriptionDocument,
            categories: [],
            tags: [],
            attachment: this.attachFiles,
          },
        }),
      };

      const asiNo = `<div class="ql-editor ql-blank" data-gramm="false" contenteditable="true" data-placeholder="Pega o escribi aca el contenido legal que quieras agregar."><p><br></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div><div><div id="__ID_SPLIT__.QUILL-LOADING">
              <span class="quill-progress"></span>
            </div>
            </div>`;

      if (this.contentText == asiNo) {
        this.$toast.error("Completar", { position: "bottom-right" });
        this.saveLoadingShare = false;
        this.saveLoadingShareDisabled = true;
        this.saveLoadingNtShareDisabled = true;
        this.shopsavepop = false;
      } else {
        fetch(this.endpoint, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            this.shopsavepop = false;
            this.popshared = true;
            this.$toast.success("Archivo creado", { position: "bottom-right" });
            setTimeout(() => {
              this.$router.push({
                name: "view-automatic-document",
                params: { id: this.data.id },
              });
            }, 1500);
            this.data = data;
          });
      }
    },

    next() {
      this.text_view = true;

      this.help_view = false;

      this.categories_view = false;
    },
    changeButtonForQuill() {
      const se = document.querySelectorAll('.ql-attachment')
      se.innerHTML(`<button type="submit" class="btn btn-primary" style="width:200px;position:relative;z-index:1000; "
                        @click="openAddField()">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px"
                            fill="#FFFFFF">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg> Nuevo campo
                    </button>`)
      se.removeChild()
      se.insertNode((`<button type="submit" class="btn btn-primary" style="width:200px;position:relative;z-index:1000; "
                        @click="openAddField()">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px"
                            fill="#FFFFFF">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg> Nuevo campo
                    </button>`))



    }
  },
};
</script>
