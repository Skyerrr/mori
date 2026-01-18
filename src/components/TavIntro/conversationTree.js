export const conversationTree = {
  start: {
    id: 'start',
    response: 'A product designer A product designer A product designer A product designer A product designer A product designer A product designer A product designer A product designer ',
    subtitle: '– versatile, crafty and idealist.',
    buttons: [
      {
        id: 'btn-1',
        label: 'Hi Tav!',
        nextNodeId: 'greeting'
      },
      {
        id: 'btn-2',
        label: 'Wait, can I answer you?',
        nextNodeId: 'answer'
      },
      {
        id: 'btn-3',
        label: 'Just show me your work',
        nextNodeId: 'work'
      }
    ]
  },
  greeting: {
    id: 'greeting',
    response: 'Hey there! 👋',
    subtitle: 'Nice to meet you.',
    buttons: [
      {
        id: 'btn-4',
        label: 'Tell me about yourself',
        nextNodeId: 'about'
      },
      {
        id: 'btn-5',
        label: 'What have you built?',
        nextNodeId: 'work'
      },
      {
        id: 'btn-6',
        label: 'Let\'s chat',
        nextNodeId: 'contact'
      }
    ]
  },
  answer: {
    id: 'answer',
    response: 'Of course!',
    subtitle: 'I\'m all ears. What would you like to know?',
    buttons: [
      {
        id: 'btn-7',
        label: 'How do you approach design?',
        nextNodeId: 'approach'
      },
      {
        id: 'btn-8',
        label: 'What tools do you use?',
        nextNodeId: 'tools'
      },
      {
        id: 'btn-9',
        label: 'Never mind, show me work',
        nextNodeId: 'work'
      }
    ]
  },
  about: {
    id: 'about',
    response: 'I design thoughtful digital experiences',
    subtitle: 'Focusing on the intersection of form and function.',
    buttons: [
      {
        id: 'btn-10',
        label: 'What\'s your design philosophy?',
        nextNodeId: 'approach'
      },
      {
        id: 'btn-11',
        label: 'Show me your portfolio',
        nextNodeId: 'work'
      },
      {
        id: 'btn-12',
        label: 'Back to start',
        nextNodeId: 'start'
      }
    ]
  },
  approach: {
    id: 'approach',
    response: 'I believe in design that serves people',
    subtitle: 'Not trends. Every pixel should have purpose.',
    buttons: [
      {
        id: 'btn-13',
        label: 'Let\'s work together',
        nextNodeId: 'contact'
      },
      {
        id: 'btn-14',
        label: 'Show me examples',
        nextNodeId: 'work'
      },
      {
        id: 'btn-15',
        label: 'Back to start',
        nextNodeId: 'start'
      }
    ]
  },
  tools: {
    id: 'tools',
    response: 'I work with Figma, Code, and everything in between',
    subtitle: 'The tool is just the medium. Ideas come first.',
    buttons: [
      {
        id: 'btn-16',
        label: 'See what I\'ve made',
        nextNodeId: 'work'
      },
      {
        id: 'btn-17',
        label: 'How can we collaborate?',
        nextNodeId: 'contact'
      },
      {
        id: 'btn-18',
        label: 'Back to start',
        nextNodeId: 'start'
      }
    ]
  },
  work: {
    id: 'work',
    response: 'Check out my recent projects',
    subtitle: 'Each one a lesson in design and problem-solving.',
    buttons: [
      {
        id: 'btn-19',
        label: 'Visit portfolio',
        nextNodeId: 'portfolio'
      },
      {
        id: 'btn-20',
        label: 'Let\'s collaborate',
        nextNodeId: 'contact'
      },
      {
        id: 'btn-21',
        label: 'Back to start',
        nextNodeId: 'start'
      }
    ]
  },
  portfolio: {
    id: 'portfolio',
    response: 'Portfolio coming soon',
    subtitle: 'In the meantime, feel free to reach out.',
    buttons: [
      {
        id: 'btn-22',
        label: 'Contact me',
        nextNodeId: 'contact'
      },
      {
        id: 'btn-23',
        label: 'Back to start',
        nextNodeId: 'start'
      }
    ]
  },
  contact: {
    id: 'contact',
    response: 'Let\'s create something amazing',
    subtitle: 'Drop me a line and let\'s talk ideas.',
    buttons: [
      {
        id: 'btn-24',
        label: 'Email: hello@tav.design',
        nextNodeId: 'contact'
      },
      {
        id: 'btn-25',
        label: 'Back to start',
        nextNodeId: 'start'
      }
    ]
  }
}