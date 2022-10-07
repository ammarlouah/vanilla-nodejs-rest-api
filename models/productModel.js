const products = require('../data/products.json');

function findAll(){
    return new Promise((res,rej)=>{
        res(products);
    })
}

function findById(id){
    return new Promise((res,rej)=>{
        res(products.find(x => x.id === id));
    })
}

module.exports = {
    findAll,
    findById
}