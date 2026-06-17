/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2349120783522'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['☥ℰℳℙℰℛᎾℛ☬ℕUℰℒ☥(𝕬𝖗𝖈𝖍𝖎𝖙𝖊𝖈𝖙 𝖔𝖋 𝕮𝖍𝖆𝖔𝖘)'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: '◦•●◉✿ ᎡϴᎽᎪᏞ ᏢᎻᎪΝͲϴᎷ ᏟϴᎡᎬ ✿◉●•◦',
    prefix: '?',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rVGBEUkIiOGEQExAtKg+DGPJRQQMlFLAoFJ5xv38Cenp6H3dnet6qEynMyz8n8DoozrpCJWiB9ByXBV0hRd6RtiYAEpnUUIQL6IIQUAgnIxvVQIm5qbXbJOq9zuFcG9HZMZLk+KYiZlYO2QiNec1XnBTz6oKyPGQ7+kHBUXB1VG/ruKrKa4/hyYfYT6qqWbaJe6lRloU+W3mFBVp7xAh5dRogJLmK1TFCOCMxM1FoQk8/R99fItme9k+OebsbU8v1aW5hHcrLumriZH49bwrs3K4eCmn6Svk157Bx1WSiXl/rU2G2iLLX9xj3F7dHKRDnN69FImxVN+ka/wnGBQiNEBcW0/XTfq6ncuuVyLuBtz0/LBRWs6UZcXJKTQTjtsmOc/V7f5cwu/yTx+asyWcfGRvTMhdzQXrKxs+wyFRli7l692XrI39W9VbWKM/qduEXevZL+n75Xy5nnamo4TLM7t6knLqLDxrru7R7TumybBsGANDjeaq76OfqDUQh5zt84ejWaR8JByWY3R2adJZfXr/aepmu88YhwbBvjgz6kNfkTy8s2w0OHQZbXDHhDZ51REmMHsfNpWvqytqgGRVh752IRhdsmXN0YdotZ0T/efb7KBDbfO3Fuxt5uv/ImapaZmiCOTvLLs6IUtUYIpOGjDwiKcUUJpPhcPGNDvg9geLVRQBB9thdk9zW7UewgFKEg8Blx21o/uKvJWo/o+LaQwytUeOUQ7O7+C+iDkpwDVFUo1HFFz6RdoaqCMaqA9Ne3PihQQ9+E6+C4YR9EmFTUKeoyO8PwXdX3jzAIznVB7bYIlO6ACJCYjzCiFBdx1fWxLiAJEnxFSgJpBaQIZhX6VSEiKAQSJTX6NbXKOewa7+m+LcqTNeiD/CkIDoEEWG40GbKMIHJjlpXEr9WXW5cWluWXAlHQBwXs/gY/yLmF2Q/QB9nz3XDEjCf8mOVZhhUngiR+7eKPX4w7gBBRiLMKSEBZRVv+yOiqaYotVTVNVmNZiWXwUeG7Vd6kmLGK5plbONG4CyfLhjcRI3WaNHBsilzQ43SNmkUxs+et8fIPSYAEAjnVp3dtJm6NTKfFZtezhbsTYth7DZMMine7l7U5s7XmTMTyHK/VJa79y3Y+5pPmst8vS0WXx/R88I10VN/sq7htlfilQwvRFQfod7DFSVxGjXV3GTiMrFeTGl7PG3D5iqvmnsrEAtnOXXd6YCO0Loze+TUbedOdHyw3HDM9jQbztGGX8fQwgOvJrTQvSWGJOH4z8XOIsp/LCz/t1WnXXSOMnrvgp0b/qeUb8c5yzKP/W46f2+VfJnS6ncRJ1qbadUd5epOV+SDSG9kP9rV9XXMWbRpil+MbkwQYPB7f+qDMII3OJO+WUH6EoA/Iue4MbBTR+Q9IilwZahyvu7IzWFH5YyhecY4qCvMSSENBHAoMOxTHj78BnmcGNUoHAAA=',
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
  
