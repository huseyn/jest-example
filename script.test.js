const googleSearch = require("./script");

const dbMock = ["dog.com", "cheese.com", "disney.com", "againdogs.com"];

describe("googleSearch", () => {
  it("is a silly test", () => {
    expect("hello").toBe("hello");
  });

  it("is searching google", () => {
    expect(googleSearch("testest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "againdogs.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
