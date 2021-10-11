//discord.js import
const Discord = require('discord.js')
//node-fetch for HTTP requests
const fetch = require('node-fetch')

//init client

const client = new Discord.client()

//model URL
API_URL

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', async message =>{
    //ignore messages from the bot itself
    if(message.author.bot) {
        return;
    }
    //form the payload
    //object with key of input and value 
    //of another object with key of text: value of message.content
    const payload = {
        inputs: {
            text: message.content
        }
    }

    //form the header for the request with HUGGINGFACE api
    const headers = {
        'Authorization': 'Bearer ' + process.env.HUGGINGFACE_TOKEN
    };

    //SET STATUS to typing
    message.channel.startTyping();
    
    //query the server
    const response = await fetch(API_URL, {
        method: 'post',
        body: JSON.stringify(payload),
        headers: headers
    });

    const data = await response.json();
    let botResponse = '';
    
    if (data.hasOwnProperty('generated_text')) {
        botResponse = data.generated_text;
    } else if (data.hasOwnProperty('error')) {
        //error condition
        botResponse = data.error;
    }

    //stop typing
    message.channel.stopTyping();
    //send message to channel to reply
    message.reply(botResponse);
})

client.login(process.env.DISCORD_TOKEN);

/*
BRAINSTORMING QUESTIONS
- what is process.env and how does it have access to tokens
- what is the general process to building a connection 
  from client to server? require modules -> client init -> client.on(<event handler>, async? anon callback){

      build the request header
      event handler has own methods?
      response = await fetch(api, {method, body(stringify?), header})
      data = await response.json()?

      create empty data string var to hold info depending on the state of data property

      data.generated_text?

      event handler methods used to interact with the state of the event asynchronous to the data queried from server
  }

*/