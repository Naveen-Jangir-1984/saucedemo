// Generated from: Features\example1.feature
import { test } from "../../Fixtures/fixtures.ts";

test.describe('Login 1 feature', () => {

  test.describe('User', () => {

    test('Example #1', async ({ Given, Then, inventoryPage, loginPage }) => { 
      await Given('user login as "StandardUser"', null, { loginPage }); 
      await Then('user should see the inventory title', null, { inventoryPage }); 
    });

    test('Example #2', async ({ Given, Then, inventoryPage, loginPage }) => { 
      await Given('user login as "ProblemUser"', null, { loginPage }); 
      await Then('user should see the inventory title', null, { inventoryPage }); 
    });

    test('Example #3', async ({ Given, Then, inventoryPage, loginPage }) => { 
      await Given('user login as "LockedUser"', null, { loginPage }); 
      await Then('user should see the inventory title', null, { inventoryPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('Features\\example1.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user login as \"StandardUser\"","stepMatchArguments":[{"group":{"start":14,"value":"\"StandardUser\"","children":[{"start":15,"value":"StandardUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then user should see the inventory title","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user login as \"ProblemUser\"","stepMatchArguments":[{"group":{"start":14,"value":"\"ProblemUser\"","children":[{"start":15,"value":"ProblemUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then user should see the inventory title","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user login as \"LockedUser\"","stepMatchArguments":[{"group":{"start":14,"value":"\"LockedUser\"","children":[{"start":15,"value":"LockedUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then user should see the inventory title","stepMatchArguments":[]}]},
]; // bdd-data-end