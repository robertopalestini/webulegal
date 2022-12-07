import { defineStore } from 'pinia'

const BASE_API_URL = 'http://localhost:4000/api'

export const useWritingStore = defineStore({
  id: 'writings',
  state: () => ({
    documents: []
  }),
  getters: {

  },
  actions: {
    compartirPrivado(email, documentId) {
      return new Promise((resolve, reject) => {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            documentId
          })
        };
        fetch(BASE_API_URL + "/writings/share/private", requestOptions)
          .then(response => response.json())
          .then(() => {
            resolve(true)
          })
      })
    },
    loadAllDocuments(auth) {
      return new Promise((resolve, reject) => {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            auth,
          }),
        };
        fetch(BASE_API_URL + "/writings/get/documents", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            this.documents = data
            resolve(true)
          });
      })
    },
    loadFolders(auth) {
      return new Promise((resolve, reject) => {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            auth,
          }),
        };
        fetch(BASE_API_URL + "/writings/get/folders", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            resolve(data)
          });
      })
    }
  }
})
