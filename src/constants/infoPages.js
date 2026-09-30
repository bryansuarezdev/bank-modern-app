// These pages describe the interface demo. They do not imply a live banking service.
export const infoPages = {
  content: {
    title: 'Content',
    eyebrow: 'Useful links',
    summary: 'A quick guide to what you can explore in this banking interface demo.',
    sections: [
      { title: 'Features', text: 'Review the rewards, security and balance transfer concepts shown in the interface.' },
      { title: 'Product', text: 'See the billing and card layouts and how they are presented across screen sizes.' },
      { title: 'Clients', text: 'Browse example testimonials and partner marks used as design content.' },
    ],
    action: { label: 'Explore features', to: '/features' },
  },
  'how-it-works': {
    title: 'How it Works',
    eyebrow: 'Useful links',
    summary: 'Move through the demo in three simple steps. Nothing here connects to a bank account.',
    sections: [
      { title: '1. Start on Home', text: 'The opening page introduces the design and links to the main areas.' },
      { title: '2. Explore a section', text: 'Use the top menu to open Features, Product or Clients. The footer has more background information.' },
      { title: '3. Return at any time', text: 'Use the logo or the browser Back button to move between pages.' },
    ],
    action: { label: 'Start exploring', to: '/' },
  },
  create: {
    title: 'Create',
    eyebrow: 'Useful links',
    summary: 'Account creation is not available in this visual demo. No personal or payment information is collected.',
    sections: [
      { title: 'Preview the concept', text: 'Explore the product page to see the layout for cards and billing.' },
      { title: 'No registration required', text: 'All pages can be viewed without creating an account or signing in.' },
    ],
    action: { label: 'View the product', to: '/product' },
  },
  explore: {
    title: 'Explore',
    eyebrow: 'Useful links',
    summary: 'Choose the part of the experience you want to see next.',
    sections: [
      { title: 'Everyday tools', text: 'The Features page groups the main interface concepts.' },
      { title: 'Cards and billing', text: 'The Product page focuses on payment visuals and card information.' },
      { title: 'People and partners', text: 'The Clients page shows example stories and marks.' },
    ],
    action: { label: 'See all features', to: '/features' },
  },
  'terms-and-services': {
    title: 'Terms & Services',
    eyebrow: 'Useful links',
    summary: 'This website is a design demonstration, not a banking service or an offer of financial products.',
    sections: [
      { title: 'No transactions', text: 'The interface does not create accounts, move money, issue cards or process payments.' },
      { title: 'Example content', text: 'Testimonials, statistics and partner marks are presentation material and should not be read as verified claims.' },
      { title: 'Before real use', text: 'A production service would need its own provider agreements, privacy notice and service terms.' },
    ],
    action: { label: 'Return home', to: '/' },
  },
  'help-center': {
    title: 'Help Center',
    eyebrow: 'Community',
    summary: 'Answers to common questions about this demonstration site.',
    sections: [
      { title: 'Can I open an account?', text: 'No. The Create page explains what is available in this demo.' },
      { title: 'Where are the main pages?', text: 'Use the menu at the top for Home, Features, Product and Clients.' },
      { title: 'Can I send feedback?', text: 'The Suggestions page explains how to share an idea with the project owner.' },
    ],
    action: { label: 'Share a suggestion', to: '/info/suggestions' },
  },
  partners: {
    title: 'Partners',
    eyebrow: 'Community',
    summary: 'The partner area shows how brand marks can appear in the interface.',
    sections: [
      { title: 'Example marks', text: 'The logos on the Clients page are visual examples, not a statement of an active partnership.' },
      { title: 'Collaboration', text: 'The Become a Partner page explains the current status of partnership requests for this demo.' },
    ],
    action: { label: 'View example marks', to: '/clients' },
  },
  suggestions: {
    title: 'Suggestions',
    eyebrow: 'Community',
    summary: 'Have an idea for the design or navigation? Share it directly with the project owner by email.',
    sections: [
      { title: 'Useful feedback', text: 'Mention the page, what you expected to happen and what you would improve.' },
      { title: 'No account details', text: 'Please do not include passwords, payment details or other sensitive information.' },
    ],
    action: { label: 'Email a suggestion', href: 'mailto:bryan.end.dev@gmail.com?subject=Bank%20Modern%20App%20suggestion' },
  },
  blog: {
    title: 'Blog',
    eyebrow: 'Community',
    summary: 'A few topics behind this interface concept. This demo does not publish a live blog feed.',
    sections: [
      { title: 'Designing for clarity', text: 'Clear headings and distinct sections make financial information easier to scan.' },
      { title: 'Responsive navigation', text: 'The same pages are available from the desktop menu and the mobile menu.' },
      { title: 'Consistent color', text: 'The navy, mint and violet palette is shared across cards, links and page headings.' },
    ],
    action: { label: 'Explore the design', to: '/features' },
  },
  newsletters: {
    title: 'Newsletters',
    eyebrow: 'Community',
    summary: 'There is no mailing list or subscription service attached to this demo.',
    sections: [
      { title: 'No sign-up required', text: 'You can browse every page without submitting an email address.' },
      { title: 'What is available now', text: 'The Content page collects the sections you can explore today.' },
    ],
    action: { label: 'Browse content', to: '/info/content' },
  },
  'our-partner': {
    title: 'Our Partner',
    eyebrow: 'Partner',
    summary: 'See how partner marks are displayed in the Clients section of the demo.',
    sections: [
      { title: 'Visual examples', text: 'The marks are included as sample design assets. Their appearance does not confirm an endorsement or partnership.' },
      { title: 'Where to find them', text: 'Open Clients and scroll to the logo row below the example testimonials.' },
    ],
    action: { label: 'Open Clients', to: '/clients' },
  },
  'become-a-partner': {
    title: 'Become a Partner',
    eyebrow: 'Partner',
    summary: 'This showcase has no active partnership application or business onboarding flow.',
    sections: [
      { title: 'Project inquiries', text: 'If you want to discuss the design project, contact its owner with a short description of your idea.' },
      { title: 'No commercial commitment', text: 'Sending a message does not create an agreement or activate a banking integration.' },
    ],
    action: { label: 'Email the project owner', href: 'mailto:bryan.end.dev@gmail.com?subject=Bank%20Modern%20App%20partnership' },
  },
}
