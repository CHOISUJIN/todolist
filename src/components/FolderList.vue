<template>
    <div>
        <div class="folder-list">
            <ul>
                <li><i class="fas fa-list-ul"></i><router-link v-bind:to="`/forders/1`" class="active">폴더1</router-link> </li>
                <li><i class="fas fa-list-ul"></i><router-link v-bind:to="`/forders/1`">폴더1</router-link> </li>
                <li><i class="fas fa-list-ul"></i><router-link v-bind:to="`/forders/1`">폴더1</router-link> </li>
                <li><i class="fas fa-list-ul"></i><router-link v-bind:to="`/forders/1`">폴더1</router-link> </li>
                <li><i class="fas fa-list-ul"></i><router-link v-bind:to="`/forders/1`">폴더1</router-link> </li>
            </ul>
        </div>
        <div class="folder-list__footer">
            <button type="button"> 
                <i class="fas fa-plus"></i>
            </button> 
        </div>
        
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>


ul {
    padding-left: 20px;
}

li {
    list-style: none;
    line-height: 2rem;
}

a {
    color: #000;
    text-decoration: none;
}

ul > li > i {
    padding-right: 10px;
}

.folder-list {
    display: flex;
    flex-direction: columns;
    justify-content: space-around;
}

.folder-list__footer{
    
}

.folder-list__footer > button {
    width: 100%;
    height: 50px;
    
}
</style>
