const {model} = require("mongoose")
const {Schema} = require("mongoose")

const User = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        rememberMe: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: {
            createdAt: "created",
            updatedAt: "updated",
        },
    }
)

module.exports = model("User", User);
