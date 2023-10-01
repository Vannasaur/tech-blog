const { Articles } = require('../models');

const articlesData = [
    {
        title: 'BlogPost1',
        content: 'Content1',
        user_id: 1,
    },
    {
        title: 'BlogPost2',
        content: 'Content2',
        user_id: 2,
    },
    {
        title: 'BlogPost3',
        content: 'Content3',
        user_id: 3,
    }
];

const seedArticles = () => Articles.bulkCreate(articlesData);

module.exports = seedArticles;
