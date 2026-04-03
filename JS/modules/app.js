{
  /* In app.js, import all three and use them:

Call greet("Arjun")
Log DEFAULT_LANG
Call formalGreet("Arjun")
*/
}

import { greet, DEFAULT_LANG } from "./greetings.js";
import formalGreet from "./greetings.js";

console.log(greet("Arjun"));
console.log("Default Language: ", DEFAULT_LANG);
console.log(formalGreet("Arjun"));
