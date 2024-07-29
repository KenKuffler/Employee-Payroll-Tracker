// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  //created array
  let employeesArray = [];

  //created object and linked it to array for the inputs to be pushed
  let newEmployee = true;

while (newEmployee) {
  let employee = {
    firstName: window.prompt("Add employees first name"),
    lastName: window.prompt("Add employees last name"),
    salary: parseInt(window.prompt("Add employees salary")),
  }

  employeesArray.push(employee);

  let input = window.confirm("Do you want to add a new employee?")
  if (input == true) newEmployee = true;
  else newEmployee = false;
  }
  return employeesArray;
}
// Display the average salary
const displayAverageSalary = function(employees) {
  // TODO: Calculate and display the average salary
  /*created variable for salaryTotal, created "for" function that adds the employeesArray salaries together
  created average variable that divides salaryTotal by the employeeArrays length
  created console log that displays the average salary in the console log displaying dollar and cent values for closest accuracy.*/

    let totalSalary = 0;
    let numberOfEmployees = employees.length;

    employees.forEach(employee => {
        totalSalary += employee.salary;
    });

    let averageSalary = totalSalary / numberOfEmployees;

    let averageSalaryWithTwoDecimals = averageSalary.toFixed(2);

    console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalaryWithTwoDecimals}`);
  }

// Select a random employee
const getRandomEmployee = function(employees) {
  // TODO: Select and display a random employee

  //created index for pulling random employee using same method/function as rock, paper, scissors
  //created randomEmployee variable to link Employees array to index variable using same method as R,P,S
  // added console log for displaying the random drawing winners first and last name

    const randomIndex = Math.floor(Math.random() * employees.length);

    const randomEmployee = employees[randomIndex];
    const employeeFirstName = randomEmployee.firstName;
    const employeeLastName = randomEmployee.lastName;

    // Log a message congratulating the random drawing winner
    console.log(`Congratulations to ${employeeFirstName} ${employeeLastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
   employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
