Feature: Login 2 feature

  Scenario: #21 Standard User
    Given user login as "StandardUser"
    Then user should see the inventory title

  Scenario: #22 Problem User
    Given user login as "ProblemUser"
    Then user should see the inventory title

  Scenario: #23 Locked User
    Given user login as "LockedUser"
    Then user should see the inventory title
