//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is Dulanga_Thipul_BOT🔥
My Creator is Dulanga Thipul😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+940770696682'] //Owner number in aive msg
global.premium = ['+940770696682'] //Owner Number info
global.ownernomer = '+940770696682' //Owner Number <<<

global.ownername = '☬Dulanga༒Thipul࿐' //Owner Name
global.botname = ' ☬Dulanga༒Thipul࿐' //Bot Name

global.button = '🤭Follow me📍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://www.tiktok.com/@_square_enix_/video/7116164889688673562?is_from_webapp=1&sender_device=pc&web_id=7103490346214639105' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☬Dulanga༒Thipul࿐' //Bot Pacage Name
global.author = '☬Dulanga༒Thipul࿐' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_Kumuthu.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://github.com/prabhasha2006' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('.https://ov12-engine.flamingtext.com/netfu/tmp28007/coollogo_com-30372350.png')
global.flaming = 'https://ov12-engine.flamingtext.com/netfu/tmp28007/coollogo_com-30372350.png'
global.fluming = 'https://ov12-engine.flamingtext.com/netfu/tmp28007/coollogo_com-30372350.png'
global.flarun = 'https://ov12-engine.flamingtext.com/netfu/tmp28007/coollogo_com-30372350.png'
global.flasmurf = 'https://ov12-engine.flamingtext.com/netfu/tmp28007/coollogo_com-30372350.png'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
