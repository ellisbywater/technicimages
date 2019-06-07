<template>
    <div class="card">
        <div class="card-image">
            <img :src="imageUrl" />
        </div>
        <div class="media-content">
            <p class="title is-4">{{ author }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ImageCard",
    props: {
        imageUrl: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>
