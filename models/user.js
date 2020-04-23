module.exports = function(sequelize, Sequelize) {
 
    const User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        username: {
            type: Sequelize.STRING
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
 
    });
 
    return User;
 
}