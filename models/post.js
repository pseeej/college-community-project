const moment = require('moment');

module.exports = function(sequelize, DataTypes){
    const Posts = sequelize.define('posts',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            post_id:{type: DataTypes.INTEGER, primaryKey: true},
            title : { type: DataTypes.TEXT },
            description : { type: DataTypes.TEXT }
        }
    );

    Posts.prototype.dateFormat = (date) => (
        moment(date).format('YYYY-MM-DD')
    );
    
    return Posts;
}