<template>
    <div class="color-selection-container">
        <div>Choose a note color:</div>
        <div>
            <div @click="updateSelectedColor('red')" :class="['color-opt', 'red', isSelectedColor('red')]"></div>
            <div @click="updateSelectedColor('green')" :class="['color-opt', 'green', isSelectedColor('green')]"></div>
            <div @click="updateSelectedColor('blue')" :class="['color-opt', 'blue', isSelectedColor('blue')]" style="margin-right: 0px;"></div>
            <div style="clear: both;"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ColorSelection",
        methods: {
            updateSelectedColor(color) {
                this.$store.dispatch('selectColor', color);
            }
        },
        computed: {
            isSelectedColor() {
                return color => color === this.$store.state.selectedColor ? 'active' : '';
            }
        }
    }
</script>

<style scoped>
    .color-selection-container {
        text-align: center;
        margin: 0px auto 15px;
        width: 169px;
    }
    .color-opt {
        height: 20px;
        width: 45px;
        float: left;
        margin-right: 10px;
        cursor: pointer;
        border: 2px solid transparent;
    }
    .red {
        background-color: red;
    }
    .blue {
        background-color: blue;
    }
    .green {
        background-color: green;
    }
    .active {
        border: 2px solid black;
    }
</style>