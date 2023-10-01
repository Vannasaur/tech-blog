const { Users } = require('../models');

const usersData = [
    {
        user_name: 'VannaL',
        email: 'vanna@vanna.com',
        password: 'password123'
    },
    {
        user_name: 'PercyB',
        email: 'percy@percy.com',
        password: 'password123'
    },
    {
        user_name: 'VenusG',
        email: 'venus@venus.com',
        password: 'password123'
    }
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;