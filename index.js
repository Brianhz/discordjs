console.log('!Beep beep!');

require("dotenv").config();


const bot = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    ws: {
        intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_BANS', 'GUILD_EMOJIS', 'GUILD_INTERGRATIONS', 'GUILD_WEBHOOKS'] 
    }
});

const Distube = require('distube')

const distube = new Distube(bot, { searchSongs: false, emitNewSongOnly: true});

const fetch = require('node-fetch');
const Discord = require('discord.js');
const bot = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('abcd')
}

const replies = [
    'aaa',
    'bbb',
    'ccc'
]

client.on('message', gotMessage);

async function gotMessage(msg) {
    //if (msg.channel.id == '839510640518365236'){

        let tokens = msg.content.split(' ');


        if (tokens[0] === 'hi'){
        //msg.reply('hi');
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
        } else if (tokens[0] == '!gif'){

            let keywords = 'mbappe';
            if (tokens.length > 1){
                keywords = tokens.slice(1, tokens.length).join(' ');

            }


            let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=high`;
            let response = await fetch(url);
            let json = await response.json();
            const index = Math.floor(Math.random() * json.results.length) 
            msg.channel.send(json.results[index].url);
            msg.channel.send("GIF from Tenor: " + keywords);
        }
    //}
} 