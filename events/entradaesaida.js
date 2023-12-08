require('../index')
;
const Discord = require('discord.js');

const client = require('../index');

const config = require("../config.json");


client.on("guildMemberAdd", (member) => {
    let canal_logs = `${config.canale}`;
    if (!canal_logs) return;

    let embed = new EmbedBuilder()
        .setColor("#00FF00")
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setTitle("👋 Boas Vindas!")
        .setDescription(`> Olá ${member}!\nSeja Bem-Vindo(a) ao servidor \`${member.guild.name}\`!\nAtualmente estamos com \`${member.guild.memberCount}\` membros.`);

    member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` });
});

client.on("guildMemberRemove", (member) => {
    let canal_logs = `${config.canals}`;
    if (!canal_logs) return;

    let embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setTitle(`Adeus ${member.user.username}....`)
        .setDescription(`> O usuário ${member} saiu do servidor!\n> 😓 Espero que retorne um dia.\n> Nos sobrou apenas \`${member.guild.memberCount}\` membros.`);

    member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` });
});

//|▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬| Cargo automatico |▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬|

// client.on("guildMemberAdd", (member) => {
//     let cargo_autorole = member.guild.roles.cache.get(`${config.rolee}`) // Coloque o ID do cargo
//     if (!cargo_autorole) return console.log("❌ O AUTOROLE não está configurado.")

//     member.roles.add(cargo_autorole.id).catch(err => {
//         console.log(`❌ Não foi possível adicionar o cargo de autorole no usuário ${member.user.tag}.`)
//     })
// })