/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2347079629628'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['☥ℰℳℙℰℛᎾℛ☬ℕUℰℒ☥'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: '༺♛𝕹𝖚𝖊𝖑☬𝕻𝖗𝖎𝖒𝖊♛༻',
    prefix: '!',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUW5OiOBT+L3nVGrnKpaqrBhAVLyDaqLA1DxECBBGQBBSn/O9bdE/PzMPubC9PIUmd853vku+gKDFBS9QB9TuoatxCivol7SoEVKA3cYxqMAQRpBCoYL1YKUaMbtNB1Xl2fHGOnCk1bGXP25bbNAXC/IbTr2x3sF7Acwiq5pTj8A8F7xlTLqb8Fi6CE8STyZ5errOcZtKoqEfrJjN4fVVvG8a9kRfw7CtCXOMiMasUXVAN8yXqNhDXn4NfTpSz76ZJ5JcPUYHdaLk9BtndXuRdzM0cLMClVrjXxX0Wfg6+zFaa/9DddCaV1ysuA70JZtdZFdwNc5IQfnzomnQWMKxpvcMnOClQZEWooJh2n+adLB6aEyxS6CV6pTzsZiyY7bKTuFEYGAvGjufTYNkc8HXufw74aASLYCDO9SBtAl0YbR5T8xBMdfvVqFB6hqZbHo4FDRld/h34pv7wyvn/8E7mYndkvcXJcfZYCpvmRgg06+Ngb4VRjkeZbme3nB1R7/w5+I8BvWPH6vhDYHOSfGpJdVxGR7xWXtndUtH9Kaqk4O5aOPkFH9Km/hPKjeCapsb5okDuCRUPXo3qUGTRGLo+ilcih1stTsLAkS0BXo+ae8mcTVEvLH7KHM72zhR3C7sabAdZex/IPgqUkZsmL28TnVFnRUBln0NQowQTWkOKy6LfU8QhgFG7Q2GN6Bu7YHmYyvf9npumWSGZtHKPu9cdY17Sq5OYmyvvEOisDKTJyH8BQ1DVZYgIQdEcE1rW3RoRAhNEgPrXtyEo0J2+69Z349khiHFNqFc0VV7C6EPUj0MYhmVT0F1XhEa/QDVQmV/biFJcJKSnsSlgHaa4RUYKKQFqDHOCfg6IahQBldYN+hlao4x63uXFkXPH0goMweVNDxwBFXC8IDGSMuaUsSirwlfy5daXhVX1pUAUDEH+do1VGIYVuLGscLzC86rwtd9//gTY14sQhTgnQAWG1YY33XcFWjiPxPf1TtOWmtaT9jHQhzHemT/qNrt+bG+P7VgLduPd2nC6g3K9F2dZsOXWvSko3BZhSdzzPxUBKrATbb/KAlkUT8KIi9bLk+nFa3TOmxmLOOEeejavHJd2OKH2qJ0M0ijJPMXzN3Bm5+tXvqOHdjJn/OvUvTB0cpQrYz65vfTdItTiEP3e7CxeTKdQ9qIo72dWZ7fs6NQxkXE/eb5lCIKbeDj3FXOXD5aLwaL2Uq7Jb0nmHSRfv0csdfURvz6MnFDm4/TIngwpzW7vln2LTP7jqcJvbuql6n9jjN6SX8BewP+W7h147zDmOfytxo+35F/yqO9vr9HrmgnXDEpmXnPOtIzkLSSBuHEm8YpZb46FGfDLlbkAz+e3IahySOOyvgAVwCKqSxyBIajLpresVcTlH5oZGmNpSWL1k+eQUO1XDF7xBREKLxVQWUkSBZlhBOb91qYuqzkkKVABf8nZbNd7utOqakch/UgV0PrPoEvw/BsnrIkMcAcAAA==',
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
  
