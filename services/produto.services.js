import api from '../api'

export default {
    async getProduto(){
        const result = await api.get("/products")
        return result.data;
    },
    async getProdutos(id){
        const result = await api.get(`/products/${id}`)
        return result.data;
    },
    async createProduto(data){
        data.createdAt = new Date().toLocaleDateString();
        const result = await api.post("/products", data)
        return result.data;
    }

};