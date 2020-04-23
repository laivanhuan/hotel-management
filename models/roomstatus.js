module.exports = function(sequelize, Sequelize) {
 
    const RoomStatus = sequelize.define('roomstatuses', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        status_label: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
    });

    return RoomStatus;
 
}