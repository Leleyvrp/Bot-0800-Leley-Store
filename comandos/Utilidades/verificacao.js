const Discord = require("discord.js")

module.exports = {
  name: 'botinfo', // Coloque o nome do comando
  description: 'test', // Coloque a descrição do comando


  run: async (client, interaction, args) => {

    let servidor = client.guilds.cache.size;
    let usuarios = client.users.cache.size;
    let canais = client.channels.cache.size;
    let ping = client.ws.ping;
    let dono_id = "674370606619295770"; // Seu ID
    let dono = client.users.cache.get(dono_id);
    let prefixo = "/";
    let versao = "^14.13.0";
  
    let embed = new Discord.EmbedBuilder()
        .setColor("0000ff")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp(new Date)
        .setDescription(`👋 Olá ${interaction.author}, sou o ${client.user.username}, meu prefixo é ${prefixo}.\n💻 Veja meus comandos com ${prefixo}help.
  🎈 Atualmente estou gerenciando ${servidor} servidores, ${usuarios} usuários e ${canais} canais de servidores.
  📡 Meu ping está em ${ping}.
  🤖 Fui criado pelo ${dono}, na linguagem JavaScript, utilizando NodeJs e a livraria Discord.Js na versão ${versao}.`);
  
    interaction.reply({ embeds: [embed] })
}
}