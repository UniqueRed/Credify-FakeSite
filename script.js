let userName = document.getElementById('name');
let emailName = document.getElementById('email');
let submitButton = document.getElementById('submitButton');
let loadingContainer = document.getElementById('loading-container');
let virusText = document.getElementById('virusText');

const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

submitButton.addEventListener('click', async function() {
  const userInput = userName.value;
  const emailInput = emailName.value;

  if (!isValidInput(userInput) || !isValidInput(emailInput)) {
    alert("Invalid input!");
    return;
  }

  userName.disabled = true;
  submitButton.disabled = true;
  loadingContainer.style.display = 'flex';

  const loadingModals = [
    "Scanning device",
    "Downloading malware",
    "Installing virus"
  ];

  for (const modal of loadingModals) {
    await showLoadingModal(modal);
  }

  loadingContainer.style.display = 'none';

  virusText.innerHTML = "Installation complete."

  userName.disabled = false;
  submitButton.disabled = false;
});

async function showLoadingModal(modalText) {
  const loadingModal = document.createElement('div');
  loadingModal.classList.add('loading-modal');

  const modalHeader = document.createElement('h3');
  modalHeader.textContent = modalText + "...";
  loadingModal.appendChild(modalHeader);

  const loadingBar = document.createElement('div');
  loadingBar.classList.add('loading-bar');
  loadingModal.appendChild(loadingBar);

  loadingContainer.appendChild(loadingModal);

  const maxDelay = 1500;
  const minDelay = 1000;
  const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  loadingBar.style.animationDuration = `${delay}ms`;

  await new Promise(resolve => setTimeout(resolve, delay));

  loadingModal.remove();
}

function isValidInput(input) {
  const regex = /^-?\d+(\.\d+)?$/;
  return regex.test(input);
}
