module.exports = function(sequelize, Sequelize) {
 
    const Customer = sequelize.define('customers', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        fullname: {
            type: Sequelize.STRING
        },
 
        customer_id: {
            type: Sequelize.STRING
        },
 
        numberphone: {
            type: Sequelize.STRING
        },
 
        is_visible: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
 
    return Customer;
 
}