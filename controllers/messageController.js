const MessageModel = require('../models/messageModel');

module.exports = {
  getMessages: (req, res) => {
    MessageModel.getAllMessages()
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  },
  createMessage: (req, res) => {
    const { msg } = req.body;
    MessageModel.createMessage(msg)
      .then(() => res.status(200).json({ message: "Message added successfully!" }))
      .catch(error => res.status(500).json(error));
  },
  updateMessage: (req, res) => {
    const { oldType, newType } = req.body;
    MessageModel.updateMessage(oldType, newType)
      .then(() => res.status(200).json({ message: "Message updated successfully!" }))
      .catch(error => res.status(500).json(error));
  },
  deleteMessage: (req, res) => {
    const { type } = req.body;
    MessageModel.deleteMessage(type)
      .then(() => res.status(200).json({ message: "Message deleted successfully!" }))
      .catch(error => res.status(500).json(error));
  }
};
