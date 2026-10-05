const expenseForm = document.getElementById("expenseForm");

const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const addExpenseBtn = document.getElementById("addExpenseBtn");
const calculateTotalBtn = document.getElementById("calculateTotalBtn");

const displayExpense = document.getElementById("displayExpense");
const displayTotal = document.getElementById("displayTotal");

// storage
let expenseStorage = [];

addExpenseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const name = expenseName.value;
  const amount = expenseAmount.value;
  const category = expenseCategory.value;

  // Validation
  if (name === "" || amount === "" || category === "") {
    alert("Please enter a proper value in all fields.");
    return;
  }

  // Create expense object
  let expense = {
    name: name,
    amount: Number(amount),
    category: category,
  };

  // Store object in main array
  expenseStorage.push(expense);

  console.log(expenseStorage);

  // Clear input fields
  expenseName.value = "";
  expenseAmount.value = "";
  expenseCategory.value = "";

  displayEexpense();
});


function displayEexpense() {

    expenseStorage.forEach(function (expense) {

        // Create elements
        const expenseContainer = document.createElement("div");
        const expenseName = document.createElement("h2");
        const expenseAmount = document.createElement("h3");
        const expenseCategory = document.createElement("p");
        const deleteBtn = document.createElement("button");

        // Add content
        expenseName.textContent = expense.name;
        expenseAmount.textContent = expense.amount;
        expenseCategory.textContent = expense.category;
        deleteBtn.textContent = "Delete";

        // Append elements to container
        expenseContainer.append(
            expenseName,
            expenseAmount,
            expenseCategory,
            deleteBtn
        );

        // Append container to displayExpense
        displayExpense.append(expenseContainer);

         
    });
}