const heroes = require('./Exercise 3/ow');

const names = [...heroes.names];
const roles = [...heroes.roles];
const hp = [...heroes.hp];

const getHeroes = () => names.map((x,i) => ({name: x, role: roles[i]}));

const groupBy = (arr, key='role') => arr.reduce((result, x) => {
    let group = x[key];
    result[group] = result[group] || [];
    result[group].push(x);

    return result;
}, {});

const getByRoles = (arr, ...keys) => arr.filter(x => keys.includes(x.role));


console.log(getByRoles(getHeroes(), 'Support', 'Defense'));