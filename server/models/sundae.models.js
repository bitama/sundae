const mongoose = require('mongoose');

const SundaeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    ice_cream: {
        type: String,
        required: [true, "ice_cream is required"],
    },
    sauce: {
        type: String,
        required: [true, "sauce  is required"],
        validate: {
            validator: function (sauceName) {
                let copy = sauceName.toLowerCase();
                if (copy == "cheese") return false;
                else return true;
            },
            message:input=>`${input.value} does not belongs on sundae!!`
        }
        
    },
    topping: {
        type: String,
        required: [true, "topping is required"],
        validate: {
            validator: function (toppingName) {
                let copy = toppingName.toLowerCase();
                if (copy == "cheese") return false;
                else return true;
            },
            message:input=>`${input.value} does not belongs on sundae!!`
        }
    
    },
    color: {
        type: String,
        required:[true,"color is required"]
    },
    whipped: {
        type:Boolean,
        required:[true,"whipped is required"],
    }
    
});

const Sundae= mongoose.model('Sundae', SundaeSchema);

module.exports = Sundae;
