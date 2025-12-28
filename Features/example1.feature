Feature: Login 1 feature

  Scenario Outline: User
    Given user login as "<user>"
    Then user should see the inventory title

  Examples:
      | user         |
      | StandardUser |
      | ProblemUser  |
      | LockedUser   |