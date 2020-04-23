const {rooms, bookings, customers} = require('../models');

module.exports.getControlPage= (_, res) => {
    res.render('control');
}

module.exports.getRoomPage= (_, res) => {
    res.render('room');
}

module.exports.getCheckinPage= async (req, res) => {
    const id = req.params.id;
    const query = {
        where: {
            status_id: 1
        },
        include: ['status', 'type']
    }
    if (id) query.where.id = id;
    const emptyRooms = await rooms.findAll(query);
    res.render('checkin', {emptyRooms});
}

module.exports.getCheckoutPage= async (req, res) => {
    const room_id = req.params.id;
    const info = await bookings.findOne({
        where: {
            is_active: 1,
            room_id
        },
        include: ['customer','room']
    });
    res.render('checkout', {info});
}

module.exports.createABooking = async (req, res) => {
    const booking = req.body;
    const customer = await customers.create({
        fullname: booking.fullname,
        numberphone: booking.numberphone,
        customer_id: booking.customer_id,
        is_visible: 1
    });
    await Promise.all([
        bookings.create({
            customer_id: customer.dataValues.id,
            room_id: parseInt(booking.room_id),
            checkin_date: Date(),
            is_active: 1
        }),
        rooms.update({
            status_id: 2
        },{
            where: {id: parseInt(booking.room_id)}
        })
    ])
    res.redirect('/dashboard');
}

module.exports.createRoom = async (req, res) => {
    const info = req.body;
    info.status_id = 1;
    await rooms.create(info);

    res.redirect('/room');
}

module.exports.checkoutBooking = async (req, res) => {
    const room_id = req.params.id; 
    await Promise.all([
        rooms.update({
            status_id: 1
        },{
            where: {id: parseInt(room_id)}
        }),
        bookings.update({
            is_active: 0
        },{
            where: {id: parseInt(room_id), is_active: 1}
        })
    ])

    res.redirect('/room');
}
