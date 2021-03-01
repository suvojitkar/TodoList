const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
    copmon: store.collection('copmon'),
    im: store.collection('im')
};