module.exports = function(sequelize, Sequelize) {
 
    const Booking = sequelize.define('bookings', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        customer_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'customers',
                key: 'id'
            }
        },
 
        room_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'rooms',
                key: 'id'
            }
        },

        checkin_date: {
            allowNull: false,
            type: Sequelize.DATE
        },

        is_active: {
            allowNull: false,
            type: Sequelize.INTEGER
        }
 
    });

    Booking.associate = function(models) {
        Booking.belongsTo(models.customers, {foreignKey: 'customer_id', as: 'customer'});
        Booking.belongsTo(models.rooms, {foreignKey: 'room_id', as: 'room'});
    };
 
    return Booking;
 
}