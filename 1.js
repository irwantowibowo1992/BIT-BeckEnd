const items = ["pro", "gram", "merit", "program", "it", "programmer"];

const recursive = (input, result) => {
  if (!input.length) {
    console.log(result.substring(1));
  } else {
    for (let i = 1; i <= input.length; i++) {
      let item = input.substring(0, i);
      if (items.includes(item)) {
        recursive(input.substring(i), result + ', ' + item);
      }
    }
  }
}

recursive('programmerit', '');