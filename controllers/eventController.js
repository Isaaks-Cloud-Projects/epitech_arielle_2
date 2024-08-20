const EventModel = require('../models/eventModel');

module.exports = {
  getEvents: (req, res) => {
    EventModel.getAllEvents()
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  },
  createEvent: (req, res) => {
    const { organisatorId, title, type, country, city, address, duration, ageMin, ageMax } = req.body;
    EventModel.createEvent(organisatorId, title, type, country, city, address, duration, ageMin, ageMax)
      .then(() => res.status(200).json({ message: "Event added successfully!" }))
      .catch(error => res.status(500).json(error));
  },
  updateEvent: (req, res) => {
    const { oldType, newType } = req.body;
    EventModel.updateEvent(oldType, newType)
      .then(() => res.status(200).json({ message: "Event updated successfully!" }))
      .catch(error => res.status(500).json(error));
  },
  deleteEvent: (req, res) => {
    const { type } = req.body;
    EventModel.deleteEvent(type)
      .then(() => res.status(200).json({ message: "Event deleted successfully!" }))
      .catch(error => res.status(500).json(error));
  }
};
