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
    variationPool: [
      "affirmations",
      "affirmations",
      "affirmations",
      "censored",
      "sea",
    ],

    affirmations: {
      id: "affirmations",
      status: ["Loved", "Pondering", "Reassured", "Majestic", "???", "Wealthy"],
      subject: [
        "Great job today, keep it up!",
        "When we are no longer able to change a situation, we are challenged to change ourselves.",
        "She'll be right",
        "Dolphins can alternate which half of their brain is sleeping.",
        "Ţ̷̬̼̖̻̜͈͑̀̋̈́̎̓H̶̡̙͓̟͎̥̼̭̥̹̪͖̹̩̟̓͆̐͜͜Ḛ̷͋̐̕̚ ̵̬̰͙̼̰̫͈̺͉̝̖̒D̴̡̛̛̥̮͈͖̫͍̖͔̹͉̓̾̉͒̓̒̋̃̆̆͜͜͠͠͝Ẽ̸̢̦̜̖̙̊̀̀͒͛͒̚͝É̷̡͓̤͙̈́̓̕͝P̶̧̻̮̟͉̙̠̳͉̫͍̽̀͐͜ ̸̰͈̰̰̬̲̿̒́͗̌͋͘͜͝ͅǪ̶̪̻͇̥͍̖̞̖̝̞̮̞̰͌̊͠ͅN̵̡̛̻̹̜̺͍͕̣̮͍̱̖͍̓̀̀̾̈̊̅̚ͅͅE̴͈̬̣̥͓͗̂̑ͅ ̶̧͓͓͙̰̜̳̖̗̺̞̻̗̠͖̤̦̈́̈́̈́̑̄͒̇͛̈́̂̒̑͠C̴̡̠̜̪͛͊̉̒̇͆̈̍̆́̂͘͘͜͝Ă̴̗̲͕̪̔̈́̊̿͂̄̅̊̍͗̃͗̀̚͝L̴̡̨͇͙̣̠̻̬̪̱̭̀́͝L̵̡̨̻̤̩̣͓̻̪͕͒̄̽͗̐͆̉́͑͛͊̇͘Ş̶̖͍̲̞̦̱̥͕͙͇̪̠̱́̈́̔̑͐̅͜͝",
        "Abundance and prosperity surround you",
      ],
      requestor: [
        "Mum 🌸",
        "The Philosopher",
        "A Bloke",
        "Bottlenose Dolphin",
        "Cthulhu",
        "Fortune Teller",
      ],
      priority: ["Highest", "High", "Low", "🐬", "Cosmic", "Indeterminate"],
      organization: [
        "Family",
        "Unaffiliated",
        "Looking for work",
        "Oceanic",
        "Eldritch Horrors",
        "Crystallomancy Inc.",
      ],
      style: {},
    },

    censored: {
      id: "censored",
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

    sea: {
      id: "sea",
      status: ["🦑", "🦐", "🦈", "🦪", "🐠", "🏝️"],
      subject: ["🐚", "🦞", "🐬", "🦀", "🐙", "🏄"],
      requestor: ["🦀", "🐬", "🐳", "🐋", "🐟", "🏖️"],
      priority: ["🐠", "🌊", "🐚", "🐠", "🐡", "🥥"],
      organization: ["🪼", "🏰", "⚓", "🦐", "🧜", "🍹"],
      style: {
        background: "RGBA(0, 0, 0, 0)",
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 15%, rgba(28, 163, 236, 1) 15%, rgba(35, 137, 218, 1) 80%, rgba(15, 94, 156, 1) 100%)",
        outline: "2px solid grey",
        "outline-offset": "-2px",
        "font-size": "24px",
      },
    },
  }

  function findDeepestChild(element) {
    if (!element?.firstElementChild) return element
    return findDeepestChild(element.firstElementChild)
  }

  function updateTickets(tickets) {
    for (const ticket of tickets) {
      if (ticket.children.length < 9) continue

      const ticketStatusEl = ticket.children[3]
      const subjectEl = ticket.children[4]
      const requestorEl = ticket.children[5]
      const priorityEl = ticket.children[8]
      const organizationEl = ticket.children[9]
      if (blackList.includes(requestorEl.textContent.trim())) {
        const variationSelection =
          CONFIG.variationPool[
            Math.floor(Math.random() * CONFIG.variationPool.length)
          ]

        const variation = CONFIG[variationSelection]
        const subVariant = Math.floor(Math.random() * variation.status.length)

        // Special case to wipe text content for "sea" variation
        if (variation.id === "sea") {
          for (const node of ticket.children) {
            const deepestChild = findDeepestChild(node)
            if (deepestChild) deepestChild.textContent = ""
          }
        }

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

        if (
          variation.id === "affirmations" &&
          variation.status[subVariant] === "Loved"
        ) {
          ticket.style.backgroundColor = "floralwhite"
          statusText.style.backgroundColor = "#7F00FF"
        }
        if (
          variation.id === "affirmations" &&
          variation.status[subVariant] === "???"
        ) {
          ticket.style.backgroundColor = "crimson"
          statusText.style.backgroundColor = "#000"
          subjectText.style.overflow = "visible"
        }
        if (
          variation.id === "affirmations" &&
          variation.status[subVariant] === "Majestic"
        )
          ticket.style.backgroundColor = "aliceblue"
        if (
          variation.id === "affirmations" &&
          variation.status[subVariant] === "Wealthy"
        )
          statusText.style.backgroundColor = "goldenrod"
        if (variation.id === "censored") {
          statusText.style.backgroundColor = "#fff"
          statusText.style.color = "#000"
          subjectText.style.color = "#fff"
          requestorText.style.color = "#fff"
          priorityText.style.color = "#fff"
          organizationText.style.color = "#fff"
        }
        if (variation.id === "sea") {
          ticket.style.position = "relative"
          statusText.style.background = "none"
          const oceanFloor = ["🪨", "🪸", "🐌", "🪸", "🪨", "🪱"]
          for (let i = 0; i < oceanFloor.length; i++) {
            const basePos = Math.min((100 / oceanFloor.length) * i, 95)

            const left = basePos + Math.random() * 5

            const element = document.createElement("div")
            element.textContent = oceanFloor[i]
            element.style.position = "absolute"
            element.style.bottom = "3px"
            element.style.left = `${left}vw`
            element.style.fontSize = "24px"
            ticket.appendChild(element)
          }

          statusText.style.paddingTop = `${Math.floor(
            Math.random() * 13 + 2
          )}px`
          statusText.style.paddingLeft = `${Math.floor(Math.random() * 31)}px`
          subjectText.style.paddingTop = `${Math.floor(
            Math.random() * 13 + 2
          )}px`
          subjectText.style.paddingLeft = `${Math.floor(Math.random() * 31)}px`
          requestorText.stylepaddingTtop = `${Math.floor(
            Math.random() * 13 + 2
          )}px`
          requestorText.style.paddingLeft = `${Math.floor(
            Math.random() * 31
          )}px`
          priorityText.style.paddingTop = `${Math.floor(
            Math.random() * 13 + 2
          )}px`
          priorityText.style.paddingLeft = `${Math.floor(Math.random() * 31)}px`
          organizationText.style.paddingTop = `${Math.floor(
            Math.random() * 13 + 2
          )}px`
          organizationText.style.paddingLeft = `${Math.floor(
            Math.random() * 31
          )}px`
        }

        if (variation.style) {
          Object.entries(variation.style).forEach(([property, value]) => {
            ticket.style.setProperty(property, value, "important")
          })
        }
      }
    }
  }

  const containerSelector = "[data-garden-id='tables.body']"
  const ticketsSelector = "[data-garden-id='tables.row']"

  let visibleTickets = null

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
