/**Environment */
require('dotenv').config();

/**Telegraf */
const { Telegraf, Extra, Markup } = require('telegraf')

/**Add bot token */
//process.env.BOT_TOKEN is the bot token, get it from BotFather
const bot = new Telegraf(process.env.BOT_TOKEN)



//---------------------------------------- NORMAL COMMANDS
//----------------------------------------------------------------------------------------------//

/**
 * START
 */
bot.start(async (ctx) => {

    //ctx.chat contains all user info
    //chat ID
    let chat_id = ctx.chat.id;
    //firstname
    let firstname = ctx.chat.first_name;
    //lastname
    let lastname = ctx.chat.last_name;
    //username
    let username = ctx.chat.username;

    //To get referral code (if any)
    //Example Referral link : https://t.me/botusername?start=refCode
    let t_req = "";
    let ref_code = "";
    if (ctx.message.text.length > 6) {
        t_req = ctx.message.text
        ref_code = t_req.substring(t_req.indexOf(" ") + 1);
    }

    //ref_code now contains the referral code

    let reply = "Bot Started, <b>Welcome " + username + "</b>"

    //reply with the reply message above //parse as HTML
    ctx.telegram.sendMessage(ctx.chat.id, reply, { parse_mode: "HTML" })

}).catch((err, ctx) => {
    console.log('Ooops, encountered an error')
})



/**
 * HELP
 */
bot.help(async (ctx) => {

    let reply = "Help command detected"

    //reply with the reply message above //parse as HTML
    ctx.telegram.sendMessage(ctx.chat.id, reply, { parse_mode: "HTML" })

}).catch((err, ctx) => {
    console.log('Ooops, encountered an error')
})



//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//






//---------------------------------------- INLINE BOT FEATURES
//----------------------------------------------------------------------------------------------//

/**
 * on inline_query gets each input of the user as the user types the query after the bot username
 */
bot.on('inline_query', (ctx) => {

    //all data is in
    let all_data = ctx.inlineQuery
    //query data is in
    let query = ctx.inlineQuery.query

    //to ensure the user has typed something before we begin processing so we won't
    //process blank data at first

    if (query.length > 0) {

        /////////////////////////////////////////

        // Do Whatever you want the bot to do with the query, like fetching data from an API or any
        //other processing

        /////////////////////////////////////////

        //store the result of the processing above in an array to be sent to the user

        /**
         * Type can be article, photo, audio, video depending on what you are sending. Check the docs
         * Id must be unique
         */
        result = [
            {
                type: "article",
                id: 1,
                title: "Title 1",
                description: "Description 1",
                input_message_content: {
                    message_text: "Message 1 Here",
                    parse_mode: "HTML"
                },
                url: "https://sydewalka.com"
            },
            {
                type: "article",
                id: 2,
                title: "Title 2",
                description: "Description 2",
                input_message_content: {
                    message_text: "Message 2 Here",
                    parse_mode: "HTML"
                },
                url: "https://sydewalka.com"
            },
            {
                type: "article",
                id: 3,
                title: "Title 3",
                description: "Description 3",
                input_message_content: {
                    message_text: "Message 3 Here",
                    parse_mode: "HTML"
                },
                url: "https://sydewalka.com"
            }
        ]

        ctx.answerInlineQuery(result);
    }


}).catch((err, ctx) => {
    console.log('Ooops, encountered an error')
})

//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//





//Start bot
bot.launch();

console.log("App Started!!!");