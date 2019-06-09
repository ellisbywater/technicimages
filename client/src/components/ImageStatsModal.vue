<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="imageUrl" alt="Image">
            </figure>
        </div>
        <div class="card-content">
            <div v-if="loading">
                <p>Loading</p>
            </div>
            
            <div v-else>
               <h3 class="has-text-weight-medium">Downloads</h3> 
               <ul>
                   <li>Total: {{stats.downloads.total}}</li>
                   <li>Last 30 Days: {{stats.downloads.historical.change}}</li>
                   <li>Most Recent Download: {{
                       stats.downloads.historical.values[stats.downloads.historical.values.length -1].date
                       }}
                    </li>
               </ul>
               <h3 class="has-text-weight-medium">Views</h3> 
               <ul>
                   <li>Total: {{stats.views.total}}</li>
                   <li>Last 30 Days: {{stats.views.historical.change}}</li>
                   <li>Most Recent View: {{
                       stats.views.historical.values[stats.views.historical.values.length -1].date
                       }}
                    </li>
               </ul>
            </div>
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
