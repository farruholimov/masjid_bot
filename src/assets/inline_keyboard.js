const {
    InlineKeyboard
} = require("grammy");

const { API_URL: baseUrl } = require("../config")

const InlineKeyboards = {
    select_categories: function (categories, action) {
        let menu = [
            [{
                text: "Davom etish",
                callback_data: `end_category`
            }]
        ]
        if (action == "remove_category") {
            menu = [
                [{
                    text: "Orqaga",
                    callback_data: `back?step=settings`
                }]
            ]
        }
        // if (!categories.length) return menu
        for (const category of categories) {
            menu.unshift([{
                text: category.name,
                callback_data: `${action}?category_id=${category.id}`
            }])
        }
        return menu
    },

    menu: new InlineKeyboard()
        .webApp("📃 Mening hayriyalarim", `https://mosque-bot.vercel.app`)
        .row()
        .webApp("🕌 Masjidlar", `https://mosque-bot.vercel.app/mosques`)
        .webApp("🧾 Extiyojlar", `https://mosque-bot.vercel.app`)
        .row()
        .text("⚙️ Sozlamalar", "settings")
        .text("💬 Fikr bildirish", "feedback"),

    menu_switch: (offset, step) => new InlineKeyboard()
        .text("◀️", `prev?offset=${Number(offset) - 1}`)
        .text("▶️", `next?offset=${Number(offset) + 1}`)
        .row()
        .text("Orqaga ↩️", `back?step=${step}`),

    user_info_menu: (step) =>
        new InlineKeyboard()
        .text("👤 Ismni o'zgartirish ✏️", `change_user_info?step=name`)
        .text("☎️ Raqamni o'zgartirish ✏️", `change_user_info?step=phone`)
        .row()
        .text("Orqaga ↩️", `back?step=${step}`),

    back: (value) => new InlineKeyboard().text("Orqaga ↩️", `back?step=${value}`),
}

module.exports = InlineKeyboards;