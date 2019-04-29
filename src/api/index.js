//import axios from "axios";

// 폴더가져오기
function getFolderList() {
    return new Promise(function(resolve, reject){
       var folderlist = JSON.parse(localStorage.getItem("folderList"));
       if (folderlist) {
           resolve(folderlist);
       } else {
           reject(new Error("Request is failed"));
       }
    });
}

// 폴더별 todolist
function getTodoList(id){
    return new Promise(function(resolve, reject){
       const item = JSON.parse(localStorage.getItem(id));
       if(id){
           resolve(item);
       } else{
           reject(new Error("Request is failed"));
       }
    });
}

// 폴더 생성
function addFolder(){

} 

// todo 추가
function addTodo(){

}

// 폴더 삭제
function deleteFolder(){

}

// todo 삭제
function deleteTodo(){

}

// 폴더 수정
function updateFolderName() {

}

// todo 수정
function updateTodo() {

}

export {
    getFolderList,
    getTodoList,
    addFolder,
    addTodo,
    deleteFolder,
    deleteTodo,
    updateFolderName,
    updateTodo,
}