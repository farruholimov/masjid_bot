const {
    Bot,
    session
} = require("grammy");
const configs = require("./src/config");


const bot = new Bot(configs.TG_TOKEN)

bot.use(session({
    initial: () => ({
        step: "idle",
        user: {
            id: null,
            tgid: null,
            name: null,
            lang: "uz",
            phone: null,
        },
        messages_to_delete: []
    })
}))