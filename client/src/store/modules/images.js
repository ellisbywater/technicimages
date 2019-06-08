import axios from 'axios'

const state = {
    images: []
}

const getters = {
    getImageList(state) {return state.images }
}

const actions = {
    async fetchImageList({ commit }) {
        const response = await axios.get('/api/images', {headers: {ContentType: 'application/json'}})
        commit('setImageList', response.data)
    }
}

const mutations = {
    setImageList: (state, images) => (state.images = images),
}

export default {
    state,
    getters,
    actions,
    mutations
}