(() => {
  const panel = document.querySelector(".transport-panel");
  if (!panel) return;

  const body = panel.querySelector(".transport-chat-body");
  const input = panel.querySelector(".transport-input");
  const sendButton = panel.querySelector(".transport-send");
  const attachButton = panel.querySelector(".transport-attach");
  const fileInput = panel.querySelector(".transport-file-input");
  const quickReplies = panel.querySelectorAll(".quick-replies button");

  const responses = [
    {
      keywords: ["track", "where", "location", "ride"],
      message: "I can help track your ride. Please share your booking reference so I can look up the latest status."
    },
    {
      keywords: ["booking", "book", "change", "reservation"],
      message: "I can help with your booking. Tell me whether you want to change the time, route, or passenger details."
    },
    {
      keywords: ["late", "delay", "delayed", "waiting"],
      message: "I’m sorry for the delay. Please send your booking reference and I’ll help you review the journey details."
    },
    {
      keywords: ["cancel", "refund", "charge", "payment"],
      message: "I can help with cancellations and payment questions. Please provide your booking reference without sharing card details."
    }
  ];

  const defaultResponse = "Thanks for reaching out. I can help with rides, routes, bookings, and travel issues. What would you like to sort out?";

  function addMessage(text, type) {
    const row = document.createElement("div");
    row.className = `message-row ${type}-message`;

    if (type === "agent") {
      row.innerHTML = `
        <div class="avatar avatar-transport small-avatar">⌁</div>
        <div class="message-content">
          <span class="message-author">Transport support</span>
          <div class="bubble"></div>
        </div>
      `;
      row.querySelector(".bubble").textContent = text;
    } else {
      row.innerHTML = `
        <div class="message-content">
          <span class="message-author">You</span>
          <div class="bubble"></div>
        </div>
        <div class="avatar avatar-user small-avatar">AM</div>
      `;
      row.querySelector(".bubble").textContent = text;
    }

    body.appendChild(row);
    body.scrollTop = body.scrollHeight;
  }

  function getResponse(text) {
    const normalizedText = text.toLowerCase();
    const match = responses.find((response) =>
      response.keywords.some((keyword) => normalizedText.includes(keyword))
    );
    return match ? match.message : defaultResponse;
  }

  function sendMessage(text) {
    const message = text.trim();
    if (!message) return;

    addMessage(message, "user");
    input.value = "";
    input.focus();

    window.setTimeout(() => addMessage(getResponse(message), "agent"), 350);
  }

  sendButton.addEventListener("click", () => sendMessage(input.value));

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input.value);
    }
  });

  quickReplies.forEach((button) => {
    button.addEventListener("click", () => sendMessage(button.textContent));
  });

  attachButton.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", () => {
    const [file] = fileInput.files;
    if (!file) return;
    addMessage(`I attached: ${file.name}`, "user");
    window.setTimeout(() => addMessage("Thanks, I’ve received the attachment. A transport specialist can review it with your booking details.", "agent"), 350);
    fileInput.value = "";
  });
})();
