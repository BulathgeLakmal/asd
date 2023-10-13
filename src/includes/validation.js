import {Form as veeForm , Field as veeField , ErrorMessage, defineRule , configure} from "vee-validate";

import { required , email } from "@vee-validate/rules";


export default {
    install(app){
        app.component("veeForm", veeForm);
        app.component("veeField", veeField);
        app.component("ErrorMessage", ErrorMessage);

        defineRule("required", required);
        defineRule("email", email);
        defineRule("tos", required);


        configure({
            generateMessage: (ctx) => {
              const messages = {
                required: `The field ${ctx.field} is required.`,
                tos: "You must accept the Terms of Service.",
              };
      
              const message = messages[ctx.rule.name]
                ? messages[ctx.rule.name]
                : `The field ${ctx.field} is invalid.`;
      
              return message;
            },
        })
    }
}



