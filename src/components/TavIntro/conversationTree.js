const scrollToTarget = (targetId, offset = 0) => {
  const el = document.getElementById(targetId);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.pageYOffset + offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

function scrollButton(label, targetId, offset = 0) {
  return {
    label,
    nextNodeId: null, // no normal node navigation
    onClick: () => scrollToTarget(targetId, offset),
  };
}

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
function textLinkImg(label, link) {
  return `<a
    href="${link}"
    target="_blank"
    rel="noopener noreferrer"
    class="arrow-gray-wrapper group inline-flex items-center gap-1 ml-1 align-baseline text-white hover:text-[#71717A] transition-colors duration-300"
  ><span class="underline">${label}</span><img
    src="src/assets/image/arrow.svg"
    alt=""
    class="inline-block translate-y-[3px] arrow-gray"
  /></a>`
}

function textLink(label, link) {
  return `<a
    href="${link}"
    target="_blank"
    rel="noopener noreferrer"
    class="arrow-gray-wrapper group inline-flex items-center gap-1 ml-1 align-baseline text-white hover:text-[#71717A] transition-colors duration-300"
  ><span class="underline">${label}</span></a>`
}



export const conversationTree = {
  start: makeNode('start', {
    response: `A product designer<br>— versatile, crafty and idealist.`,
    subtitle: '',
    buttons: [
      { label: 'Hi Tav!', nextNodeId: 'ph1'},
      { label: 'Wait, can I answer you?', nextNodeId: 'meta1'},
      scrollButton('Show me your work', 'work', -55),
      { label: 'Tell me something funny', nextNodeId: 'jk1'}
    ]
  }),
  ph1: makeNode('ph1', {
    response: `I think design should be simple and natural<br>Just like a conversation`,
    subtitle: '',
    buttons: [
      { label: 'Why?', nextNodeId: 'ph2'},
      { label: 'I agree', nextNodeId: 'ph_topic1'},
      { label: 'Is thid AI?', nextNodeId: 'case_garden2'},
      { label: 'Show me your work', nextNodeId: 'work '} 
    ]
  }),
  ph2: makeNode('ph2', {
    response: `The best interfaces behave like good listeners<br>clear, contextual and reciprocal.`,
    subtitle: '',
    buttons: [
      { label: 'Keep yapping', nextNodeId: 'ph3'},
      { label: 'I wanna talk about other thing', nextNodeId: 'ph_topic2'},
      { label: 'Show me your work', nextNodeId: 'work'} 
    ]
  }),
  ph3: makeNode('ph3', {
    response: `Clarity is my favourite feature<br>Empathy is my favourite tool.`,
    subtitle: '',
    buttons: [
      { label: 'So you’re mr nice designer, huh?', nextNodeId: 'ph4'},
      { label: 'Are you like this at work?', nextNodeId: 'egg2'},
      { label: 'Bro be normal', nextNodeId: 'egg1'} 
    ]
  }),
 ph4: makeNode('ph4', {
    response: `Nice just means I don’t need to win every argument<br>to make the product win`,
    subtitle: '',
    buttons: [
      { label: 'Ouch', nextNodeId: 'ph_topic3'},
      { label: 'Are you like this at work?', nextNodeId: 'egg2'},
      { label: 'Bro be normal', nextNodeId: 'egg1'} 
    ]
  }),
 ph_topic3: makeNode('ph_topic3', {
    response: `Sorry😅<br>You choose the next topic.`,
    subtitle: '',
    buttons: [
      { label: 'Tell me about yourself', nextNodeId: 'p1'},
      { label: 'Accessibillity!', nextNodeId: 'acc1'},
      { label: 'AI', nextNodeId: 'ai1'},
      { label: 'Design', nextNodeId: 'd1'},
      { label: 'Jokes', nextNodeId: 'jk1'},
      { label: 'What is this feature?', nextNodeId: 'garden2'} 
    ]
  }),
 meta1: makeNode('meta1', {
    response: `Sort of.<br>It’s a conversational feature<br>you click, I reply, and we see where it goes.`,
    subtitle: '',
    buttons: [
      { label: 'Tell me something meaningful', nextNodeId: 'ph1'},
      { label: 'Tell me more about this tool', nextNodeId: 'garden1'},
      { label: 'What else can we talk about?', nextNodeId: 'meta_topic'} 
    ]
  }),
 ph_topic1: makeNode('ph_topic1', {
    response: `And just  like on every conversation, you got to  chose<br>What do you want to talk about?`,
    subtitle: '',
    buttons: [
      { label: 'Tell me about yourself', nextNodeId: 'p1'},
      { label: 'Accessibillity!', nextNodeId: 'acc1'},
      { label: 'AI', nextNodeId: 'ai1'}, 
      { label: 'Design', nextNodeId: 'd1'},
      { label: 'Jokes', nextNodeId: 'jk1'},
      { label: 'What is this feature?', nextNodeId: 'garden2'} 
    ]
  }),
 p1: makeNode('p1', {
    response: `I’m a service designer disguised as a product designer<br>or the opposite, depending on who’s asking.`,
    subtitle: '',
    buttons: [
      { label: 'Tell me more', nextNodeId: 'p2'},
      { label: 'How would you define Product Design?', nextNodeId: 'pd1'},
      { label: 'How would you define Service Design?', nextNodeId: 'sd1'}, 
      { label: 'I want to change topics', nextNodeId: 'ph_topic2'}
    ]
  }),
 p2: makeNode('p2', {
    response: `I design like I talk: direct, honest and a bit idealistic.`,
    subtitle: '',
    buttons: [
      { label: 'Tell me more', nextNodeId: 'p3'},
      { label: 'So be direct with me', nextNodeId: 'p2_2'},
      { label: 'Show me your work', nextNodeId: 'work'}
    ]
  }),
 p3: makeNode('p3', {
    response: `I enjoy solving hard problems.<br>The harder the better.`,
    subtitle: '',
    buttons: [
      { label: 'Tell me more', nextNodeId: 'p4'},
      { label: 'You sound arrogant', nextNodeId: 'egg3'},
      { label: 'I want to change topics', nextNodeId: 'ph_topic2'}
    ]
  }),
 p4: makeNode('p4', {
    response: `Most design problems are misunderstandings<br>waiting for someone to listen properly.`,
    subtitle: '',
    buttons: [
      { label: 'Keep yapping', nextNodeId: 'p5'},
      { label: 'Tell me something you’re into', nextNodeId: 'garden1'},
      { label: 'I want to change topics', nextNodeId: 'ph_topic2'}
    ]
  }),
 p5: makeNode('p5', {
    response: `If it only looks good, it’s a facelift.<br>If it works, it’s design.<br>If it changes behavior, it’s service`,
    subtitle: '',
    buttons: [
      { label: 'I want more yapping!', nextNodeId: 'p6'},
      { label: 'Tell me more about Product and Service', nextNodeId: 'pd1'},
      { label: 'Why are you so cheesy', nextNodeId: 'egg1'},
      { label: 'Bro be normal', nextNodeId: 'egg1'} 
    ]
  }),
 p6: makeNode('p6', {
    response: `Ok that’s all i got. <br>If you want more yap, let’s chat:<br>${textLinkImg('rodrigotavr@gmail.com', "https://google.com.br")}`,
    subtitle: '',
    buttons: [
      { label: 'Tell me more about Product and Service', nextNodeId: 'pd1'},
      { label: 'I want to change topics', nextNodeId: 'ph_topic1'}
    ]
  }),
p2_2: makeNode('p2_2', {
    response: `What's your challenge?<br>And what’s slowing you down?<br>Tell me all about it: ${textLinkImg('rodrigotavr@gmail.com', "https://google.com.br")}`,
    subtitle: '',
    buttons: [
      { label: 'Tell me more about you', nextNodeId: 'p3'},
      { label: 'I want to change topics', nextNodeId: 'ph_topic2'}
  ]}),
d1: makeNode('d1', {
    response: `Having fun is the best way to get good at design.`,
    subtitle: '',
    buttons: [
      { label: 'That is true', nextNodeId: 'p4'},
      { label: 'Is that why you build this?', nextNodeId: 'd2'},
      { label: 'I want to change topics', nextNodeId: 'ph_topic2'}
  ]}),
d2: makeNode('d2', {
    response: `Actually yes😅`,
    subtitle: '',
    buttons: [
      { label: 'And how did you do it?', nextNodeId: 'case_garden1'},
      { label: 'Keep talking about design', nextNodeId: 'p4'},
      { label: 'I want to change topics', nextNodeId: 'ph_topic2'}
  ]}),
meta_topic: makeNode('meta_topic', {
    response: `More than you’d think, actually.<br>Choose a topic.`,
    subtitle: '',
    buttons: [
      { label: 'Tell me about yourself', nextNodeId: 'p1'},
      { label: 'Accessibillity!', nextNodeId: 'acc1'},
      { label: 'AI', nextNodeId: 'ai1'}, 
      { label: 'Design', nextNodeId: 'd1'},
      { label: 'Jokes', nextNodeId: 'jk1'},
      { label: 'What is this feature?', nextNodeId: 'garden2'} 
  ]}),
ph_topic2: makeNode('ph_topic2', {
    response: `Conversations dont need to be linear.<br>What do you want to explore now?`,
    subtitle: '',
    buttons: [
      { label: 'Tell me about yourself', nextNodeId: 'p1'},
      { label: 'Accessibillity!', nextNodeId: 'acc1'},
      { label: 'AI', nextNodeId: 'ai1'}, 
      { label: 'Design', nextNodeId: 'd1'},
      { label: 'Jokes', nextNodeId: 'jk1'},
      { label: 'What is this feature?', nextNodeId: 'garden2'} 
  ]}),
ai_topic: makeNode('ai_topic', {
    response: `Machines execute, humans chose.<br>Are you human?`,
    subtitle: '',
    buttons: [
      { label: 'Tell me about yourself', nextNodeId: 'p1'},
      { label: 'Accessibillity!', nextNodeId: 'acc1'},
      { label: 'AI', nextNodeId: 'ai1'}, 
      { label: 'Design', nextNodeId: 'd1'},
      { label: 'Jokes', nextNodeId: 'jk1'},
      { label: 'What is this feature?', nextNodeId: 'garden2'} 
  ]}),
acc_topic: makeNode('acc_topic', {
    response: `Choice is cool.<br>Choice for everyone is cooler.<br>That’s accessibility.`,
    subtitle: '',
    buttons: [
      { label: 'Tell me about yourself', nextNodeId: 'p1'},
      { label: 'Accessibillity!', nextNodeId: 'acc1'},
      { label: 'AI', nextNodeId: 'ai1'}, 
      { label: 'Design', nextNodeId: 'd1'},
      { label: 'Jokes', nextNodeId: 'jk1'},
      { label: 'What is this feature?', nextNodeId: 'garden2'} 
  ]}),
jk_topic: makeNode('jk_topic', {
    response: `Serious doesn’t mean boring — I promise. <br>Pick a topic.`,
    subtitle: '',
    buttons: [
      { label: 'Tell me about yourself', nextNodeId: 'p1'},
      { label: 'Accessibillity!', nextNodeId: 'acc1'},
      { label: 'AI', nextNodeId: 'ai1'}, 
      { label: 'Design', nextNodeId: 'd1'},
      { label: 'Jokes', nextNodeId: 'jk1'},
      { label: 'What is this feature?', nextNodeId: 'garden2'} 
  ]}),
garden_topic: makeNode('garden_topic', {
    response: `Great!<br>Feel free to choose a topic.`,
    subtitle: '',
    buttons: [
      { label: 'Tell me about yourself', nextNodeId: 'p1'},
      { label: 'Accessibillity!', nextNodeId: 'acc1'},
      { label: 'AI', nextNodeId: 'ai1'}, 
      { label: 'Design', nextNodeId: 'd1'},
      { label: 'Jokes', nextNodeId: 'jk1'},
      { label: 'What is this feature?', nextNodeId: 'garden2'} 
  ]}),
pd1: makeNode('pd1', {
    response: `Product design is the art of making <br>complex decisions feel obvious.`,
    subtitle: '',
    buttons: [
      { label: 'What about service?', nextNodeId: 'case_garden1'},
      { label: 'I want to talk about other thing', nextNodeId: 'ph_topic2'}
  ]}),
pd2: makeNode('pd2', {
    response: `Service design is the choreography of interactions.<br>Human, digital, and everything in between.`,
    subtitle: '',
    buttons: [
      { label: 'Very cool do you have a case where you apply both?', nextNodeId: 'case_service'},
      { label: 'I want to talk about other thing', nextNodeId: 'ph_topic2'}
  ]}),
sd1: makeNode('sd1', {
    response: `Service design is the choreography of interactions.<br>Human, digital, and everything in between.`,
    subtitle: '',
    buttons: [
      { label: 'What about Product?', nextNodeId: 'sd2'},
      { label: 'I want to talk about other thing', nextNodeId: 'ph_topic2'}
  ]}),
sd2: makeNode('sd2', {
    response: `Product design is the art of making <br>complex decisions feel obvious.`,
    subtitle: '',
    buttons: [
      { label: 'Very cool do you have a case where you apply both?', nextNodeId: 'case_service'},
      { label: 'I want to talk about other thing', nextNodeId: 'ph_topic2'}
  ]}),
case_service: makeNode('case_service', {
    response: `Sure, have a look on ${textLink('this link', "https://docs.google.com/presentation/d/1BrBduYvyLGTbzfZS1OyKVEwIW3sO2RDvKHdQFU18is4/edit?usp=sharing")}`,
    subtitle: '',
    buttons: [
      { label: 'I want to talk about other thing', nextNodeId: 'ph_topic2'}
  ]}),
garden1: makeNode('garden1', {
    response: `I love  conversational design,<br>thats why i built this Mind Garden.`,
    subtitle: '',
    buttons: [
      { label: 'Why you call it Mind Garden?', nextNodeId: 'garden2'},
      { label: 'How did you build this?', nextNodeId: 'case_garden1'},
      { label: 'I want to talk about other thing', nextNodeId: 'ph_topic2'}
  ]}),
garden2: makeNode('garden2', {
    response: `This is a tour through my mind<br>I believe ideas are better explored than explained<br>Welcome to my Mind Garden.`,
    subtitle: '',
    buttons: [
      { label: 'Is this all AI?', nextNodeId: 'case_garden2'},
      { label: 'How did you build this?', nextNodeId: 'case_garden1'},
      { label: 'I want to explore!', nextNodeId: 'garden_topic'}
  ]}),
case_garden1: makeNode('case_garden1', {
    response: `You can click on ${textLink('this link', "")} and I will show you`,
    subtitle: '',
    buttons: [
      { label: 'I want to talk about other thing', nextNodeId: 'ph_topic2'}
  ]}),
case_garden2: makeNode('case_garden2', {
    response: `Actually, this is just a conversational flow<br>You can click on ${textLink('this link', "")} and I will show you`,
    subtitle: '',
    buttons: [
      { label: 'I want to talk about other thing', nextNodeId: 'ph_topic2'}
  ]}),
ai1: makeNode('ai1', {
    response: `I incorporate AI into my workflow.<br>Not to do things for me — but to think with me.`,
    subtitle: '',
    buttons: [
      { label: 'How?', nextNodeId: 'ai2'},
      { label: 'Do you have a case where you use AI?', nextNodeId: 'case_ai'},
      { label: 'I wanna talk about other thing', nextNodeId: 'ai_topic'}
  ]}),
ai2: makeNode('ai2', {
    response: `I use AI to think better, learn faster,<br>and automate the boring parts.<br>So I can focus on judgment, craft, and impact.`,
    subtitle: '',
    buttons: [
      { label: 'Go deeper.', nextNodeId: 'ai3'},
      { label: 'Do you have a case where you use AI?', nextNodeId: 'case_ai'},
      { label: 'I wanna talk about other thing', nextNodeId: 'ai_topic'}
  ]}),
ai3: makeNode('ai3', {
    response: `I use AI to think better, learn faster,<br> and automate the boring parts.<br>So I can focus on judgment, craft, and impact.`,
    subtitle: '',
    buttons: [
      { label: 'Do you have a case where you use AI?', nextNodeId: 'case_ai'},
      { label: 'I wanna talk about other thing', nextNodeId: 'ai_topic'}
  ]}),
case_ai: makeNode('case_ai', {
    response: `I actually do, here you go:<br>${textLinkImg('AI Elegibillity Payer Mapping', "https://docs.google.com/presentation/d/1BrBduYvyLGTbzfZS1OyKVEwIW3sO2RDvKHdQFU18is4/edit?usp=sharing")}`,
    subtitle: '',
    buttons: [
      { label: 'I wanna talk about other thing', nextNodeId: 'ai_topic'}
  ]}),
acc1: makeNode('acc1', {
    response: `Accessibility isn’t optional.<br>It’s civilization.`,
    subtitle: '',
    buttons: [
      { label: 'Civilization?!', nextNodeId: 'acc2'},
      { label: 'Are you into accessibillity?', nextNodeId: 'acc5'},
      { label: 'I wanna talk about other thing', nextNodeId: 'acc_topic'}
  ]}),
acc2: makeNode('acc2', {
    response: `Civilization is the agreement that everyone gets to participate.<br>Participation is good ethics — and good economics.`,
    subtitle: '',
    buttons: [
      { label: 'Good economics $$?', nextNodeId: 'acc3'},
      { label: 'Accessibillity is so cool!', nextNodeId: 'acc5'},
      { label: 'I wanna talk about other thing', nextNodeId: 'acc_topic'}
  ]}),
acc3: makeNode('acc3', {
    response: `Markets reward products that remove barriers.<br>Accessibility is how ethics and ROI shake hands.`,
    subtitle: '',
    buttons: [
      { label: 'Accessibillity is so cool!', nextNodeId: 'acc5'},
      { label: 'Accessibillity is so cool!', nextNodeId: 'acc5'},
      { label: 'Accessibillity is so cool!', nextNodeId: 'acc5'}
  ]}),
acc4: makeNode('acc4', {
    response: `Thanks for enduring my accessibility sermon.<br>If you want to rant back:${textLinkImg('rodrigotavr@gmail.com', "mailto:rodrigotavr@gmail.com")}`,
    subtitle: '',
    buttons: [
      { label: 'Are you like this at work?', nextNodeId: 'egg2'},
      { label: 'Bro be normal', nextNodeId: 'egg1'},
      { label: 'I wanna talk about other thing', nextNodeId: 'acc_topic'}
  ]}),
acc5: makeNode('acc5', {
    response: `Yes I love it!<br>It is actually one of my favourite disciplines.`,
    subtitle: '',
    buttons: [
      { label: 'You seem very nice', nextNodeId: 'acc6'},
      { label: 'I wanna talk about other thing', nextNodeId: 'acc_topic'}
  ]}),
acc6: makeNode('acc6', {
    response: `I appreciate that.<br>If you ever want to chat for real:<br>${textLinkImg('rodrigotavr@gmail.com', "mailto:rodrigotavr@gmail.com")}`,
    subtitle: '',
    buttons: [
      { label: 'I wanna talk about other thing', nextNodeId: 'acc_topic'}
  ]}),
egg1: makeNode('egg1', {
    response: `There’s a version of this portfolio where I behave.<br>${textLinkImg('Download resume', "mailto:rodrigotavr@gmail.com")}`,
    subtitle: '',
    buttons: [
      { label: 'I wanna talk about other thing', nextNodeId: 'acc_topic'}
  ]}),
egg2: makeNode('egg2', {
    response: `I am worse`,
    subtitle: '',
    buttons: [
      { label: "That's concerning", nextNodeId: 'egg2_1'},
      { label: 'Good', nextNodeId: 'egg2_2'}
  ]}),
egg2_1: makeNode('egg2_1', {
    response: `It’s concerning until you see the results.<br>Then it becomes… convenient.`,
    subtitle: '',
    buttons: [
      { label: 'Bro be normal', nextNodeId: 'egg1'},
      { label: 'You are so goofy', nextNodeId: 'egg1'},
      { label: 'I think i like you', nextNodeId: 'egg2_2'},
      { label: 'I want to change topics', nextNodeId: 'ph_topic2'}
  ]}),
egg2_2: makeNode('egg2_2', {
    response: `Good. Then we’d get along.<br> Wanna reach out?<br>${textLinkImg('rodrigotavr@gmail.com', "mailto:rodrigotavr@gmail.com")}`,
    subtitle: '',
    buttons: [
      { label: 'I want to change topics', nextNodeId: 'ph_topic2'}
  ]}),
egg3: makeNode('egg3', {
    response: `I prefer to think of it as efficient confidence<br>and an embarrassing amount of passion for design.`,
    subtitle: '',
    buttons: [
      { label: 'Bro be normal', nextNodeId: 'egg1'}, 
      { label: 'I want to change topics', nextNodeId: 'ph_topic2'}
  ]}),
jk1: makeNode('jk1', {
  response: `Welcome to the jokes section.<br>Expectations are now your responsibility.`,
  subtitle: '',
  buttons: [
    { label: 'Make me laugh', nextNodeId: 'jk2' },
    { label: 'Let’s get serious again', nextNodeId: 'jk_topic' }
  ]}),

jk2: makeNode('jk2', {
  response: `Personas are cool.<br>But have you tried talking to an actual human?<br>Wild concept.`,
  subtitle: '',
  buttons: [
    { label: 'Another one', nextNodeId: 'jk3' },
    { label: 'Let’s get serious again', nextNodeId: 'jk_topic' }
  ]}),

jk3: makeNode('jk3', {
  response: `We don’t remove features in tech.<br>We bury them under new ones and call it innovation`,
  subtitle: '',
  buttons: [
    { label: 'Keep going', nextNodeId: 'jk4' },
    { label: 'Let’s get serious again', nextNodeId: 'jk_topic' }
  ]}),

jk4: makeNode('jk4', {
  response: `Users don’t hate change.<br>They hate unexplained changes made overnight to hit a quarter.`,
  subtitle: '',
  buttons: [
    { label: 'One more', nextNodeId: 'jk5' },
    { label: 'Let’s get serious again', nextNodeId: 'jk_topic' }
  ]}),

jk5: makeNode('jk5', {
  response: `UX is easy — just make everything intuitive to everyone<br>everywhere all the time.`,
  subtitle: '',
  buttons: [
    { label: 'Don’t stop now', nextNodeId: 'jk6' },
    { label: 'Let’s get serious again', nextNodeId: 'jk_topic' }
  ]}),

jk6: makeNode('jk6', {
  response: `Nothing humbles a designer like a confused user.<br>Nothing.`,
  subtitle: '',
  buttons: [
    { label: 'I’m committed', nextNodeId: 'jk7' },
    { label: 'Let’s get serious again', nextNodeId: 'jk_topic' }
  ]}),

jk7: makeNode('jk7', {
  response: `Seven jokes in.<br>This says more about you than me.`,
  subtitle: '',
  buttons: [
    { label: 'Keep judging me', nextNodeId: 'jk8' },
    { label: 'Let’s get serious again', nextNodeId: 'jk_topic' }
  ]}),

jk8: makeNode('jk8', {
  response: `At this stage, we’re just vibing.<br>No punchlines needed.`,
  subtitle: '',
  buttons: [
    { label: 'Vibe check', nextNodeId: 'jk9' },
    { label: 'Let’s get serious again', nextNodeId: 'jk_topic' }
  ]}),

jk9: makeNode('jk9', {
  response: `Congratulations — you discovered the infinite scroll of coping.`,
  subtitle: '',
  buttons: [
    { label: 'Final boss', nextNodeId: 'jk10' },
    { label: 'Let’s get serious again', nextNodeId: 'jk_topic' }
  ]}),

jk10: makeNode('jk10', {
  response: `THE JOKES END HERE!<br>But the conversation can always continue at:<br>${textLinkImg('rodrigotavr@gmail.com', "mailto:rodrigotavr@gmail.com")}`,
  subtitle: '',
  buttons: [
    { label: 'OK lets change topics then ', nextNodeId: 'jk_topic' }
  ]}),
}
