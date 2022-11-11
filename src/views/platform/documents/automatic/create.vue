<template> 


<div style="width: 1px !important; height: 100vh !important;background:black;position:fixed;top:0;bottom:0;z-index:3000" class="line-ranger"></div>
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
          <div class="col text-center create-doc-writing" style="height: auto !important;padding:0 !important">

            <div id="cke_ruler_wrap"></div>

            <div class="document-editor" style="height: 100vh !important;max-height: calc(100vh - 80px) !important;">
    <div class="document-editor__toolbar"></div>
    <div class="document-editor__editable-container" style="height: 100vh !important;">
        <div class="document-editor__editable" ref="editorDom" style="height: 100vh !important;">
            Editor content is inserted here.
        </div>
    </div>
</div>



            </div>
            </div>
            </div>
            </main>
       
</template>

<style>
    /*! nouislider - 9.0.0 - 2016-09-29 21:44:03 
*
* Edited by Aleksandra Shinkevich (a.shinkevich@lovata.com), LOVATA
* 
*/

#cke_ruler_wrap {
    width: 780px;
    margin: 0 auto;
    display: block;
}

.cke_wysiwyg_frame {
    height: calc(100% - 50px) !important;
    margin-top: 15px !important;
}

.noUi-target,
.noUi-target * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-touch-action: none;
    touch-action: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.noUi-target {
    position: relative;
    direction: ltr
}

.noUi-base {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    margin-top: 25px;
}

.noUi-connect {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0
}

.noUi-origin {
    position: absolute;
    height: 0;
    width: 0
}

.noUi-handle {
    position: relative;
    z-index: 1
}

.noUi-state-tap .noUi-connect,
.noUi-state-tap .noUi-origin {
    -webkit-transition: top .3s, right .3s, bottom .3s, left .3s;
    transition: top .3s, right .3s, bottom .3s, left .3s
}

.noUi-state-drag * {
    cursor: inherit!important
}

