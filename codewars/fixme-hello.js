// The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. Furthermore, it is supposed to say them in the same order they were set.

// But it's not working properly.

// Notes
// There are 3 attributes

// name
// age
// sex ('M' or 'F')
// When the same attribute is assigned multiple times the hello method shows it only once. If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.

// Examples
// Hello.
// Hello. My name is Bob. I am 27. I am male.
// Hello. I am 27. I am male. My name is Bob.
// Hello. My name is Alice. I am female.
// Hello. My name is Batman.
// Task
// Fix the code so we can all go home early.

class Dinglemouse {
    constructor() {
        this.name = this.age = this.sex = 0
        this.orderOfProps = []
    }

    addToOrderOfProps(prop) {
        if (!this.orderOfProps.includes(prop)) this.orderOfProps.push(prop)
    }

    setAge(age) {
        this.age = age
        this.addToOrderOfProps('age')
        return this
    }

    setSex(sex) {
        this.sex = sex
        this.addToOrderOfProps('sex')
        return this
    }

    setName(name) {
        this.name = name
        this.addToOrderOfProps('name')
        return this
    }

    hello() {
        const stringKey = {
            name: () => `My name is ${this.name}.`,
            age: () => `I am ${this.age}.`,
            sex: () => `I am ${this.sex == 'M' ? "male" : "female"}.`,
        }

        let message = this.orderOfProps.map(prop => stringKey[prop]())

        return ['Hello.', ...message].join(' ')
    }
}
