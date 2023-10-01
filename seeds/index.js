const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedArticles = require('./articlesData');
const seedComments = require('./commentsData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedArticles();

    await seedComments();

    process.exit(0);
};

seedAll();

