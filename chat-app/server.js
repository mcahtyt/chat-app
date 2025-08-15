const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Bir kullanıcı bağlandı');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Tüm kullanıcılara mesaj gönder
    });

    socket.on('disconnect', () => {
        console.log('Kullanıcı ayrıldı');
    });
});

http.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor');
});
