/**
 * Who to Ask Questionnaire Data
 * Each question has a unique ID, text, and an array of options.
 * Each option has a text value and a score impact.
 */
const questions = [
  {
    id: 1,
    text: "Who is this person?",
    type: "choice",
    options: [
      { text: "Teacher", score: 0 },
      { text: "Counselor", score: 0 },
      { text: "Mentor / Supervisor", score: 0 },
      { text: "Other", score: 0 }
    ],
    context: true // Used for personalization but doesn't affect score
  },
  {
    id: 2,
    text: "How well do they know you?",
    type: "choice",
    options: [
      { text: "Very well", score: 3 },
      { text: "Somewhat well", score: 1 },
      { text: "Not very well", score: 0 }
    ]
  },
  {
    id: 3,
    text: "In what context do they know you?",
    type: "choice",
    options: [
      { text: "Academic performance", score: 1 },
      { text: "Extracurricular / Community", score: 1 },
      { text: "Work / Internship", score: 1 },
      { text: "Multiple contexts", score: 2 },
      { text: "Not sure / limited context", score: 0 }
    ]
  },
  {
    id: 4,
    text: "Have they seen your effort or growth over time?",
    type: "choice",
    options: [
      { text: "Yes, over a long period", score: 2 },
      { text: "Somewhat", score: 1 },
      { text: "No, it was a brief interaction", score: 0 }
    ]
  },
  {
    id: 5,
    text: "Can they speak specifically about your strengths?",
    type: "choice",
    options: [
      { text: "Yes, they can provide specific examples", score: 3 },
      { text: "Maybe, but they might need reminding", score: 1 },
      { text: "No, they only know my basic info", score: 0 }
    ]
  },
  {
    id: 6,
    text: "Have you interacted with them recently?",
    type: "choice",
    options: [
      { text: "Yes, currently or within the last year", score: 1 },
      { text: "Somewhat, 1-2 years ago", score: 0 },
      { text: "No, it's been several years", score: -1 }
    ]
  },
  {
    id: 7,
    text: "Do they seem supportive and likely to write a thoughtful letter?",
    type: "choice",
    options: [
      { text: "Yes, definitely", score: 2 },
      { text: "Unsure", score: 0 },
      { text: "No, they seem too busy or unenthusiastic", score: -3, isRedFlag: true }
    ]
  },
  {
    id: 8,
    text: "How soon is your deadline?",
    type: "choice",
    options: [
      { text: "Urgent (less than 2 weeks)", score: -2 },
      { text: "Soon (about 1 month)", score: 0 },
      { text: "Flexible (2+ months)", score: 1 }
    ]
  }
];

const resultCategories = {
  STRONG: {
    label: "Strong Choice",
    minScore: 10,
    meaning: "Excellent candidate! They have the depth of knowledge to advocate for you effectively.",
    nextSteps: [
      "Ask them as soon as possible!",
      "Send a polite email requesting a meeting to discuss your goals.",
      "Share why you are asking *them* specifically."
    ],
    checklist: [
      "Updated resume or brag sheet",
      "List of specific programs/universities",
      "Clear deadline dates and submission instructions"
    ]
  },
  COULD_WORK: {
    label: "Could Work",
    minScore: 5,
    meaning: "This person is a reasonable option who likely wants to support you, but you'll need to prepare carefully to help them write a strong, specific letter.",
    nextSteps: [
      "Schedule a conversation to discuss your goals and your shared history.",
      "If they agree, provide very specific anecdotes from your time together.",
      "Offer to walk them through your 'brag sheet' in person or on a call."
    ],
    checklist: [
      "Detailed brag sheet highlighting specific accomplishments in their context",
      "A summary of your goals and what you hope they can highlight",
      "Clear deadline dates"
    ]
  },
  NOT_BEST_FIT: {
    label: "Not the Best Fit",
    minScore: -Infinity,
    meaning: "Proceed with caution. This person might not have enough specific, recent context to help you stand out effectively.",
    nextSteps: [
      "Consider reaching out to other potential recommenders first.",
      "If you have no other options, provide an extremely detailed 'brag sheet'.",
      "Ask them if they feel they can write a *strong* letter, and give them an easy 'out' if they are too busy."
    ],
    checklist: [
      "Comprehensive brag sheet covering your entire relationship",
      "A draft or outline of specific strengths you hope they might cover",
      "Very clear deadlines (the easier you make it, the better)"
    ]
  }
};
