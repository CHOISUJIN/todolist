<template>
    <div class="todo__input">
        <input type="text" class="todo__input-text">
        <span class="check-icon"><i class="fas fa-check"></i></span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.todo__input { 
    padding: 20px 0;
    position: relative;
}

.todo__input .todo__input-text {
    width: 100%;
   height: 55px;
   border: 1px solid #222;
} 

.check-icon {
    position: absolute;
    top:40%;
    right: 1%;
}
</style>
