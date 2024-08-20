const http = require('http');
const { Server } = require('socket.io');
const MessageModel = require('./models/messageModel');

const socketService = (app) => {
    
    const server = http.createServer(app);
    const io = new Server(server, {
        cors: {
            origin: '*',
        },
    });

    /*const getAllMessages = async() => {
        const allMessages = await MessageModel.getAllMessages();
        return allMessages;
    }*/

    io.on('connection', (socket) => {
        console.log('User connected');
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('sendMessage', (msg) => {
            //const allMessages = getAllMessages();
            //console.log("MESSAGE RECU :", allMessages)
            //io.emit('receiveMessage', allMessages);
            io.emit('receiveMessage', msg);
        });
    });
    
    // Arreter de mettre les valeurs en dur dans votre code monsieur.
    server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
        console.log(`listening on ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
    });
}

module.exports = socketService;