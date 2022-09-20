import summary from "../data/summary-data.js";

const summaryTable = ({ icon, category, activeAmount, archivedAmount }) => {
  const item = ` <li class="table-two-list-item">
              <div class="note-category-name">
                <div class="icon-wrapper">
                  <img
                    class="notes-icon"
                    src=${icon}
                    alt="shopping-icon"
                  />
                </div>
                <div>${category}</div>
              </div>

              <div class="active-amount" id="${category}-active">${activeAmount}</div>

              <div class="archived-amount" id="id-${category}"> ${archivedAmount}</div>
            </li>`;

  return item;
};

const summaryListEl = document.querySelector(".table-two-list");
const makeSummaryList = summary.map(summaryTable).join("");
summaryListEl.insertAdjacentHTML("beforeend", makeSummaryList);
