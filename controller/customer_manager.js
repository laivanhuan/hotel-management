const {customers} = require('../models');

module.exports.getCustomerPage = async (_, res) => {
    const listCustomer = await customers.findAll({
        where: {
            is_visible: 1
        }
    })
    res.render('customer_manager', {listCustomer});
}