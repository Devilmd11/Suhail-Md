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
global.github=process.env.GITHUB|| "https://telegra.ph/file/c92f7937ca8e9cb3d7ce5.jpg";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Devil²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923119416058";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_38_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDkxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTksXG4gICAgICAgIDQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgMjU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICA5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDgzLFxuICAgICAgICA1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiekFhM3kzWmcvVFhmcjhIVVFIMU5nOEdXTnRzSjVUdzNXMVY1Mm1xWnYxMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia1h0cFg5RlFTWWFmMi1GZlZ3bk1QZ1wiLFxuICBcInBob25lSWRcIjogXCJmNDQ4ZDRlMy1mOGUwLTQ1OWQtOGM3MS1jNzFmMmFhMjhkYzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMjcsXG4gICAgICAyNDAsXG4gICAgICAyMzksXG4gICAgICAxMjAsXG4gICAgICAxMTYsXG4gICAgICAyMzksXG4gICAgICAyMixcbiAgICAgIDY4LFxuICAgICAgMyxcbiAgICAgIDE4NixcbiAgICAgIDY3LFxuICAgICAgMjEsXG4gICAgICA1OSxcbiAgICAgIDIzNyxcbiAgICAgIDI0MixcbiAgICAgIDEwOCxcbiAgICAgIDE5MixcbiAgICAgIDMzLFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MCxcbiAgICAgIDU4LFxuICAgICAgMTcyLFxuICAgICAgNDMsXG4gICAgICA5MyxcbiAgICAgIDEyNixcbiAgICAgIDIxNixcbiAgICAgIDE0LFxuICAgICAgMjAsXG4gICAgICAyMTQsXG4gICAgICAxMTQsXG4gICAgICAxMzYsXG4gICAgICAyMzMsXG4gICAgICAxMTAsXG4gICAgICAzLFxuICAgICAgMTA3LFxuICAgICAgMTUsXG4gICAgICAxLFxuICAgICAgMjEwLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTIyMUVZQlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzExOTQxNjA1ODo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRldmlsXCIsXG4gICAgXCJsaWRcIjogXCIxNDA5MDExMTY1NTU0MjI6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTENVb0xzQ0VKdnd4YlFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVQ2NNeTRlbVMvaDhTSk51bFRxZ2NUSm5lK1VFM1MxNU5mZmNVMzBqZ0V3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFzeGxPa1Frbyt6VEp4UUhIR0syKzgyWkVtNkdOcnF0czUyUW16Tm9vYkkrNXJvQXJBU2s4L2hFR29VZEovOThEMXJvdG1MSDlYRTZuaUJOUkRwNURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdacUVrS2cvd1lad05JRytoQnJ2N0hpc0F1aHJHdWd3Yjh6SlpCeU12cEdYUG9uR1pIZjhFWlRBZ055T2Fkdy9BTGJvZnZlQlB1RE1TYUI4ZjBSeUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzExOTQxNjA1ODo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4MDk1MDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFTjFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVOMS5qc29uIjogIntcImtleURhdGFcIjpcInhUQWUwWGJlUTAxby9TbEtjdE5aWW82ZzZQK3JOM2I1dlJicTFqV3VEVGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjYxMTI5Nzc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Devilking²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || " Devil-king",
  ownername:process.env.OWNER_NAME|| "It'Devil king",

  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
