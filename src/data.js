// data.js is going to signify our data store

// to access the local storage as a variable
const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson)

export default {
    getAllPages() {
        return pagesStore;
    },

    getSinglePage(index) {
        return pagesStore[index];
    }
}