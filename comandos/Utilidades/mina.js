const Discord = require("discord.js")
const { QuickDB } = require('quick.db')
const db = new QuickDB()
const { Minesweeper } = require('discord-gamecord'); 

module.exports =  {
    name: "mina",
    description: "Jogue o jogo mina de bombas!",
    
    run: async(client, interaction, args) => {
 const Game = new Minesweeper({ 
   message: interaction, 
   isSlashGame: true, 
   embed: { 
     title: 'Mina de bombas', 
     color: '#2b2d31', 
     description: 'Clique em algum botão para jogar.' 
   }, 
   embed: {
    title: 'Jogo da velha',
    color: '#2b2d31',
    statusTitle: 'Status',
    },
  emojis: {
   xButton: '❌',
   oButton: '🔵',
 },
   mines: 4, 
   timeoutTime: 90000, 
   winMessage: 'Parabéns! Você Ganhou, conseguiu cavar todas as partes sem explodir.', 
   loseMessage: 'Você Perdeu, após você cavando, acabou caindo na bomba.', 
   playerOnlyMessage: 'Apenas {player} pode usar estes botões' 
 }); 
  
 Game.startGame(); 
 Game.on('gameOver', result => { 
   console.log(result);
 });
    }
}