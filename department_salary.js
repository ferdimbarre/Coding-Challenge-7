// Create a Department Structure
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};
// this is a "company"bject which stores the information for different employees, organized by departments

// Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary (departments,nameOfDepartment) {
let thisDepartment = departments.find(department => department.departmentName === nameOfDepartment); // find the department by the input
function calculateEmployeeSalary(employee) {
    let total = employee.salary;
    employee.subordinates.forEach(subordinate => { //iterate to check if there are subordinates, use recursive call to calculate salaries 
        total += calculateEmployeeSalary(subordinate); }) ; 
        return total }
let sumOfDepartment = thisDepartment.employees.reduce ((total, employee) => { return total += calculateEmployeeSalary(employee);},0) //reduce iterating over array 
return sumOfDepartment} ; 

console.log(calculateDepartmentSalary(company.departments, "Engineering"))// expected output: 330000

// Create a Function to Calculate the Total Salary for All Departments
function calculateCompanySalary (company) {
let companyTotalSalaries = company.departments.reduce((total, department) => { return total + calculateDepartmentSalary(company.departments, department.departmentName); }, 0)//reduce to iterate over the array and use function to provide total
return companyTotalSalaries }; 
//calling it:
console.log(calculateCompanySalary(company)); //expected output 580000



