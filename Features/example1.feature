Feature: Login 1 feature

  Scenario: #11 Standard User
    Given user login as "StandardUser"
    Then user should see the inventory title

  Scenario: #12 Problem User
    Given user login as "ProblemUser"
    Then user should see the inventory title

  Scenario: #13 Locked User
    Given user login as "LockedUser"
    Then user should see the inventory title
