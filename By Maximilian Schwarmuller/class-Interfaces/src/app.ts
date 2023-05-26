class Department {
  //   private id: string;
  //   public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "John") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }
}

// const accounting = new Department("d1", "Accounting");
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("John");
it.addEmployee("Cena");

// accounting.employees[2] = "Anna"

it.describe();
it.printEmployeeInformation();

const accounting = new AccountingDepartment("A1", []);
accounting.mostRecentReport = "From getter";

console.log(accounting.mostRecentReport);
accounting.addReport("Something went wrong");

accounting.addEmployee("John");
accounting.addEmployee("Sam");
accounting.printEmployeeInformation();
accounting.addReport("Some Error Occurs");
accounting.printReport();
