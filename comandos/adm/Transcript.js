const Discord = require("discord.js")
const transcript = require('discord-html-transcripts') // https://www.npmjs.com/package/discord-html-transcripts

module.exports = {
    name: 'transcript', // Coloque o nome do comando
    description: 'Transcreva todas as mensagens deste canal para um arquivo html.', // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        const canalTranscript = interaction.channel // Canal que será feito o transcript
        const embed = new Discord.EmbedBuilder()
            .setTitle('Salve Tropa')
            .setColor('0000ff')
            .setDescription(`Support team ticket controls\`${canalTranscript.name}\` criado:`)

        const attachment = await transcript.createTranscript(canalTranscript,
            {
                limit: -1, // Quantidade máxima de mensagens a serem buscadas. `-1` busca recursivamente.
                returnType: 'attachment', // Opções válidas: 'buffer' | 'string' | 'attachment' Padrão: 'attachment' OU use o enum ExportReturnType
                filename: `${canalTranscript.name}.html`, // Válido apenas com returnType é 'attachment'. Nome do anexo.
                saveImages: true, // Baixe todas as imagens e inclua os dados da imagem no HTML (permite a visualização da imagem mesmo depois de deletada) (! VAI AUMENTAR O TAMANHO DO ARQUIVO!)
                footerText: 'Foram exportadas {number} mensagen{s}!', // Altere o texto no rodapé, não se esqueça de colocar {number} para mostrar quantas mensagens foram exportadas e {s} para plural
                poweredBy: true // Se deve incluir o rodapé "Powered by discord-html-transcripts"
            })

            interaction.channel.send({ files: [attachment], embeds: [embed] })    
        
            let embed2 = new Discord.EmbedBuilder()
            .setTitle(`✅ feito com susesso`)
            .setColor(`00ff00`)
            .setDescription(`✅ Tudo Ocoreu Bem S2`)
            
            interaction.reply({ephemeral: true, embeds: [embed2] })
        
        }
}