const ProductInputVO = require('../vo/ProductInputVO')
const ProductESRepository = require('../repository/ProductESRepository')
const { nanoid } = require('nanoid');
const { search } = require('../config/ElasticSearchClient');
const { searchProduct } = require('../repository/ProductESRepository');

const ProductService = {

    async addProduct(req) {
        ProductInputVO.id = nanoid();
        ProductInputVO.name = req.body.name;
        ProductInputVO.description = req.body.description;
        ProductInputVO.categories = req.body.categories;
        try {
            await ProductESRepository.addProduct(ProductInputVO)
        }
        catch(e) {
            throw e
        }
    },

    async searchProduct(searchTerm) {
        try {
            await ProductESRepository.searchProduct(searchTerm)
        }
        catch(e) {
            throw e
        }
    }

}

module.exports = ProductService