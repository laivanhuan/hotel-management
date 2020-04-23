module.exports = function(sequelize, Sequelize) {
 
    const RoomType = sequelize.define('roomtypes', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        type_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        price_per_night: {
            type: Sequelize.DECIMAL,
            allowNull: false
        }
 
    });
 
    return RoomType;
 
}