/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2348129636819'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['☥ℰℳℙℰℛᎾℛ☬ℕUℰℒ☥'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: '✡☠⋊ℕ𝕦𝕖𝕝☣𝕊𝕖𝕟𝕥𝕚𝕟𝕖𝕝⋉☠✡',
    prefix: '!',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2ZKiSBT9l3zVaGVVjKiIQRRxQ1zAwol+yCITSHaSBMUO/30Cq6urH2Y6at5yi3PPPefc/AGynFR4jVsw+QEKShrIcLdkbYHBBExr38cU9AGCDIIJCGZhLUD7WPLX6eBtLFZVc58lc5UpEG4uteiM4sYZb2Z2dn0Bjz4o6reEeH8ApHqQO5UQ3XR5g8M1ZIsaUox7hrMrGjxfmplkIlcJS8d7AY8OERJKsmBehDjFFCZr3FqQ0K/RH64EQonYpJF+P+CTgm3p7iwPJYXT1bhtFGOW09t629SC+DX6Qs6drWV1EV3XPWwG3EWPw3u8cTkzaO4hqzG3HhyimTDQxu/0KxJkGC0Rzhhh7Zd15xfeWL3WO2Gn+nEjCqNad92FXE2jFe8N5lKP2StXaYxbsvwacas5t7tsq0Zczy5GBXcqIF/1WnfqpySvLZmPWZSKtWtH8e/ELfqRlfj/6G7vilN022xUe6XIoVDvz0G8N4mNkGZMDWk49/A9FJz1wgi+Rj9GQ608LVojyfRINjfspESedOBPt8VrarR7328KDWYsmlWf9CGr6Z9YCvpIX9GNV2VL5u3kmouttTWyMnS4LVDhDLPAG1vn4ay81NBwztezvb9NT1WR8+yStZdD6K44WZevAp4OfePV27mFowYvz45i3C4RmHCPPqA4IBWjkJE86854sQ8gao7Yo5g91QXUgkpp3Y9rC6nrgRKyhvqbhRYNyxWSz6ssy65pqbYHw4hfQB8UNPdwVWFkkIrltN3iqoIBrsDk7+99kOEbe/etqyZwfeATWjE7q4skh+jD1I9L6Hl5nbFjm3lat8AUTIafx5gxkgVVJ2OdQeqFpMFaCFkFJj5MKvyrQUwxAhNGa/xraLUcdbqvZElz+K0D+iB9+kFQF3FBHHO8IgvymFMmgvBX9e3a4cKi+JZhBvogeb7jBGEsyzw/locKx/Pdy+7i8Ytih4gwgySpwARo5jEn63g6X+JRuR0vFuo8ULVABZ8tfUTjXfsm4KZGMiC8+YrF61U67aB8r9XbPTLZjJ9yaSgXvDMQpNvy5V9AwATkYYq3vXh+0ApB3SJKZNPa646TIXtwgtvrgeMUfrA4SqLE6lMlrfSSsvHuOLfaVWxcggbtel5jLBgv1rnsNLo7C9T9S1cN4YZ4+PdipaSdcbgrc5WKZYKLV3tfDyTeUa5JeXUoWZjxrV4h1JpWWqRj7wh9Xm/y+6vt++4AXbX7yoHbYzv0zPlZ1C9DzExt/x7a59AkPz8r8sxTZ1a39Ql+zn4GOwu/YN478y5kw0f/N5Cf38l/jOT0TTT3B8kXWeQI9Xa7s+9pXY2CrSfe3/ZKgC45LlHiKz3vCB6P731QJJD5OU3BBMAM0Zwg0Ac0r7vULjM//0MxTd0u1SBYdq0nsGLq5yScSIorBtMCTLjRSFakoSwrj38Ar71GwD4HAAA=',
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
  
