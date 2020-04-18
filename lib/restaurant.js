const Customer = require("./customers.js");

class Restaurant {
    constructor(_name) {
        this.name = _name;
        this.tables = []
        this.waitList = []
        this.idCount = 0;
    }

    seatCustomer(_name, _email, _phone) {
        const newCustomer = new Customer(_name, _email, _phone, this.idCount++)
        if (this.tables.length < 5) {
            this.tables.push(newCustomer)
        }
        else {
            this.waitList.push(newCustomer)
        }

    }

    deleteCustomer(_id) {
        this.tables = this.tables.filter(customer => customer.id != _id);
        this.waitList = this.waitList.filter(customer => customer.id != _id);
        this.sortCustomers()
    }

    getCustomerById(_id) {
        let customer = this.tables.filter(customer => customer.id == _id);
        if (customer === undefined) {
            customer = this.waitList.filter(customer => customer.id == _id);
        }
        return customer;
    }

    editCustomerById(_id, _name, _email, _phone) {
        for (let i = 0; i < this.tables.length; i++) {
            if (this.tables[i].id == _id) {
                this.tables[i].email = _email;
                this.tables[i].name = _name;
                this.tables[i].phone = _phone;
                return this.tables[i];
            }
        }

        for (let j = 0; j < this.waitList.length; j++) {
            if (this.waitList[j].id == _id) {
                this.waitList[j].email = _email;
                this.waitList[j].name = _name;
                this.waitList[j].phone = _phone;
                return this.waitList[j]
            }
        }
    }

    sortCustomers() {

        while (this.tables.length < 5) {
            this.tables.push(this.waitList.shift())
        }

    };
}



module.exports = Restaurant