const {model} = require("mongoose")
const {Schema} = require("mongoose")

const Worker = new Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        contacts: {
            type: String,
            required: true
        },
        salary: {
            type: String,
            required: true
        },
        position: {
            type: String,
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

module.exports = model("Worker", Worker);
