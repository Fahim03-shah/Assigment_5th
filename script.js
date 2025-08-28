// --- DOM Elements ---
const heartCountEl = document.getElementById('heartCount');
const coinCountEl = document.getElementById('coinCount');
const copyCountEl = document.getElementById('copyCount');
const historyListEl = document.getElementById('historyList');
const cardSectionEl = document.getElementById('cardSection');
const clearHistoryBtn = document.getElementById('clearHistory');

// --- State Variables ---
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// ---  Update Functions ---
function updateCounters() {
  heartCountEl.textContent = heartCount;
  coinCountEl.textContent = coinCount;
  copyCountEl.textContent = copyCount;
}

function addToCallHistory(name, number) {
  const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const newHistoryItemHTML = `
    <li class="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-100">
      <div>
        <p class="font-semibold text-gray-800">${name}</p>
        <p class="text-xs text-gray-500">${number}</p>
      </div>
      <span class="text-xs text-gray-500">${currentTime}</span>
    </li>
  `;
  // Rebuild the history list to put the new item at the top
  historyListEl.innerHTML = newHistoryItemHTML + historyListEl.innerHTML;
}

// --- Event Handlers ---
function handleCallButtonClick(event) {
  const callButton = event.target.closest('.call-btn');
  if (!callButton) return;

  const serviceName = callButton.dataset.name;
  const serviceNumber = callButton.dataset.number;
  
  if (coinCount >= 20) {
    coinCount -= 20;
    updateCounters();
    alert(`Calling ${serviceName} at ${serviceNumber}`);
    addToCallHistory(serviceName, serviceNumber);
  } else {
    alert("You don't have enough coins (20 required) to make this call.");
  }
}

function handleCopyButtonClick(event) {
  const copyButton = event.target.closest('.copy-btn');
  if (!copyButton) return;

  const numberToCopy = copyButton.dataset.number;
  navigator.clipboard.writeText(numberToCopy).then(() => {
    copyCount++;
    updateCounters();
    alert(`Number "${numberToCopy}" has been copied to your clipboard!`);
  });
}

function handleHeartButtonClick(event) {
  heartCount++;
  updateCounters();
}

function handleClearHistoryClick() {
  if (confirm('Are you sure you want to clear the call history?')) {
    historyListEl.innerHTML = '';
    alert('Call history cleared.');
  }
}

// --- Event Listeners with Delegation ---
cardSectionEl.addEventListener('click', (event) => {
  if (event.target.closest('.add-heart-btn')) {
    handleHeartButtonClick(event);
  } else if (event.target.closest('.call-btn')) {
    handleCallButtonClick(event);
  } else if (event.target.closest('.copy-btn')) {
    handleCopyButtonClick(event);
  }
});

clearHistoryBtn.addEventListener('click', handleClearHistoryClick);

// --- Initial Render ---
updateCounters();