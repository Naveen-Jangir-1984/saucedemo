// Generated from: Features\example2.feature
import { test } from "../../Fixtures/fixtures.ts";

test.describe('Login 2 feature', () => {

  test('#21 Standard User', async ({ Given, Then, inventoryPage, loginPage }) => { 
    await Given('user login as "StandardUser"', null, { loginPage }); 
    await Then('user should see the inventory title', null, { inventoryPage }); 
  });

  test('#22 Problem User', async ({ Given, Then, inventoryPage, loginPage }) => { 
    await Given('user login as "ProblemUser"', null, { loginPage }); 
    await Then('user should see the inventory title', null, { inventoryPage }); 
  });

  test('#23 Locked User', async ({ Given, Then, inventoryPage, loginPage }) => { 
    await Given('user login as "LockedUser"', null, { loginPage }); 
    await Then('user should see the inventory title', null, { inventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('Features\\example2.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user login as \"StandardUser\"","stepMatchArguments":[{"group":{"start":14,"value":"\"StandardUser\"","children":[{"start":15,"value":"StandardUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then user should see the inventory title","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given user login as \"ProblemUser\"","stepMatchArguments":[{"group":{"start":14,"value":"\"ProblemUser\"","children":[{"start":15,"value":"ProblemUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then user should see the inventory title","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user login as \"LockedUser\"","stepMatchArguments":[{"group":{"start":14,"value":"\"LockedUser\"","children":[{"start":15,"value":"LockedUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then user should see the inventory title","stepMatchArguments":[]}]},
]; // bdd-data-end