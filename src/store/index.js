import Vue from 'vue';
import Vuex from 'vuex'
import { getFolderList, getTodoList} from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state :{
        folder : [],
        todo : [],
    },
    getters:{
        getFolderList(state) {
            return state.folder;
        },
        getTodoList(state){
            return state.todo;
        }
    },
    mutations:{
        setFolderList(state, folder){
            state.folder = folder
        },
        setTodoList(state, todo) {
            state.todo = todo
        }
    },
    actions:{
        fetchFolder({commit}){
            getFolderList()
            .then(data => {
                commit("setFolderList", data);
            })
            .catch(error => {
                alert("error : " + error);
            });
        },
        fetchTodoList({commit}, id) {
            getTodoList(id)
            .then(data => {
                commit("setTodoList", data);
            })
            .catch(error => {
                alert("error : " + error);
            })
        }
    }
});