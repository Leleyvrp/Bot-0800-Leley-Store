require('../index')

const Discord = require('discord.js')

const client = require('../index')

const config = require("../config.json");

const discordTranscripts = require('discord-html-transcripts')

client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
      if (interaction.customId === 'Transcripttt') {
        const canalTranscript = interaction.channel // Canal que será feito o transcript
  
        const attachment = await discordTranscripts.createTranscript(canalTranscript, {
          limit: -1, // Quantidade máxima de mensagens a serem buscadas. -1 busca recursivamente.
          returnType: 'attachment', // Opções válidas: 'buffer' | 'string' | 'attachment' Padrão: 'attachment' OU use o enum ExportReturnType
          filename: `${canalTranscript.name}.html`, // Válido apenas com returnType é 'attachment'. Nome do anexo.
          saveImages: true, // Baixe todas as imagens e inclua os dados da imagem no HTML (permite a visualização da imagem mesmo depois de deletada) (! VAI AUMENTAR O TAMANHO DO ARQUIVO!)
          footerText: `Todoas As Menssagem Foram Exportadas`, // Altere o texto no rodapé, não se esqueça de colocar {number} para mostrar quantas mensagens foram exportadas e {s} para plural
          poweredBy: true // Se deve incluir o rodapé "Powered by discord-html-transcripts"
        })
  
        const embed = new Discord.EmbedBuilder()
          .setColor('0000ff')
          .setDescription(
            `Transcript do canal \`${canalTranscript.name}\` criado:`
          )
  
        interaction.reply({ embeds: [embed], files: [attachment] })
      }
    }
  })