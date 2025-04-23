const cookiesBanner = document.querySelector(".cookies_banner");
const cookiesAccept = document.querySelector(".accept");
const cookiesReject = document.querySelector(".reject");

function hideCookiesSettings() {
  cookiesBanner.style.display = "none";
}

cookiesAccept.addEventListener("click", () => {
  hideCookiesSettings();
});

cookiesReject.addEventListener("click", () => {
  hideCookiesSettings();
});
/*========================== end of cookie ====================*/
/* ============================ Ticket Generation ======================== */

const ticketsData = [
  {
    price: "$319",
    details: [
      { text: "Super Early Bird", style: "color: #212529;" }, // Додаємо стиль фону
      { text: "Save 46%!", style: "color: #212529; font-weight: 700;" }, // Додаємо стиль фону та жирність
      { text: "Ends July 31", style: "color: #8F73F0;" }, // Додаємо стиль фону
    ],
  },
  {
    price: "$399",
    details: [
      { text: "Early Bird", style: "color: #212529;" },
      { text: "Save 33%!", style: "color: #212529; font-weight: 700;" },
      { text: "Ends September 8", style: "color: #8F73F0;" },
    ],
  },
  {
    price: "$599",
    details: [
      { text: "General Admission", style: "color: #212529;" }, // Тільки один параграф
    ],
  },
];

// Оновлений спільний вміст для Block 2
const commonBlock2Content = `
  <p class="sold-out-text">SOLD<br>OUT</p> <!-- Додано клас для стилізації -->
`;

// Функція для створення одного елемента квитка
function createTicketElement(ticketData) {
  const ticketElement = document.createElement("div");
  ticketElement.classList.add("ticket-item");

  // Генеруємо HTML для деталей квитка
  const detailsHtml = ticketData.details
    .map((detail) => `<p style="${detail.style || ""}">${detail.text}</p>`)
    .join("");

  // Визначаємо, чи це квиток з одним елементом деталей
  const isSingleDetail = ticketData.details.length === 1;

  ticketElement.innerHTML = `
    <img
      class="ticket-edge ticket-edge-before"
      src="assets/icons/__before.svg"
      alt=""
    />
    <div class="ticket-block ticket-block1">
      <div class="ticket-price-container">
        <p class="ticket-price">${ticketData.price}</p>
      </div>
      <div class="ticket-details ${
        isSingleDetail ? "ticket-details-single" : ""
      }"> 
        ${detailsHtml}
      </div>
    </div>
    <div class="ticket-block ticket-block2">
      ${commonBlock2Content}
    </div>
    <img
      class="ticket-edge ticket-edge-after"
      src="assets/icons/__after.svg"
      alt=""
    />
  `;
  return ticketElement;
}
// Знаходимо контейнер для квитків в HTML
const ticketsContainer = document.querySelector(".tickets-container");

// Перевіряємо, чи контейнер існує, перш ніж додавати квитки
if (ticketsContainer) {
  ticketsContainer.innerHTML = ""; // Очищуємо контейнер

  ticketsData.forEach((data) => {
    const ticketNode = createTicketElement(data);
    ticketsContainer.appendChild(ticketNode);
  });
} else {
  console.error("Не вдалося знайти елемент .tickets-container");
}

/* ============================ End Ticket Generation ======================== */
/*=====================function create object speaker =========*/
function createSpeakerElement(speaker, index) {
  const speakerElement = document.createElement("section");

  if (index === 5) {
    // 6-й елемент - заглушка
    speakerElement.classList.add("placeholder");
    speakerElement.innerHTML = `
      <img src="${speaker.image}" alt="Фото + Many more" class="speaker__image">
      <p style="font-size: 35.4px; font-weight: bold;">+ Many more</p>
      <p style="font-size: 35.4px; font-weight: bold;">industry experts</p>
      <a href="#" class="speaker__bio" style="margin-top: 50.79px; margin-bottom: 180px;">View all speakers</a>
    `;
  } else {
    // Інші елементи - спікери
    speakerElement.classList.add("speaker");
    speakerElement.innerHTML = `
      <img src="${speaker.image}" alt="Фото ${speaker.name}" class="speaker__image">
      <h3 class="speaker__name">${speaker.name}</h3>
      <p>${speaker.title}</p>
      <p class="speaker__nick">${speaker.nick}</p>
       <a href="${speaker.bio}" class="speaker__bio" style="margin-top: 46.58px; margin-bottom: 137.89px;">view bio</a>
    `;
  }

  return speakerElement;
}
/*=================end function create object speaker =========*/
/*======================speakers Data =========================*/

const speakersData = [
  {
    image: "../assets/images/Keisha-Mabry.png",
    name: "Keisha Mabry",
    title: "Founder",
    nick: "Heydays",
    bio: "#",
  },
  {
    image: "../assets/images/Chris-Do.png",
    name: "Chris Do",
    title: "Founder",
    nick: "The Futur",
    bio: "#",
  },
  {
    image: "../assets/images/Rand-Fishkin.png",
    name: "Rand Fishkin",
    title: "Cofounder & CEO",
    nick: "SparkToro",
    bio: "#",
  },
  {
    image: "../assets/images/Ioana-Teleanu.png",
    name: "Ioana Teleanu",
    title: "Lead Product Designer, AI",
    nick: "Miro",
    bio: "#",
  },
  {
    image: "../assets/images/Kyle-Poyar.png",
    name: "Kyle Poyar",
    title: "Operating Partner",
    nick: "OpenView",
    bio: "#",
  },
  {
    image: "../assets/images/Sauce-CTA.png",
    name: "+ Many more",
    title: "industry experts",
    nick: "View all speakers",
    bio: "#",
  },
];
/*=================end of speakers Data =========================*/
const speakersList = document.querySelector(".speakers__list");

const column1 = document.createElement("div");
column1.style.display = "flex";
column1.style.flexDirection = "column";

const column2 = document.createElement("div");
column2.style.display = "flex";
column2.style.flexDirection = "column";

const column3 = document.createElement("div");
column3.style.display = "flex";
column3.style.flexDirection = "column";

speakersList.style.display = "flex";
speakersList.style.justifyContent = "center";
speakersList.style.gap = "52px";

speakersData.forEach((speaker, index) => {
  const speakerElement = createSpeakerElement(speaker, index);
  if (index % 3 === 0) {
    if (column1.children.length === 0) {
      speakerElement.classList.add("first-in-column-1");
    }
    column1.appendChild(speakerElement);
  } else if (index % 3 === 1) {
    if (column2.children.length === 0) {
      speakerElement.classList.add("first-in-column-2");
    }
    column2.appendChild(speakerElement);
  } else {
    if (column3.children.length === 0) {
      speakerElement.classList.add("first-in-column-3");
    }
    column3.appendChild(speakerElement);
  }
});

speakersList.appendChild(column1);
speakersList.appendChild(column2);
speakersList.appendChild(column3);
