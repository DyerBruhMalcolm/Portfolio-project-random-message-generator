const adverbs = ['super', 'wildly', 'very', 'not so', 'extremely', 'stupidly', 'mildly', 'kind of', 'not', 'not really' ];
const adjectives = ['stupid', 'annoying', 'spectacular', 'handsome', 'cool', 'gullable', 'smart', 'passive aggressive', 'pleasent', 'intelligent' ]
const randomMessageSelector = () => {
    const randomNumber1 = Math.floor(Math.random() * 9)
    const randomNumber2 = Math.floor(Math.random() * 9)
    return `You are ${adverbs[randomNumber1]} ${adjectives[randomNumber2]}.`
}
console.log(randomMessageSelector());
