const {customers} = require('../models');

module.exports.getDashboard = async (_, res) => {
    const listCustomer = await customers.findAll({
        where: {
            is_visible: 1
        },
        limit: 10,
        order: [ [ 'createdAt', 'DESC' ]]
    })

    res.render('dashboard', {listCustomer});
}