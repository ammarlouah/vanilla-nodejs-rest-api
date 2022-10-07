const products = require('../data/products.json');

function findAll(){
    return new Promise((res,rej)=>{
        res(products);
    })
}

module.exports = {
    findAll
}