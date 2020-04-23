const {rooms} = require('../models');

module.exports.getRoomPage = async (_, res) => {
    const listRoom = await rooms.findAll({
        include: ['status', 'type']
    });
    res.render('room_manager', {listRoom});
}