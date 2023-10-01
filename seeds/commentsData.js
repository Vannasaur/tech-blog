const { Comments } = require('../models');

const commentsData = [
    {
        content: 'Comment Content 1',
        user_id: 1,
        article_id: 3
    },
    {
        content: 'Comment Content 2',
        user_id: 2,
        article_id: 1
    },
    {
        content: 'Comment Content 3',
        user_id: 3,
        article_id: 2
    }
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;
