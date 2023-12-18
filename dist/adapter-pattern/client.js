"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("./adapters");
const totatlCubes = 5;
let counter = 0;
const manufacturerCubes = () => {
    const width = Math.floor(Math.random() * 10) + 1;
    const height = Math.floor(Math.random() * 10) + 1;
    const depth = Math.floor(Math.random() * 10) + 1;
    let cube = new adapters_1.CubeA();
    let success = cube.manufacturer(width, height, depth);
    if (success) {
        counter++;
    }
    else {
        console.log(`Comapany A is busy with other task so giving task to company B`);
        cube = new adapters_1.CubeBAdaptor();
        success = cube.manufacturer(width, height, depth);
        if (success) {
            counter++;
        }
        else {
            console.log(`Comapany B is busy with other task so trying Company A`);
        }
    }
};
const interval = setInterval(() => {
    manufacturerCubes();
    if (counter > totatlCubes) {
        clearInterval(interval);
        console.log(`sucessfully completed cube manufacturing...`);
    }
}, 1000);
