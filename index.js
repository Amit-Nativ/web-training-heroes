const {names, roles, hp} = require('./Exercise 3/ow');

const getHeroes = () => names.map((x,i) => ({name: x, role: roles[i]}));

const groupBy = (arr, key='role') => arr.reduce((result, x) => {
    let group = x[key];
    result[group] = result[group] || [];
    result[group].push(x);

    return result;
}, {});

const getByRoles = (arr, ...keys) => arr.filter(x => keys.includes(x.role));

const makeHeroesNice = (arr) => arr.map(x => x.sayHello = () => (`Hi! my name is ${x.name}, nice to meet you!`));
