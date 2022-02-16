const Manager = require('../lib/manager');

describe("manager", () => {
    describe("getName", () => {
      it("should get name of manager", () => {
        const manager = new Manager ('bob', '88', 'bob@gmail.com', 'manager', '50');
        const name = manager.getName()
  
        expect(name).toEqual("bob");
      });
    });
    describe("getID", () => {
        it("should get ID of manager", () => {
          const manager = new Manager ('bob', '88', 'bob@gmail.com');
          const id = manager.getId();
    
          expect(id).toEqual("88");
        });
    });
    describe("getEmail", () => {
        it("should get email of manager", () => {
          const manager = new Manager ('bob', '88', 'bob@gmail.com');
          const email = manager.getEmail();
    
          expect(email).toEqual("bob@gmail.com");
        });
      });
    describe("getRole", () => {
        it("should get role of the manager", () => {
          const manager = new Manager ('bob', '88', 'bob@gmail.com');
          const role = manager.getRole();
    
          expect(role).toEqual("manager");
        });
    });
    describe("getOfficeNumber", () => {
        it("should get the office number of the manager", () => {
          const manager = new Manager ('bob', '88', 'bob@gmail.com');
          const officeNumber = manager.getOfficeNumber();
    
          expect(officeNumber).toEqual("");
        });
    });
});
