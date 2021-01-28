// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transaction-area").style.display = "block";
});

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  // getInputNumber used
  const depositNumber = getInputNumber("deposit-amount");

  // updateSpanText used
  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);
});

// functions
function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
// functions end

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  // getInputNumber used
  const withdrawNumber = getInputNumber("withdraw-amount");

  // updateSpanText used
  updateSpanText("currentWithdraw", withdrawNumber);

  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = currentBalanceNumber - withdrawNumber;
  document.getElementById("currentBalance").innerText = totalBalance;

  // console.log(currentWithdraw);
});
