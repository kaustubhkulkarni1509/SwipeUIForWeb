const ESClient = require('../config/ElasticSearchClient')
const ProductInputVO = require('../vo/ProductInputVO')

const ProductESRepository = {
    async addProduct(ProductInputVO) {
        const {body} = await ESClient.index({
            index: 'products',
            body: {
                id: ProductInputVO.id, 
                name: ProductInputVO.name,
                description: ProductInputVO.description,
                categories: ProductInputVO.categories
            }
          })
        if(body.result == "created") {
            await ESClient.indices.refresh({ index: 'products' })
        }
        
    },

    async searchProduct(searchTerm) {
        const { body } = await ESClient.search({
            index: 'products',
            body: {
                query: {
                    multi_match : {
                        query:    searchTerm, 
                        fields: [ "name", "description", "categories"] 
                      }
              }
            }
          })
        if (body.hits.hits.length > 0) {
            return body.hits.hits
        } 
        else {
            throw new Error("No products found for given search term")
        }
    }

}

module.exports = ProductESRepository