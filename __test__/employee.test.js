const Employee = require('../lib/employee');

describe("employee", () => {
    describe("getName", () => {
      it("should get name of employee", () => {
        const employee = new Employee ('bob', '88', 'bob@gmail.com', 'employee');
        const name = employee.getName()
  
        expect(name).toEqual("bob");
      });
    });
    describe("getID", () => {
        it("should get ID of employee", () => {
          const employee = new Employee ('bob', '88', 'bob@gmail.com');
          const id = employee.getId();
    
          expect(id).toEqual("88");
        });
    });
    describe("getEmail", () => {
        it("should get email of employee", () => {
          const employee = new Employee ('bob', '88', 'bob@gmail.com');
          const email = employee.getEmail();
    
          expect(email).toEqual("bob@gmail.com");
        });
      });
    describe("getRole", () => {
        it("should get role of employee", () => {
          const employee = new Employee ('bob', '88', 'bob@gmail.com');
          const role = employee.getRole();
    
          expect(role).toEqual("employee");
        });
    });
});

