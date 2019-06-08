<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-3by2">
                <img :src="imageUrl" :alt="author" />
            </figure>
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
