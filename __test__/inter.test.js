const Intern = require('../lib/intern');

describe("intern", () => {
    describe("getName", () => {
      it("should get the name of the intern", () => {
        const intern = new Intern ('bob', '88', 'bob@gmail.com', 'Berkley');
        const name = intern.getName()
  
        expect(name).toEqual("bob");
      });
    });
    describe("getID", () => {
        it("should get the ID of the intern", () => {
          const intern = new Intern ('bob', '88', 'bob@gmail.com', 'Berkley');
          const id = intern.getId();
    
          expect(id).toEqual("88");
        });
    });
    describe("getEmail", () => {
        it("should get the email of the intern", () => {
          const intern = new Intern ('bob', '88', 'bob@gmail.com', 'Berkley');
          const email = intern.getEmail();
    
          expect(email).toEqual("bob@gmail.com");
        });
      });
    describe("getRole", () => {
        it("should get the role of the engineer", () => {
          const intern = new Intern ('bob', '88', 'bob@gmail.com', 'Berkley');
          const role = intern.getRole();
    
          expect(role).toEqual("intern");
        });
    });
    describe("getSchool", () => {
        it("should get the name of the school the intern goes to", () => {
          const intern = new Intern ('bob', '88', 'bob@gmail.com', 'Berkley');
          const school = intern.getSchool();
    
          expect(school).toEqual("Berkley");
        });
    });
});
