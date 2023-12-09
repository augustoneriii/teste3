const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const app = express();

// Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: '*' }));


// Token do seu bot no Telegram
const token = '6989685386:AAFGWzHhpmDJAQAb8c9KyooI-ymW6GWEcaw';

// Criar uma instância do bot
const bot = new TelegramBot(token, { polling: true });

// Rota para a raiz da API
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API de teste!');
});

// Rota para retornar dados de exemplo
app.get('/dados', (req, res) => {
  const dados = {
    nome: 'Exemplo',
    idade: 30,
    cidade: 'Testelandia'
  };
  res.json(dados);
});

// Rota para acionar o bot do Telegram
app.get('/enviar-mensagem', async (req, res) => {
  const chatId = '@aon_teste_bot'; // Substitua pelo ID do chat que receberá a mensagem

  try {
    // Realizar uma requisição GET para o endpoint desejado usando Axios
    const response = await axios.get('URL_DO_SEU_ENDPOINT');

    // Enviar a resposta do endpoint de volta para o usuário no Telegram
    bot.sendMessage(chatId, `Resposta do Endpoint: ${response.data}`);
    res.send('Mensagem enviada com sucesso para o Telegram!');
  } catch (error) {
    // Em caso de erro na requisição, enviar uma mensagem informando o problema
    res.status(500).send('Ocorreu um erro ao acessar o endpoint.');
  }
});


app.listen(5000);
