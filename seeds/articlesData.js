const { Articles } = require('../models');

const articlesData = [
    {
        title: 'Why is Rick so smart?',
        content: 'Was he born smart? I know he was smart even before he invented the portal gun. But maybe he keeps getting smarter and smarter because of the mega seeds? Please share your thoughts and opinions!',
        user_id: 1,
    },
    {
        title: 'What would you ask Mr.Meeseeks to do for you?',
        content: 'I would ask Mr.Meeseeks to help me figure out a way to be successful in every aspect of life.',
        user_id: 2,
    },
    {
        title: 'Who do you think the true villain of Rick and Morty is?',
        content: 'I think the obvious answer is Evil Morty, but there seems to be some discourse when it comes to this.',
        user_id: 3,
    }
];

const seedArticles = () => Articles.bulkCreate(articlesData);

module.exports = seedArticles;
