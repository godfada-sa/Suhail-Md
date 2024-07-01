const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_13_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDYsXG4gICAgICAgIDczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMzLFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQzLFxuICAgICAgICA3MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgMTk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDY1LFxuICAgICAgICAyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDY2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaWlUcDdlcW1uMGQ1TkxtL0hQUm1JcTFxUVhwZVl6MHdwK2RrS3dkYmZ6VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieHg0b2dyZzVSVnl5VHY4ZWFqdmtmd1wiLFxuICBcInBob25lSWRcIjogXCI5NGM5ODM2Ni0zZDUyLTQ3NzgtOWIzOC00MTEwNzY0NzAyNTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICA3LFxuICAgICAgOTksXG4gICAgICAxMDAsXG4gICAgICA5OSxcbiAgICAgIDEyLFxuICAgICAgMjA1LFxuICAgICAgODMsXG4gICAgICA3MSxcbiAgICAgIDE0MyxcbiAgICAgIDIzMyxcbiAgICAgIDE2MSxcbiAgICAgIDEzNCxcbiAgICAgIDEwOSxcbiAgICAgIDE4LFxuICAgICAgMjA4LFxuICAgICAgMjM0LFxuICAgICAgOTUsXG4gICAgICA3NixcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDE2MSxcbiAgICAgIDIyMSxcbiAgICAgIDEyNyxcbiAgICAgIDIxOCxcbiAgICAgIDIwLFxuICAgICAgMTg2LFxuICAgICAgOTMsXG4gICAgICAxOTAsXG4gICAgICA4OCxcbiAgICAgIDE5OCxcbiAgICAgIDE0MixcbiAgICAgIDE5OCxcbiAgICAgIDEwMCxcbiAgICAgIDE5NSxcbiAgICAgIDgxLFxuICAgICAgMTg5LFxuICAgICAgMjE1LFxuICAgICAgMTA2LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE3OEU5SDM5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNDEyNDk5MTQwMDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA4NzgyNzIyNzQ1MzM6MTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQHNfYWZmdWzwn5KvXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmo0NnE0Q0VPeTNqTFFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYWUJqaG54Tk83aUZIMmM3WWplL1NxSC9hRGVBWHRpaWw2dkFXMGJOOXhjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFycE8zWmxhdDlBanhsMy83am85emYzR21hM0JDbGJ2NHJUUHI4T21qZElzb1l2Nko4bms2aUNPZ1RxUVhrWCsrU242Y1pkb0Fqa3BwclBJZ3UrK2hnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRkSGVaRDlQeW5idXdYbDJEcTJhVWpEdE5pdlFYU1BVODFLZjRwaFNoaVdZTmxmZng5b2RQNjcwOURDQmx2RXpJMy93R2pES1JXSkJqTFdOcTgwVEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE0MTI0OTkxNDAwOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODY4NDAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBZ0FBS3QrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFnQUFLdCsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1eGl3U2JkL28vTjBPN3ArdmRvN2trdDQramNVc2FLQnZCRVVXdlNYcUZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYzNTA5MTk5MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzIsOCwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc3MTA2MDgwNzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
