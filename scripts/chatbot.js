const chatbotIcon = document.getElementById('chatbotIcon');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');

chatbotIcon.addEventListener('click', () => {
    chatbotWindow.classList.toggle('hidden');
});

closeChatbot.addEventListener('click', () => {
    chatbotWindow.classList.add('hidden');
});