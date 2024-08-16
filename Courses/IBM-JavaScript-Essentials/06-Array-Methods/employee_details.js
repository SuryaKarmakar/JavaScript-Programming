const employees = [
  { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
  { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000 },
  { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000 },
];

// display employees details
function displayEmployees() {
  const totalEmployees = employees
    .map(
      (employee) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");

  document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

// calculate employees total salaries
function calculateTotalSalaries() {
  /*
    The reduce method iterates through each employee and accumulates their salaries to calculate the total. The initial value of the accumulator (acc) is 0.
    The reduce method continuously accumulates these salaries by adding each employee's salary to the previous total.
  */
  const totalSalaries = employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  alert(`Total Salaries: $${totalSalaries}`);
}

// display employees details based on department
function displayHREmployees() {
  const hrEmployees = employees.filter(
    (employee) => employee.department === "HR"
  );

  const hrEmployeesDisplay = hrEmployees
    .map(
      (employee) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");

  document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}

//  display employees details based on ID
function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId
  );

  if (foundEmployee) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "no employee has been found with this ID";
  }
}
