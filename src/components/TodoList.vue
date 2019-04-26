<template>
    <div class="todo-list">
        <ul>
            <li> 
                <input type="checkbox"/>
                로우니 잔소리 듣기 
            </li>
            <li> 
                <input type="checkbox"/>
                로우니한테 혼나기 
            </li>
            <li> 
                <input type="checkbox"/>
                로우니한테 칭찬받기 
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

ul {
    padding: 0;
}

li {
    list-style: none;
    line-height: 1.8rem;
    border : 1px solid #eaeaea;
    margin-bottom: 1.5%;
    padding: 5px 10px;
}

</style>
