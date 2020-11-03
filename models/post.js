const moment = require('moment');

module.exports = function(sequelize, DataTypes){
    const Posts = sequelize.define('Posts',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            title : { type: DataTypes.STRING },
            description : { type: DataTypes.TEXT }
        }
    );

    Posts.prototype.dateFormat = (date) => (
        moment(date).format('YYYY-MM-DD')
    );
    
    return Posts;
}