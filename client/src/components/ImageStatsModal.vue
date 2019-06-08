<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="imageUrl" alt="Image">
            </figure>
        </div>
        <div class="card-content">
            <p v-if="loading">Loading</p>
            <p v-else>Downloads {{stats.downloads.total}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ImageStatsModal',
    data() {
        return {
            stats: null,
            loading: true,
            activeID: this.id
        }  
    },
    mounted() {
        axios.get(`/api/image/${this.id}`)
        .then(response => {
            this.stats = response.data
            this.loading = false
            console.log(response)
        })
    },
    props: {
        imageUrl: {
            type: String
        },
        author: {
            type: String
        },
        id: {
            type: String
        }
    }
}
</script>

<style>

</style>
