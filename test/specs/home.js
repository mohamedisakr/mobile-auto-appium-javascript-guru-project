const home = require("../../page-objects/home.page");
//
describe("Task 1 : home page", () => {
  //
  // it("should load properly", () => {
  //   // check that page locator exist
  //   expect(home.$title).toBeExisting();
  //   expect(home.$courseCategory).toBeExisting();
  //   expect(home.$courseList).toBeExisting();
  // });

  it("1.1 App name Guru99 is exist on screen", () => {
    expect(home.isTitleDisplayed).toBe(true);
  });

  it("1.2 Course Category is displayed, clickable & selected (highlighted)", () => {
    //
  });

  it("1.3 Content of Course Category is displayed in list", () => {
    //
  });

  it("1.4 Course List is displayed, clickable & not selected", () => {
    //
  });
});
