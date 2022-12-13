import api from '../api'

export default {
    async getCategorias(){
        const result = await api.get("/categories")
        return result.data;
    },
}