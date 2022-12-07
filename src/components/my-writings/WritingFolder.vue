<script setup>
defineProps({
  loadingFolders: {
    type: Boolean,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  treeDisplayData: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="col-12" style="padding-top: 10px; padding-bottom: 0">
    <div class="spinner-border spinner-border-sm" role="status" v-if="loadingFolders">
      <span class="sr-only">Loading...</span>
    </div>
    <ul style="padding: 0; margin: 0; width: 100%; list-style: none" v-if="items.length > 0">
      <li style="padding: 0; margin: 0; width: 100%; list-style: none;" v-for="item in filteredResources" :key="index"
        @click.prevent="getDocumentsByTag(item.id, item.text)">
        <a href="#" style="color: black; font-weight: 600">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>

  <div class="col-12" style="padding-top: 10px; padding-bottom: 10px">
    <a href="#" style="font-size: 13px; font-weight: 600" @click.prevent="openCreateFolderRootModal()">
      <img src="@/assets/admin-add.png" style="width: 20px" />
      Nueva carpeta raiz</a>

    <hr />

    <a href="#" style="font-size: 13px; font-weight: 600" @click.prevent="loadAllDocuments()">
      Todos los documentos</a>

    <hr />

    <Tree id="my-tree-id" ref="my-tree" :custom-options="myCustomOptions" :custom-styles="myCustomStyles"
      :nodes="treeDisplayData"></Tree>

    <span style="font-size: 12px; font-weight: 500" v-if="treeDisplayData.length == 0">No se
      encontraron
      carpetas.</span>
  </div>

  <div class="col-12 text-center" style="
    padding-top: 8.5px;
    padding-bottom: 8.5px;
    border-bottom: 1px solid #e5e5e5;
  ">
    <ul style="
    padding: 0px;
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    align-content: flex-start;
  ">
      <li style="
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      align-content: flex-start;
      margin-bottom: 5px;
    " v-for="(tagSelected, index) in tagsSelected">
        <a href="#" style="
        font-size: 12px;
        padding: 5px;
        background: rgb(234, 234, 234);
        border-radius: 30px;
        display: flex;
        place-content: flex-start;
        align-items: center;
        flex-direction: row;
        padding-left: 10px;
        padding-right: 10px;
      ">{{ tagSelected.text }}
          <a href="#" style="margin-left: 10px" @click="removeFilterTag(index, tagSelected.text)"><i
              class="fas fa-times"></i></a>
        </a>
      </li>
    </ul>
  </div>
</template>