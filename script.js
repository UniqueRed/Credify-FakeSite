let userNumberInput = document.getElementById('userNumber');
let guessButton = document.getElementById('guessButton');
let loadingContainer = document.getElementById('loading-container');

const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

guessButton.addEventListener('click', async function() {
  const userInput = userNumberInput.value;

  const userNumber = parseFloat(userInput);

  userNumberInput.disabled = true;
  guessButton.disabled = true;
  loadingContainer.style.display = 'flex';

  const loadingModals = [
    "Validating input parameters",
    "Initializing user data",
    "Gathering nodes",
    "Calculating socket runtime",
    "Generating binary hashmap",
    "Encrypting data",
    "Computing server side authorization",
    "Installing dependencies",
    "Analyzing libraries",
    "Rebooting system operations",
    "Upgrading program files",
    "Verifying network",
    "Checking DNS permissions",
    "Handling events",
    "Finalizing output"
  ];

  for (const modal of loadingModals) {
    await showLoadingModal(modal);
  }

  loadingContainer.style.display = 'none';

  const guessText = document.getElementById("guessText");
  guessText.innerHTML = "Haha there is no extra credit!";

  userNumberInput.disabled = false;
  guessButton.disabled = false;
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

  const maxDelay = 5000;
  const minDelay = 2000;
  const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  loadingBar.style.animationDuration = `${delay}ms`;

  await new Promise(resolve => setTimeout(resolve, delay));

  await wait(1000 * Math.floor(Math.random() * (1 - 0.5 + 1)) + 0.5);

  loadingModal.remove();
}
