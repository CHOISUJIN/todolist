<template>
    <div class="todo-list">
        <ul>
            <li> 
                <input type="checkbox"/>
                로우니 잔소리 듣기 
                <span class="remove-icon">
                     <i class="fas fa-times"></i>
                </span>
                
            </li>
            <li> 
                <input type="checkbox"/>
                로우니한테 혼나기 
                 <span class="remove-icon">
                     <i class="fas fa-times"></i>
                </span>
            </li>
            <li> 
                <input type="checkbox"/>
                로우니한테 칭찬받기 
                 <span class="remove-icon">
                     <i class="fas fa-times"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.todo-list {
   
}

.todo-list ul {
    padding: 0;
}

.todo-list li {
    list-style: none;
    line-height: 1.8rem;
    border : 1px solid #eaeaea;
    margin-bottom: 1.5%;
    padding: 5px 10px;
    position: relative;
}

.remove-icon {
    position: absolute;
    top: 12%;
    right: 2%;
}
</style>
