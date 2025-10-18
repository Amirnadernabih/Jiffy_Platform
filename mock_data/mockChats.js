export const mockChats = [
    {
      id: 0,
      name: 'Luy Robin',
      lastOnline: '1 minute ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      preview: 'Most of its text is made up from sections 1.10.32-3 of Cicero\'s De finibus Bonorum et malorum. (On the boundaries of Goods and Evils, finibus may also be translated as purposes).',
      timestamp: '1 minute ago',
      hasUnread: true,
      isTyping: true,
      messages: [
        { id: 1, text: 'Hello! Finally found the time to write to you! I need your help in creating interactive animations for my mobile application.', sent: false, timestamp: '4 days ago' },
        { id: 2, text: 'Can I send you files?', sent: true, timestamp: '4 days ago' },
        { id: 3, text: 'Hey! Okay, send out.', sent: false, timestamp: '4 days ago' }
      ]
    },
    {
      id: 1,
      name: 'Jared Sunn',
      lastOnline: '1 minute ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      preview: 'Voice message (01:15)',
      timestamp: '1 minute ago',
      hasUnread: true,
      isVoiceMessage: true,
      messages: [
        { id: 1, text: 'Voice message (01:15)', sent: false, timestamp: '1 minute ago', isVoice: true }
      ]
    },
    {
      id: 2,
      name: 'Nika Jerrado',
      lastOnline: '5 hours ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      preview: 'Cicero famously orated against his political opponent Lucius Sergius Catilina.',
      timestamp: '3 days ago',
      hasUnread: false,
      messages: [
        { id: 1, text: 'Hello! Finally found the time to write to you! I need your help in creating interactive animations for my mobile application.', sent: false, timestamp: '4 days ago' },
        { id: 2, text: 'Can I send you files?', sent: true, timestamp: '4 days ago' },
        { id: 3, text: 'Hey! Okay, send out.', sent: false, timestamp: '4 days ago' },
        { id: 4, text: 'Style.zip', sent: true, timestamp: '4 days ago', isFile: true, fileSize: '43.35 kb' },
        { id: 5, text: 'Hello! I tweaked everything you asked. I am sending the finished file.', sent: false, timestamp: '3 days ago' },
        { id: 6, text: '(52.05 Mb) NEW_Style.zip', sent: false, timestamp: '3 days ago', isFile: true }
      ]
    },
    {
      id: 3,
      name: 'David Amrosa',
      lastOnline: '5 hours ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      preview: 'Cicero famously orated against his political opponent Lucius',
      timestamp: '3 days ago',
      hasUnread: false,
      messages: [
        { id: 1, text: 'Cicero famously orated against his political opponent Lucius', sent: false, timestamp: '3 days ago' }
      ]
    },
    {
      id: 4,
      name: 'Sarah Williams',
      lastOnline: '2 hours ago',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
      preview: 'Thanks for the meeting yesterday!',
      timestamp: '2 days ago',
      hasUnread: false,
      messages: [
        { id: 1, text: 'Thanks for the meeting yesterday!', sent: false, timestamp: '2 days ago' },
        { id: 2, text: 'It was great discussing the project with you.', sent: true, timestamp: '2 days ago' }
      ]
    }
  ];