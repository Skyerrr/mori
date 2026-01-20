// helper to auto-generate node + button ids
function makeNode(key, { response, subtitle, buttons }) {
  return {
    id: key,
    response,
    subtitle,
    buttons: buttons.map((btn, i) => ({
      ...btn,
      id: `${key}-btn-${i}`
    }))
  }
}

export const conversationTree = {
  start: makeNode('start', {
    response: 'A product designer A product designer A product designer A product designer A product designer A product designer A product designer A product designer A product designer ',
    subtitle: '– versatile, crafty and idealist.',
    buttons: [
      { label: 'Hi Tav!', nextNodeId: 'greeting' },
      { label: 'Wait, can I answer you?', nextNodeId: 'answer' },
      { label: 'Just show me your work', nextNodeId: 'work' }
    ]
  }),

  greeting: makeNode('greeting', {
    response: 'Hey there! 👋',
    subtitle: 'Nice to meet you.',
    buttons: [
      { label: 'Tell me about yourself', nextNodeId: 'about' },
      { label: 'What have you built?', nextNodeId: 'work' },
      { label: 'Let\'s chat', nextNodeId: 'contact' }
    ]
  }),

  answer: makeNode('answer', {
    response: 'Of course!',
    subtitle: 'I\'m all ears. What would you like to know?',
    buttons: [
      { label: 'How do you approach design?', nextNodeId: 'approach' },
      { label: 'What tools do you use?', nextNodeId: 'tools' },
      { label: 'Never mind, show me work', nextNodeId: 'work' }
    ]
  }),

  about: makeNode('about', {
    response: 'I design thoughtful digital experiences',
    subtitle: 'Focusing on the intersection of form and function.',
    buttons: [
      { label: 'What\'s your design philosophy?', nextNodeId: 'approach' },
      { label: 'Show me your portfolio', nextNodeId: 'work' },
      { label: 'Back to start', nextNodeId: 'start' }
    ]
  }),

  approach: makeNode('approach', {
    response: 'I believe in design that serves people',
    subtitle: 'Not trends. Every pixel should have purpose.',
    buttons: [
      { label: 'Let\'s work together', nextNodeId: 'contact' },
      { label: 'Show me examples', nextNodeId: 'work' },
      { label: 'Back to start', nextNodeId: 'start' }
    ]
  }),

  tools: makeNode('tools', {
    response: 'I work with Figma, Code, and everything in between',
    subtitle: 'The tool is just the medium. Ideas come first.',
    buttons: [
      { label: 'See what I\'ve made', nextNodeId: 'work' },
      { label: 'How can we collaborate?', nextNodeId: 'contact' },
      { label: 'Back to start', nextNodeId: 'start' }
    ]
  }),

  work: makeNode('work', {
    response: 'Check out my recent projects',
    subtitle: 'Each one a lesson in design and problem-solving.',
    buttons: [
      { label: 'Visit portfolio', nextNodeId: 'portfolio' },
      { label: 'Let\'s collaborate', nextNodeId: 'contact' },
      { label: 'Back to start', nextNodeId: 'start' }
    ]
  }),

  portfolio: makeNode('portfolio', {
    response: 'Portfolio coming soon',
    subtitle: 'In the meantime, feel free to reach out.',
    buttons: [
      { label: 'Contact me', nextNodeId: 'contact' },
      { label: 'Back to start', nextNodeId: 'start' }
    ]
  }),

  contact: makeNode('contact', {
    response: 'Let\'s create something amazing',
    subtitle: 'Drop me a line and let\'s talk ideas.',
    buttons: [
      { label: 'Email: hello@tav.design', nextNodeId: 'contact' },
      { label: 'Back to start', nextNodeId: 'start' }
    ]
  })
}
