const models = require('../models');
module.exports.initDB = async () => {
    const user = {username: 'admin', password: '123456789'};
    const roomStatuses = [
        {status_label: 'Empty'},
        {status_label: 'Busy'},
        {status_label: 'Pending'},
    ];
    const roomTypes = [
        {type_name: 'VIP', price_per_night: 200000},
        {type_name: 'NORMAL', price_per_night: 100000}
    ];
    const customers = [
        {fullname: 'Lại Văn Huân', customer_id: '122365789', numberphone: '0987654321', is_visible: 1},
        {fullname: 'Phạm Hoàng Giang', customer_id: '122355678', numberphone: '0987354321', is_visible: 1}
    ];
    const bookings = [
        {customer_id: 2, room_id: 1, checkin_date: Date(), is_active: 1}
    ];
    const rooms = [
        {room_name: '1001', roomtype_id: 1, max_person: 3, status_id: 2}
    ];

    await Promise.all([
        models.roomstatuses.bulkCreate(roomStatuses),
        models.roomtypes.bulkCreate(roomTypes),
        models.customers.bulkCreate(customers)
    ]);

    await models.rooms.bulkCreate(rooms);

    return Promise.all([
        models.user.create(user),
        models.bookings.bulkCreate(bookings)
    ]);
}