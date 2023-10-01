const Users = require('./Users');
const Articles = require('./Articles');
const Comments = require('./Comments');

Users.hasMany(Articles, {
    foreignKey: 'article_id',
    onDelete: 'CASCADE'
});

Articles.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Articles.hasMany(Comments, {
    foreignKey: 'article_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {
    foreignKey: 'user_id'
});

Users.hasMany(Comments, {
    foreignKey: 'user_id'
});

Comments.belongsTo(Articles, {
    foreignKey: 'article_id'
});

module.exports = { Users, Articles, Comments };