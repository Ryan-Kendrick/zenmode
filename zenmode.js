// ==UserScript==
// @name         Zenmode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description
// @author       Ryan Kendrick
// @match        https://*.zendesk.com/agent/filters/*
// @match        https://*.zendesk.com/agent/tickets/*/organization/tickets
// @match        https://*.zendesk.com/agent/tickets/*/requester/requested_tickets*
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Tabler-icons_confetti.svg/24px-Tabler-icons_confetti.svg.png?20230426175116
// @grant        none
// ==/UserScript==

;(function () {
  "use strict"

  const blackList = ["Zhang Wei Xu", "Soobin Do"]

  const CONFIG = {
    variations: ["affirmations", "affirmations", "censored"],
    affirmations: {
      status: ["Loved", "Pondering", "Reassured", "Majestic", "???"],
      subject: [
        "Great job today, keep it up!",
        "When we are no longer able to change a situation, we are challenged to change ourselves.",
        "She'll be right",
        "Dolphins can alternate which half of their brain is sleeping.",
        "Ţ̷̬̼̖̻̜͈͑̀̋̈́̎̓H̶̡̙͓̟͎̥̼̭̥̹̪͖̹̩̟̓͆̐͜͜Ḛ̷͋̐̕̚ ̵̬̰͙̼̰̫͈̺͉̝̖̒D̴̡̛̛̥̮͈͖̫͍̖͔̹͉̓̾̉͒̓̒̋̃̆̆͜͜͠͠͝Ẽ̸̢̦̜̖̙̊̀̀͒͛͒̚͝É̷̡͓̤͙̈́̓̕͝P̶̧̻̮̟͉̙̠̳͉̫͍̽̀͐͜ ̸̰͈̰̰̬̲̿̒́͗̌͋͘͜͝ͅǪ̶̪̻͇̥͍̖̞̖̝̞̮̞̰͌̊͠ͅN̵̡̛̻̹̜̺͍͕̣̮͍̱̖͍̓̀̀̾̈̊̅̚ͅͅE̴͈̬̣̥͓͗̂̑ͅ ̶̧͓͓͙̰̜̳̖̗̺̞̻̗̠͖̤̦̈́̈́̈́̑̄͒̇͛̈́̂̒̑͠C̴̡̠̜̪͛͊̉̒̇͆̈̍̆́̂͘͘͜͝Ă̴̗̲͕̪̔̈́̊̿͂̄̅̊̍͗̃͗̀̚͝L̴̡̨͇͙̣̠̻̬̪̱̭̀́͝L̵̡̨̻̤̩̣͓̻̪͕͒̄̽͗̐͆̉́͑͛͊̇͘Ş̶̖͍̲̞̦̱̥͕͙͇̪̠̱́̈́̔̑͐̅͜͝",
      ],
      requestor: [
        "Mum 🌸",
        "The Philosopher",
        "A Bloke",
        "Bottlenose Dolphin",
        "Cthulhu",
      ],
      priority: ["Highest", "High", "Low", "🐬", "Cosmic"],
      organization: [
        "Family",
        "Unaffiliated",
        "Looking for work",
        "Oceanic",
        "Eldritch Horrors",
      ],
      style: {},
    },
    censored: {
      status: ["[CENSORED]"],
      subject: ["[CENSORED]"],
      requestor: ["[CENSORED]"],
      priority: ["[CENSORED]"],
      organization: ["[CENSORED]"],
      style: {
        "background-color": "#000",
        border: "4px solid red",
      },
    },
  }

  const containerSelector = "[data-garden-id='tables.body']"
  const ticketsSelector = "[data-garden-id='tables.row']"

  let visibleTickets = null

  function findDeepestChild(element) {
    if (!element?.firstElementChild) return element
    return findDeepestChild(element.firstElementChild)
  }

  function updateTickets(tickets) {
    for (const ticket of tickets) {
      if (ticket.childNodes.length < 9) continue

      const ticketStatusEl = ticket.childNodes[3]
      const subjectEl = ticket.childNodes[4]
      const requestorEl = ticket.childNodes[5]
      const priorityEl = ticket.childNodes[8]
      const organizationEl = ticket.childNodes[9]
      if (blackList.includes(requestorEl.textContent.trim())) {
        const variationSelection =
          CONFIG.variations[
            Math.floor(Math.random() * CONFIG.variations.length)
          ]

        const variation = CONFIG[variationSelection]
        const subVariant = Math.floor(Math.random() * variation.status.length)

        const statusText = findDeepestChild(ticketStatusEl)
        statusText.textContent = variation.status[subVariant]

        const subjectText = findDeepestChild(subjectEl)
        subjectText.textContent = variation.subject[subVariant]

        const requestorText = findDeepestChild(requestorEl)
        requestorText.textContent = variation.requestor[subVariant]

        const priorityText = findDeepestChild(priorityEl)
        priorityText.textContent = variation.priority[subVariant]

        const organizationText = findDeepestChild(organizationEl)
        organizationText.textContent = variation.organization[subVariant]

        if (variation.status[subVariant] === "Loved") {
          ticket.style.backgroundColor = "floralwhite"
          statusText.style.backgroundColor = "#7F00FF"
        }
        if (variation.status[subVariant] === "???") {
          ticket.style.backgroundColor = "crimson"
          statusText.style.backgroundColor = "#000"
          subjectText.style.overflow = "visible"
        }
        if (variation.status[subVariant] === "Majestic")
          ticket.style.backgroundColor = "aliceblue"
        if (variation.status[subVariant] === "[CENSORED]") {
          statusText.style.backgroundColor = "#fff"
          statusText.style.color = "#000"
          subjectText.style.color = "#fff"
          requestorText.style.color = "#fff"
          priorityText.style.color = "#fff"
          organizationText.style.color = "#fff"
        }

        if (variation.style) {
          Object.entries(variation.style).forEach(([property, value]) => {
            ticket.style.setProperty(property, value, "important")
          })
        }
      }
    }
  }

  function checkForTickets() {
    const container = document.querySelector(containerSelector)
    const tickets = container.querySelectorAll(ticketsSelector)
    const ticketsToChange =
      visibleTickets !== tickets.length ||
      visibleTickets[0].innerHTML !== tickets[0].innerHTML
    if (ticketsToChange) {
      visibleTickets = tickets
      container.style.overflow = "visible"
      updateTickets(tickets)
    }
  }

  function setupPerformantObserver(target) {
    checkForTickets()
    const performantObserver = new MutationObserver(checkForTickets)
    performantObserver.observe(target, {
      childList: true,
      subtree: true,
    })
  }

  const containerFinder = new MutationObserver((_, observer) => {
    const observerTarget = document.querySelector(containerSelector)

    if (observerTarget) {
      setupPerformantObserver(observerTarget)
      observer.disconnect()
    }
  })

  containerFinder.observe(document.body, {
    childList: true,
    subtree: true,
  })
})()
