// ==UserScript==
// @name         Zenmode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description
// @author       Ryan Kendrick
// @match        https://*.zendesk.com/agent/filters/*
// @icon data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSIgYXJpYS1oaWRkZW49InRydWUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAyNCAyNCI+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuNTAwMDEgNi40OTQ3NmMtLjAwMjIyLjAwMDY3LS4wMDQ0My4wMDEzNC0uMDA2NjUuMDAyMDItMS4zNjk2NC40MTYxNS0yLjU3MTg5IDEuMjI1NDEtMy40MDU1NSAxLjg5MzM1LS40MjMxOC4zMzkwNy0uNzY2MTQuNjUzNzItMS4wMDQ4My44ODUxNy0uMTE5NTkuMTE1OTYtLjIxMzY5LjIxMTY5LS4yNzkzLjI3OTk5LS4wMzI4My4wMzQxNy0uMDU4NTcuMDYxNTMtLjA3Njg3LjA4MTE4bC0uMDIxODQuMDIzNjEtLjAwNjY1LjAwNzI4LS4wMDIyNS4wMDI0Ny0uMDAxNTIuMDAxNjdjLS4yMzU2NS4yNjA0OS0uMzE3MzYuNjI1NS0uMjE1MjQuOTYxNmwxLjg4OTY2IDYuMjE5M2MuMjgxMjIuOTI1NS45MDczMSAxLjYzMjggMS41OTUzNSAyLjE1OS42ODkyNS41MjcyIDEuNDk2Ni45MTY2IDIuMjUzMjcgMS4xOTguNzYxMTEuMjgzMiAxLjUwODE0LjQ3MDggMi4xMDM0MS41NzkxLjI5NzMuMDU0LjU2ODQuMDkwNC43OTM0LjEwNzcuMTExNy4wMDg1LjIyMzguMDEzMy4zMjg2LjAxMTMuMDgxNC0uMDAxNi4yNDM0LS4wMDc2LjQxMTEtLjA1ODYuMTY3OC0uMDUxLjMwNTctLjEzNjEuMzc0My0uMTguMDg4Mi0uMDU2Ni4xNzg2LS4xMjMuMjY2Ny0uMTkyMy4xNzc0LS4xMzk1LjM4MjQtLjMyMDUuNTk5NC0uNTMwOS0uMDc2LS4wMzY5LS4xNTI1LS4wNzU1LS4yMjk3LS4xMTUyLS42MDY4LS4zMTItMS4zNDMzLS43NTQ2LTIuMDY3NS0xLjMwNjQtLjQ4OTgtLjM3MzMtMS4wMTA2OC0uODI0Mi0xLjQ4OTg4LTEuMzQ5Mi0uMjg2NjIuNDQ2Ny0uODc2NzguNTkzNS0xLjM0MTI0LjMyNTMtLjQ3ODI5LS4yNzYxLS42NDIxNy0uODg3Ny0uMzY2MDMtMS4zNjYuMDE5MDYtLjAzMy4wMzg3My0uMDY3NS4wNTkxNS0uMTAzNC4xMDgzNS0uMTkwMi4yMzc3NC0uNDE3My40MDc5Ny0uNjQ5OEM3LjczNDU0IDE0LjY5NDEgNy41IDEzLjg5MzUgNy41IDEzVjYuNWwuMDAwMDEtLjAwNTI0Wk01LjcyMTk1IDExLjA0NjFjLS41Mjg0NC4xNjA2LS44MjY2NS43MTkxLS42NjYxIDEuMjQ3Ni4xNjA1Ni41Mjg0LjcxOTEuODI2NiAxLjI0NzUzLjY2NjFsLjAwOTU3LS4wMDNjLjUyODQzLS4xNjA1LjgyNjY1LS43MTkxLjY2NjA5LTEuMjQ3NS0uMTYwNTYtLjUyODQtLjcxOTEtLjgyNjYtMS4yNDc1My0uNjY2MWwtLjAwOTU2LjAwMjlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUgNGMtMS40MzE1IDAtMi44MTcxLjQyNDc5LTMuODA4OS44MjE1Mi0uNTAzNS4yMDE0LS45MjMxLjQwMjc2LTEuMjE4NzYuNTU0ODItLjE0ODE0LjA3NjE4LS4yNjYwMS4xNDA0My0uMzQ4NjQuMTg2Ny0uMDQxMzQuMDIzMTUtLjA3MzkzLjA0MTg0LS4wOTcxNS4wNTUzM2wtLjAyNzc1LjAxNjI0LS4wMDg0OS4wMDUwMi0uMDAyODYuMDAxNzEtLjAwMTk1LjAwMTE3QzkuMTg0MyA1LjgyMzIzIDkgNi4xNDg3NCA5IDYuNVYxM2MwIC45NjczLjM5MzQyIDEuODI2MS44OTg3NSAyLjUyOTYuNTA2MjUuNzA0OCAxLjE2NTU1IDEuMzEyIDEuODA3NjUgMS44MDEzLjY0Ni40OTIyIDEuMzA2Mi44ODg5IDEuODQ0MiAxLjE2NTUuMjY4OC4xMzgyLjUxNzYuMjUxOC43Mjc5LjMzMzguMTA0NC4wNDA3LjIxMDIuMDc3OC4zMTExLjEwNjMuMDc4NC4wMjIyLjIzNTEuMDYzNS40MTA0LjA2MzUuMTc1MyAwIC4zMzItLjA0MTMuNDEwNC0uMDYzNS4xMDA5LS4wMjg1LjIwNjctLjA2NTYuMzExMS0uMTA2My4yMTAzLS4wODIuNDU5MS0uMTk1Ni43Mjc5LS4zMzM4LjUzOC0uMjc2NiAxLjE5ODItLjY3MzMgMS44NDQyLTEuMTY1NS42NDIxLS40ODkzIDEuMzAxNC0xLjA5NjUgMS44MDc2LTEuODAxM0MyMC42MDY2IDE0LjgyNjEgMjEgMTMuOTY3MyAyMSAxM1Y2LjVjMC0uMzUxMjYtLjE4NTItLjY3NzI4LS40ODY0LS44NTgwMWwtLjAwMS0uMDAwNjUtLjAwMjktLjAwMTcxLS4wMDg1LS4wMDUwMi0uMDI3OC0uMDE2MjRjLS4wMjMyLS4wMTM0OS0uMDU1OC0uMDMyMTgtLjA5NzEtLjA1NTMzLS4wODI2LS4wNDYyNy0uMjAwNS0uMTEwNTItLjM0ODYtLjE4NjctLjI5NTctLjE1MjA2LS43MTUzLS4zNTM0Mi0xLjIxODgtLjU1NDgyQzE3LjgxNzEgNC40MjQ3OSAxNi40MzE1IDQgMTUgNFptNSAyLjUuNTEzNi0uODU4MDFTMjAuNTE0NSA1LjY0MjUxIDIwIDYuNVpNMTMgN2MtLjU1MjMgMC0xIC40NDc3Mi0xIDFzLjQ0NzcgMSAxIDFoLjAxYy41NTIzIDAgMS0uNDQ3NzIgMS0xcy0uNDQ3Ny0xLTEtMUgxM1ptNCAwYy0uNTUyMyAwLTEgLjQ0NzcyLTEgMXMuNDQ3NyAxIDEgMWguMDFjLjU1MjMgMCAxLS40NDc3MiAxLTFzLS40NDc3LTEtMS0xSDE3Wm0tNC43MDcxIDQuMjkyOWMtLjM5MDUuMzkwNS0uMzkwNSAxLjAyMzcgMCAxLjQxNDIuMDI2OS4wMjcuMDU0OS4wNTUyLjA4MzguMDg0NS40Nzc2LjQ4MzEgMS4yNDMgMS4yNTc0IDIuNjIzMyAxLjI1NzQgMS4zODAzIDAgMi4xNDU3LS43NzQzIDIuNjIzMi0xLjI1NzMuMDI5LS4wMjk0LjA1Ny0uMDU3Ni4wODM5LS4wODQ2LjM5MDUtLjM5MDUuMzkwNS0xLjAyMzcgMC0xLjQxNDItLjM5MDUtLjM5MDUtMS4wMjM3LS4zOTA1LTEuNDE0MiAwLS41MjkzLjUyOTMtLjc1Ny43NTYxLTEuMjkyOS43NTYxLS41MzU5IDAtLjc2MzYtLjIyNjgtMS4yOTI5LS43NTYxLS4zOTA1LS4zOTA1LTEuMDIzNy0uMzkwNS0xLjQxNDIgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPiA8L3N2Zz4=
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
        background: "rgba(0, 0, 0, 0)",
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

  function updateTickets(tickets, tableHead) {
    const tableColumns = tableHead.children[0].children
    let ticketStatusElIdx = null
    let subjectElIdx = null
    let requestorElIdx = null
    let priorityElIdx = null
    let organizationElIdx = null

    for (let i = 0; i < tableColumns.length; i++) {
      const column = tableColumns[i]
      const columnName = column.textContent.trim().toLowerCase()

      if (typeof columnName === "string" && columnName.includes("status")) {
        ticketStatusElIdx = i
      } else if (columnName === "subject") {
        subjectElIdx = i
      } else if (columnName === "requester") {
        requestorElIdx = i
      } else if (columnName === "priority") {
        priorityElIdx = i
      } else if (columnName === "organization") {
        organizationElIdx = i
      }
    }

    console.log(
      `Element indexes: status=${ticketStatusElIdx}, subject=${subjectElIdx}, requestor=${requestorElIdx}, priority=${priorityElIdx}, organization=${organizationElIdx}`
    )
    for (const ticket of tickets) {
      if (ticket.children.length < 9) continue

      const ticketStatusEl = ticket.children[ticketStatusElIdx]
      const subjectEl = ticket.children[subjectElIdx]
      const requestorEl = ticket.children[requestorElIdx]
      const priorityEl = ticket.children[priorityElIdx]
      const organizationEl = ticket.children[organizationElIdx]

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
        if (organizationText)
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
          if (organizationText) organizationText.style.color = "#fff"
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
          if (organizationText) {
            organizationText.style.paddingTop = `${Math.floor(
              Math.random() * 13 + 2
            )}px`
            organizationText.style.paddingLeft = `${Math.floor(
              Math.random() * 31
            )}px`
          }
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
    const tableHead = container.previousElementSibling
    const tickets = container.querySelectorAll(ticketsSelector)
    const ticketsToChange =
      visibleTickets !== tickets.length ||
      visibleTickets[0].innerHTML !== tickets[0].innerHTML
    if (ticketsToChange) {
      visibleTickets = tickets
      container.style.overflow = "visible"
      updateTickets(tickets, tableHead)
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
