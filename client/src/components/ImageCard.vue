<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-3by2">
                <img :src="imageUrl" :alt="author" />
            </figure>
        </div>
        <div class="card-content">
            <div class="media-content has-text-centered">
                <p class="title has-text-centered">{{ author }}</p>
                <button class="button is-primary is-medium"
                    @click="isModalActive = true">
                    Statistics
                </button>
            </div>
        </div>
        <b-modal :active.sync="isModalActive" :width="640" scroll="keep">
            <image-stats-modal :id="id" :imageUrl="imageUrl" :author="author"></image-stats-modal>
        </b-modal>  
    </div> 
</template>

<script>
import ImageStatsModal from './ImageStatsModal'
export default {
    name: "ImageCard",
    components: {
        ImageStatsModal
    },
    data(){
        return {
            isModalActive: false
        }
    },
    props: {
        imageUrl: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        id: {
            type: String
        }
    }
}
</script>

<style>

</style>
