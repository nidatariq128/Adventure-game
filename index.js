import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrase() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrase() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.green("Please Enter Your Name:")
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your  Opponent",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellow("what would you like to do?"),
                choices: ["Attac", "Drink portion", "Run for your life.."]
            }
        ]);
        if (ask.opt == "Attac") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrase();
                console.log(`${p1.name} fuel is  ${chalk.redBright(p1.fuel)}`);
                console.log(`${o1.name} fuel is  ${chalk.redBright(o1.fuel)}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrase();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    //Alian
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attac", "Drink portion", "Run for your life.."]
            }
        ]);
        if (ask.opt == "Attac") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrase();
                console.log(` ${p1.name} fuel is ${p1.fuel}`);
                console.log(` ${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrase();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    //Zombi
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attac", "Drink portion", "Run for your life.."]
            }
        ]);
        if (ask.opt == "Attac") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrase();
                console.log(` ${p1.name} fuel is ${p1.fuel}`);
                console.log(` ${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrase();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
} while (true);
