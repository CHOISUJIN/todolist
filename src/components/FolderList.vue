<template>
    <div class="folder-list">
        <ul>

            <li><i class="fas fa-list-ul"></i><router-link v-bind:to="`/forders/1`" class="active">폴더1</router-link> </li>
            <li><i class="fas fa-list-ul"></i><router-link v-bind:to="`/forders/1`">폴더1</router-link> </li>
            <li><i class="fas fa-list-ul"></i><router-link v-bind:to="`/forders/1`">폴더1</router-link> </li>
            <li><i class="fas fa-list-ul"></i><router-link v-bind:to="`/forders/1`">폴더1</router-link> </li>
            <li><i class="fas fa-list-ul"></i><router-link v-bind:to="`/forders/1`">폴더1</router-link> </li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.folder-list { 
    flex-grow: 0.45;
    border:1px solid #000;   
}

ul {
    padding-left: 20px;
}

li {
    list-style: none;
    line-height: 1.8rem;
}

a {
    color: #000;
    text-decoration: none;
}

ul > li > i {
    padding-right: 10px;
}

/* a.active {
    color:cornflowerblue;
    font-size: 1.2rem;
} */

</style>
