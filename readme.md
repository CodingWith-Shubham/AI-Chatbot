# AI Chatbot

A simple, universal support-chatbot interface with two agent views: food delivery support and transport support. The current implementation is UI-only and does not include chatbot, API, or backend logic.

An AI-powered customer support chatbot for food ordering and delivery assistance. The chatbot is divided into two focused support experiences so that each conversation can be handled with the right context and workflow:

1. **Food Support Chatbot** - helps customers with food, menu, and order-related questions.
2. **Delivery Support Chatbot** - helps customers track and resolve delivery-related issues.

## Features

### Food Support Chatbot

The food support chatbot can assist customers with:

- Menu and food item information
- Ingredient, allergen, and dietary questions
- Item availability and customization requests
- Order details and modifications
- Pricing and general food-ordering questions
- Recommendations based on customer preferences

### Delivery Support Chatbot

The delivery support chatbot can assist customers with:

- Delivery status and order tracking
- Estimated delivery times
- Late or delayed deliveries
- Incorrect, missing, or damaged items
- Delivery address and contact issues
- Cancellation, refund, and escalation requests

## How It Works

1. A customer starts a conversation with the chatbot.
2. The request is identified as either a **food-support** or **delivery-support** query.
3. The appropriate chatbot workflow handles the request.
4. The chatbot provides an answer, collects any required details, and guides the customer to the next step.
5. Queries that cannot be resolved automatically can be escalated to a support representative.

Keeping the two support areas separate makes responses more relevant and allows each chatbot to use its own prompts, business rules, and integrations.

## Suggested Conversation Flow

```text
Customer request
       |
       v
Intent identification
       |
   +---+---+
   |       |
   v       v
 Food   Delivery
support support
   |       |
   +---+---+
       |
       v
Answer, action, or escalation
```

## Example Questions

### Food Support

- “Is this dish vegetarian?”
- “Does this meal contain peanuts?”
- “Can I remove onions from my order?”
- “What items are available right now?”

### Delivery Support

- “Where is my order?”
- “My delivery is late. Can you check the status?”
- “One item is missing from my order.”
- “I entered the wrong delivery address. What can I do?”

## User Interface

The interface includes:

- A support inbox layout with sidebar navigation
- A **Food delivery support** tab for orders, restaurants, and delivery questions
- A **Transport support** tab for rides, routes, and travel questions
- Agent status cards, conversation history, quick-reply chips, and a message composer
- Responsive styling for desktop, tablet, and mobile screen sizes

The two tabs are switched with native HTML controls and CSS. The message composer and quick replies are visual placeholders until application logic is added.

## Project Structure

The implementation can be organized around the two chatbot responsibilities:

```text
AI-chatbot/
├── index.html           # Static chatbot interface
├── styles.css           # Layout, themes, and responsive styles
└── readme.md            # Project documentation
```

Shared functionality such as conversation handling, authentication, logging, and escalation can be added when the application logic is introduced.

## Getting Started

1. Clone or download the repository.
2. Open `index.html` directly in a browser, or serve the folder with any static web server.
3. Select either support tab to view the corresponding chatbot interface.

There are currently no dependencies, environment variables, or build steps.

Before deploying, verify that the chatbot can safely handle unknown requests and route unresolved issues to a human support channel.

## Design Goals

- Provide fast and helpful customer support
- Keep food and delivery conversations focused
- Give clear, actionable responses
- Protect customer and order information
- Escalate complex or sensitive issues appropriately
- Make the chatbot easy to extend with new support categories

## Future Enhancements

- Live order-status integration
- Restaurant and menu database integration
- Multilingual support
- Customer authentication and personalized responses
- Conversation history
- Human-agent handoff
- Analytics for common food and delivery issues

## License

Add the project license here when one is selected.