const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() !== '') {
        const msg = input.value;
        appendMessage(msg, true); // kendi mesajını göster
        socket.emit('chat message', msg);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    appendMessage(msg, false); // başkalarının mesajı
});

function appendMessage(msg, isOwnMessage) {
    const item = document.createElement('li');
    item.textContent = msg;
    if (isOwnMessage) {
        item.classList.add('you');
    }
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
}
