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
        .webApp("đ Mening hayriyalarim", `https://mosque-bot.vercel.app`)
        .row()
        .webApp("đ Masjidlar", `https://mosque-bot.vercel.app/mosques`)
        .webApp("đ§ž Extiyojlar", `https://mosque-bot.vercel.app`)
        .row()
        .text("âī¸ Sozlamalar", "settings")
        .text("đŦ Fikr bildirish", "feedback"),

    menu_switch: (offset, step) => new InlineKeyboard()
        .text("âī¸", `prev?offset=${Number(offset) - 1}`)
        .text("âļī¸", `next?offset=${Number(offset) + 1}`)
        .row()
        .text("Orqaga âŠī¸", `back?step=${step}`),

    user_info_menu: (step) =>
        new InlineKeyboard()
        .text("âī¸ Ismni o'zgartirish", `change_user_info?step=name`)
        .row()
        .text("âī¸ Raqamni o'zgartirish", `change_user_info?step=phone`)
        .row()
        .text("Orqaga âŠī¸", `back?step=${step}`),

    back: (value) => new InlineKeyboard().text("Orqaga âŠī¸", `back?step=${value}`),
}

module.exports = InlineKeyboards;