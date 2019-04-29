<template>
    <div>
        <div class="folder-list">
            <ul>
                <li v-for="(item, index) in getFolderList" v-bind:key="index">
                    <i class="fas fa-list-ul"></i>
                    <router-link v-bind:to="`/forders/${item}`">{{item}}</router-link> 
                </li>
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
import { mapGetters } from 'vuex';


export default {
    created() {
        this.$store.dispatch("fetchFolder")
        .then(()=> {
            
        })
        .catch(error => {
          alert(error);
        });
    },
    computed : {
        ...mapGetters(['getFolderList'])
    }
}
</script>

<style scoped>


ul {
    padding-left: 20px;
    width: 100%;
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
 margin-top:auto;
}

.folder-list__footer > button {
    width: 100%;
    height: 50px;
    
}
</style>
