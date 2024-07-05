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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_07_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY1LFxuICAgICAgICA3MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4LFxuICAgICAgICA0MixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDczLFxuICAgICAgICA5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyLFxuICAgICAgICA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0LFxuICAgICAgICA4NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkQxZzZBczczeTYxTm14dHZJOU1nR3NzZE9CM0QwTEtYZHVQTjRHb3ZzNGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlVcklrR3J3UWJDSnEzQ3NGY1BrMWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTUzYWI3MTEtYzBkNy00YWZiLTg4NTItMmFiNTI3YzZlZGNhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgNzgsXG4gICAgICAyMzYsXG4gICAgICAzLFxuICAgICAgMjE4LFxuICAgICAgMjIzLFxuICAgICAgMTczLFxuICAgICAgNDYsXG4gICAgICAyNDgsXG4gICAgICAxMzcsXG4gICAgICA4MyxcbiAgICAgIDE3OCxcbiAgICAgIDQxLFxuICAgICAgMjExLFxuICAgICAgOTEsXG4gICAgICA1MyxcbiAgICAgIDIzNSxcbiAgICAgIDIyNCxcbiAgICAgIDIzOCxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDI0NCxcbiAgICAgIDI0NyxcbiAgICAgIDI0NixcbiAgICAgIDc4LFxuICAgICAgMTc3LFxuICAgICAgNjEsXG4gICAgICAyMjYsXG4gICAgICAxNjIsXG4gICAgICA1NCxcbiAgICAgIDY2LFxuICAgICAgMTcsXG4gICAgICA5NyxcbiAgICAgIDE2NixcbiAgICAgIDc3LFxuICAgICAgMjM3LFxuICAgICAgMjE3LFxuICAgICAgMjUxLFxuICAgICAgMjA5LFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNHVkVWWE5NXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNDEyNDk5MTQwMDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA4NzgyNzIyNzQ1MzM6MTRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQHNfYWZmdWzwn5KvXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmo0NnE0Q0VLbmRvYlFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYWUJqaG54Tk83aUZIMmM3WWplL1NxSC9hRGVBWHRpaWw2dkFXMGJOOXhjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdKUGFxbnZQR3pnQ1VUOFJYdjB5QTFoaGd2QzhzdVZvOE1UWVV1SFdicTJic3hGOXpqcmVoc1hMZE13MllOU1BUMUJRN041akZUdDg4QlBKZDJmM2d3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkE3TGJaVkNYSXIyUzgrUUZ4c3ZiVXNDVjM4bGRQYjFEdGVUWXhyVFh1YXVmOXB0c0RaU2lxMEdhaVdCVWlocGlHMTBsSlZVUFhJTVlzdW1Ud1M5RWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE0MTI0OTkxNDAwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjE3MjU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3VVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLdVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmZWNpZ29LLy9rTVRpYlFvVkNIcEtBckRLQmVSTGNtY0J4VS9jR1pTYXpnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYzNTA5MTk5MixcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyMTU4MTg0NDlcIn0iCn0="  // PUT your SESSION_ID 


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
