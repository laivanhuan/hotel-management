module.exports = function(sequelize, Sequelize) {
 
    const Room = sequelize.define('rooms', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        room_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        roomtype_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'roomtypes',
                key: 'id'
            }
        },
 
        max_person: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        status_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'roomstatuses',
                key: 'id'
            }
        }
 
    });

    Room.associate = function(models) {
        Room.belongsTo(models.roomstatuses, {foreignKey: 'status_id', as: 'status'});
        Room.belongsTo(models.roomtypes, {foreignKey: 'roomtype_id', as: 'type'});
    };
 
    return Room;
 
}