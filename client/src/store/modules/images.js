import axios from 'axios'

const state = {
    images: [
        {
            id: 1,
            author: 'Ellis',
            url: 'https://picsum.photos/id/100/2500/1656'
        },
        {
            id: 2,
            author: 'Hoower',
            url: 'https://picsum.photos/id/1005/5760/3840'
        }
    ]
}

const getters = {
    getImageList: state => state.images
}

const actions = {
    async fetchImageList({ commit }) {
        const response = await axios.get('https://picsum.photos/v2/list')
        commit('setImageList', response.data)
    }
    
}

const mutations = {
    setImageList: (state, images) => (state.images = images)
}

export default {
    state,
    getters,
    actions,
    mutations
}