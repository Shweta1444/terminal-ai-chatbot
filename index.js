import readlineSync from "readline-sync";
import chalk from "chalk";

import {
  generateResponse
} from "./utils/fallback.js";

let currentModel = "groq";

console.log(
  chalk.green(
    "Terminal AI Chat Started"
  )
);

console.log(
  chalk.yellow(
    "Commands:"
  )
);

console.log("/groq");
console.log("/gemini");
console.log("/help");
console.log("/clear");
console.log("/exit");

while (true) {

  const input =
    readlineSync.question(
      "\nYou: "
    );

  if (!input.trim()) {

    console.log(
      chalk.red(
        "Input cannot be empty."
      )
    );

    continue;
  }

  if (input === "/exit") {
    break;
  }

  if (input === "/groq") {

    currentModel = "groq";

    console.log(
      chalk.blue(
        "Using Groq"
      )
    );

    continue;
  }

  if (input === "/gemini") {

    currentModel = "gemini";

    console.log(
      chalk.blue(
        "Using Gemini"
      )
    );

    continue;
  }

  if (input === "/help") {

    console.log(
      `
/groq
/gemini
/clear
/help
/exit
`
    );

    continue;
  }

  if (input === "/clear") {

    console.clear();

    continue;
  }

  try {

    const response =
      await generateResponse(
        input,
        currentModel
      );

    console.log(
      chalk.green(
        "\nAI:"
      ),
      response
    );

  } catch (error) {

    console.log(
      chalk.red(
        error.message
      )
    );
  }
}