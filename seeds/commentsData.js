const { Comments } = require('../models');

const commentsData = [
    {
        content: 'I think the true villain is supposed to be Rick. He is unhappy and his knowledge and trauma turns him into an intergalactic douche. He hurts everyone around him and has not really made the world a better place. He treats Morty like some sort of object that he takes with him to mask his brainwaves.',
        user_id: 1,
        article_id: 3
    },
    {
        content: 'I think he was born a genius, he was a scientist in the flashbacks making a lot of cool stuff. But I do not think his brains are genetic because the rest of the family seems pretty daft in comparison. His overwhelming knowledge does make him a prick though.',
        user_id: 2,
        article_id: 1
    },
    {
        content: 'I dunno if that is the best idea. Mr.Meeseeks are meant to help you with easy tasks. I would carry a Meeseeks box with me and have them open jars that have stuck lids or small little tasks that are not too difficult but would make my life easier.',
        user_id: 3,
        article_id: 2
    }
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;
