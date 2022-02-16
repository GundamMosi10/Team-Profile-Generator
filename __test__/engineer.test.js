const Engineer = require('../lib/engineer');

describe("engineer", () => {
    describe("getName", () => {
      it("should get the name of the engineer", () => {
        const engineer = new Engineer ('bob', '88', 'bob@gmail.com', 'engineer', 'GundamMosi10');
        const name = engineer.getName()
  
        expect(name).toEqual("bob");
      });
    });
    describe("getID", () => {
        it("should get the ID of the engineer", () => {
          const engineer = new Engineer ('bob', '88', 'bob@gmail.com', 'engineer', 'GundamMosi10');
          const id = engineer.getId();
    
          expect(id).toEqual("88");
        });
    });
    describe("getEmail", () => {
        it("should get the email of the engineer", () => {
          const engineer = new Engineer ('bob', '88', 'bob@gmail.com', 'engineer', 'GundamMosi10');
          const email = engineer.getEmail();
    
          expect(email).toEqual("bob@gmail.com");
        });
      });
    describe("getRole", () => {
        it("should get the role of the engineer", () => {
          const engineer = new Engineer ('bob', '88', 'bob@gmail.com', 'engineer', 'GundamMosi10');
          const role = engineer.getRole();
    
          expect(role).toEqual("engineer");
        });
    });
    describe("getGithub", () => {
        it("should get the Github user name of the manager", () => {
          const engineer = new Engineer ('bob', '88', 'bob@gmail.com', 'engineer', 'GundamMosi10');
          const Github = engineer.getGithub();
    
          expect(Github).toEqual("GundamMosi10");
        });
    });
});
