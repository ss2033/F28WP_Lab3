const getCatalogue = (request, response) => {
    const catalogServices = require('../services/productServices');
    catalogServices.searchService(function(err, rows) {
        response.render('catalog', { products: rows });
        console.log(products);
    });
};

const getProductByID = (request, response) => {
    const catalogServices = require('../services/productServices');
    let reference = request.params.reference;
    catalogServices.searchIDService(reference, function(err, rows) {
        // console.log(rows);
        response.render('article', { product: rows });
    });
};

const getProductsByCategory = (request, response) => {
    const catalogServices = require('../services/productServices');
    let reference = request.params.category;
    catalogServices.searchCategoryService(category, function(err, rows) {
        response.render('catalog', { products: rows });
    });
};

module.exports = {
    getCatalogue,
    getProductByID,
    getProductsByCategory
};