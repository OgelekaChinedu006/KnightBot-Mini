/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2348129636819'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['☥ℰℳℙℰℛᎾℛ☬ℕUℰℒ☥(𝕬𝖗𝖈𝖍𝖎𝖙𝖊𝖈𝖙 𝖔𝖋 𝕮𝖍𝖆𝖔𝖘)'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: '₩₳ɌⱠØɌƉ',
    prefix: '?',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUyZLbNhD9lRSuUlniKlJVUxUuWqiV2peUDyAJciiKIAWAm1y6JIfk6mu+JL74Y1K++xdS1MxkfEicyQ1oNF6/fr18ADgJKRqjCnQ/gJSEOWSoPrIqRaAL9Mz3EQFN4EEGQRcEdqJqSZApiXDEgjbQlqNO0Rj07Q3Jjd7RdRKPl8cjJ8XuA7g1QZo559D9DuA+nxx0S3pcmHGyv+Zp1hrqzsozbb8xHLcZxxW+MLq6M/5kPYBbjQhDEuKglz6iGBF4HqPKhiF5G/2FoW3sIvZlTTgMK83fLq7T4aQ8HxM8SuHCXS/6vbGozK+c9Tb6Om4VmTcf5DAwR52iKITRXLSldXotj1LwmAxOyWbaQLEZHJ7o0zDAyLM8hFnIqjfrHuq7WXSySbVzdHN+9lc7p2xcW6ZDLWjPZmnKJIMfbkinP30bcdKA+i4fW8Kl37nMIV0qgjJrraJjshxf5F67YfesYbDsGRvlW+I2eemV6P/ofrEffW5V9DV1y6zDZODaskSgNptvs0nVKgtraF4FJW45G/Ft9DEbC8uG6fBG4+LsdhO51PbpVjt18nms69VpGbGrUi7xsNJe6UOWke+xXLc1XdyneOqRSFK4MH9kFkHCOJmc1bURjqXYsJdjnULFFPGmM+pzQYHIpYhz7O/6F216ki9ydezn5WwsFdfjiAvEQHu4ZxShyvJAl7s1AUFBSBmBLEzw3Sa3mwB6+Qq5BLG7vMDVYOu0m3stKy4juu11RtJ+BcmoL5/6XtbQXU7U+KrtGHDxAJogJYmLKEXeMKQsIdUUUQoDREH3p/dNgFHJngpXhxO4JvBDQtkGZ+k5gd5LVV8eoesmGWarCrtGfUAEdNuvZsRYiANa65hhSNzHMEfGI2QUdH14pujvDBFB3rOtCUiS1d8s7CffqYChTS1jERi1Ys/xam8PMRieae0wbsziVtTrzbNJxXqDgWYFmhFo4JXfS6GfhOQinzpmmkeWtrKtUi7liFtHw3ijIuiaAvFObv8abj1pHTz8AwjogkmfHZ0RT41j4pcT42pFMcJZ0hbaQhl10qlrjlDSWjRy1N/Ri4Ptqeqyg4RtXVd1jjdEvjdFwymPA7NSg1RtIxqZwUMdzUN56KJvg5lba1usygRhflCuZ1dMF72eT4eT1NkJIknOymQvoknrdOBS/TrTwlG58suU5ONCtuOUSglTZ24oThfCBraxk1yT0em5BeN774ce6AJeEBWOV2VBVji1Kyo/0ndFXUKYpu8wYqAJMKzdwZdPv3z9/PvXzx8vP3z54+evnz/++Vt9C758+hU0wfkOxgmCIss8r8htleP5Gq5+eBm68/OyC+/tWBOor36I7rvjOc5/E3rSqu7R9q35DcjzOvq3/ewdh51BITuSofVO9VygdLaRdOls72OsqbJwEHRXPO/RRgS32/smSM+Q+QmJQRfQ2IF1lpAy7XUm1mGMKINxCrpcR+FkVVLV9u0vRc1inkkHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