.noUi-base,
.noUi-handle {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.noUi-horizontal {
    height: 10px
}

.noUi-horizontal .noUi-handle {
    width: 10px;
    height: 24px;
    left: -5px;
    top: -4px
}

.noUi-target {
    background: transparent;
    border-radius: 4px;
}

.noUi-connect {
    background: rgba(87, 149, 224, 0.25);
    -webkit-transition: background 450ms;
    transition: background 450ms
}

.noUi-draggable {
    cursor: w-resize
}

.noUi-handle {
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    background: #FFF;
    cursor: ew-resize;
    box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB
}

.noUi-active {
    box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB
}

.noUi-handle:after,
.noUi-handle:before {
    content: "";
    display: block;
    position: absolute;
    height: 10px;
    width: 1px;
    background: #E8E7E6;
    left: 2px;
    top: 6px
}

.noUi-handle:after {
    left: 5px
}

[disabled] .noUi-connect {
    background: #B8B8B8
}

[disabled] .noUi-handle,
[disabled].noUi-handle,
[disabled].noUi-target {
    cursor: not-allowed
}

.noUi-pips,
.noUi-pips * {
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.noUi-pips {
    position: absolute;
    color: #999
}

.noUi-value {
    position: absolute;
    text-align: center;
    bottom: 18px;
}

.noUi-value-sub {
    color: #ccc;
    font-size: 9px;
}

.noUi-marker {
    position: absolute;
    background: #CCC;
    bottom: 0;
}

.noUi-marker-large,
.noUi-marker-sub {
    background: #AAA
}

.noUi-pips-horizontal {
    padding: 10px 0;
    height: 25px;
    bottom: 0;
    left: 0;
    width: 100%
}

.noUi-value-horizontal {
    -webkit-transform: translate3d(-50%, 50%, 0);
    transform: translate3d(-50%, 50%, 0);
    font-size: 9px;
}

.noUi-marker-horizontal.noUi-marker {
    margin-left: -1px;
    width: 1px;
    height: 4px
}

.noUi-marker-horizontal.noUi-marker-sub {
    height: 5px
}

.noUi-marker-horizontal.noUi-marker-large {
    height: 8px
}

.noUi-tooltip {
    display: block;
    position: absolute;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    background: #fff;
    color: #000;
    padding: 5px;
    text-align: center
}

.noUi-horizontal .noUi-tooltip {
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    left: 50%;
    bottom: 120%
}


  .document-editor {
      border: 1px solid var(--ck-color-base-border);
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
      box-shadow: 0 0 5px hsla( 0,0%,0%,.2 );

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
      padding: calc( 2 * var(--ck-spacing-large) );
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

      border: 1px hsl( 0,0%,82.7% ) solid;
      border-radius: var(--ck-border-radius);
      background: white;

      /* The "page" should cast a slight shadow (3D illusion). */
      box-shadow: 0 0 5px hsla( 0,0%,0%,.1 );

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
      line-height: calc( 1.7 * var(--ck-line-height-base) * var(--ck-font-size-base) );
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
      color: hsl( 203, 100%, 50% );
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
      margin-left: calc( 2 * var(--ck-spacing-large) );
      margin-right: calc( 2 * var(--ck-spacing-large) );
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
    border: 1px hsl( 0,0%,82.7% ) solid;
    border-radius: var(--ck-border-radius);
    background: white;
    box-shadow: 0 0 5px hsla( 0,0%,0%,.1 );
    margin: 0 auto;
}

#cke_ruler_wrap {
    width: 600px;
    margin: 0 auto;
    display: block;
}
</style>
<script>
  import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
  import noUiSlider from "nouislider"
const rectWidth = 160;
const rectHeight = 200;
  // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  
  export default { 
    
      data() {
          return {
              // editor: DecoupledEditor,
              editorData: '<p>Content of the editor.</p>',
              scale: 2, //658813476562495, //1,
            startX: 0,
            startY: 0,
            lines: {
                h: [100, 200],
                v: [100, 200]
            },
            thick: 20,
            isShowRuler: true,
            isShowReferLine: true
          };
      },
      mounted() {

         


        // var $ckeContent = $(editor.element.$).siblings('.cke').find('.cke_contents');
        //     $ckeContent.prepend('<div id="cke_ruler_wrap"></div>');
        var width = 600;
        var leftLine;
        var test  = {
                values: 21, // segment number of the ruler
                step: 0.25, // accuracy of sliders
                sliders: {
                    left: 2, // left slider value
                    right: 19 // right slider value (21-19 = 2)
                },
                padding: {
                    top: 20, // top 'canvas' padding (px)
                    bottom: 20 // bottom 'canvas' padding (px)
                }
            };

            var range = document.getElementById('cke_ruler_wrap');
            // setPadding([configs.sliders.left, configs.sliders.right]);
            noUiSlider.create(range, {
                start: [test.sliders.left, test.sliders.right],
                margin: 2,
                connect: [false, false, false],
                behaviour: 'drag',
                step: test.step,
                range: {
                    'min': 0,
                    'max': test.values
                },
                pips: {
                    mode: 'count',
                    values: test.values,
                    density: 2
                }
            });



             

        setTimeout(() => {
            var elemtndelete = document.getElementById('[data-handle="0"]');
              elemtndelete.remove()
        },500)
       

            range.noUiSlider.on('slide', function(values) {
               console.log('test',leftLine)

                 var elem = document.querySelector('.line-ranger');
                 elem.style.left =  leftLine+'px'


                 if (values) {
                    test.sliders.left = parseFloat(values[0]);
                    test.sliders.right = parseFloat(values[1]);
                }
                var left = (width / test.values) * test.sliders.left;
                var right = (width / test.values) * (test.values - test.sliders.right);

                 
                var elem = document.querySelector('.noUi-handle-lower');
                 elem.style.left =  (left - 10 )+'px'

                 

                
            });
            range.noUiSlider.on('change', function(values) {
                // setPadding(values);
                console.log(values);

                 

                


                if (values) {
                    test.sliders.left = parseFloat(values[0]);
                    test.sliders.right = parseFloat(values[1]);
                }
                var left = (width / test.values) * test.sliders.left;
                var right = (width / test.values) * (test.values - test.sliders.right);

                 
                var elem = document.querySelector('.noUi-handle-lower');
                 elem.style.left =  (left - 10 )+'px'



                 var elem = document.querySelector('.document-editor__editable');
                 elem.style.padding =  test.padding.top + 'px ' + right + 'px ' + test.padding.bottom + 'px ' + left + 'px'
                // document.getElementById('cke_ruler_wrap')('padding', configs.padding.top + 'px ' + right + 'px ' + configs.padding.bottom + 'px ' + left + 'px');

  

            });
           

            const example =document.querySelector('#app');

example.onmousemove = function(e) { 
      leftLine = e.pageX - e.currentTarget.offsetLeft; 
    const y = e.pageY - e.currentTarget.offsetTop; 
    // console.log(x,y)
}


        console.log(this.$refs['editorDom'])
        DecoupledEditor
    .create( document.querySelector('.document-editor__editable' ), {
        cloudServices: {
            // All predefined builds include the Easy Image feature.
            // Provide correct configuration values to use it.
            // tokenUrl: 'https://example.com/cs-token-endpoint',
            // uploadUrl: 'https://your-organization-id.cke-cs.com/easyimage/upload/'
            // Read more about Easy Image - https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/easy-image.html.
            // For other image upload methods see the guide - https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html.
        }
    } )
    .then( editor => {
        const toolbarContainer = document.querySelector( '.document-editor__toolbar' );

        toolbarContainer.appendChild( editor.ui.view.toolbar.element );

        window.editor = editor;
    } )
    .catch( err => {
        console.error( err );
    } );
      },  
      methods: {
        // onReady( editor )  {
        //     // Insert the toolbar before the editable area.
        //     editor.ui.getEditableElement().parentElement.insertBefore(
        //         editor.ui.view.toolbar.element,
        //         editor.ui.getEditableElement()
        //     );
        // }
    }
  }
</script>
  
<script setup>
  import columnLeft from "@/components/platform/left.vue";
  import navBar from "@/components/platform/navbar.vue"; 
  </script>