STORE firstNameOptions variable as array of random adjectives
STORE lastNameOptions variable as array of random nouns
STORE middleNameOptions variable as array of random colors

STORE middleName as FALSE by default

  STORE firstName as firstNameOptions[math.Random syntax]
  STORE lastName as lastNameOptions[math.Random syntax]
  STORE middleName as middleNameOptions[math.Random synax]

    A random name is accessed via indexing. Essentially, every array property is assigned a value, and that value is
    accessed in order to generate a name. Simplified, this looks like:
      firstName = [pretty, chocolate, fruit]
      lastName = [pebbles, jones, wadley]
      BECOMES
      dragName = firstName[i(random)] + lastName[i(random)]
      dragName = [0] + [2]
      WHICH THEN BECOMES
      pretty + wadley
      AND OUTPUTS
      pretty wadley

INPUT dragName
STORE dragName
OUTPUT
  IF middleName = true
  OUTPUT dragName = firstName + middleName + lastName
  ELSE dragName = firstName + lastName

STORE middleName option to BUTTON ID that turns middleName to TRUE on click
STORE dragName function to BUTTON ID
  use EVENT LISTENER to run function ON CLICK

  var firstNames = ["Jackie", "Harmony", "Paris", "Londyn", "Nina"];
  var randomFirstName = firstNames[Math.floor(Math.random(firstNames) * firstNames.length)];
console.log(randomFirstName);
