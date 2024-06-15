// Question # 1
// WRITE a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
async function fetchGreeting() {
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello! How are you");
        }, 2000);
    });
    return result;
}
//  fetchGreeting().then( resolve=> console.log(resolve))
// Question # 2
// WRITE a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
async function simulateTask() {
    console.log("Task Started");
    try {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(console.log("Task in Progress"));
            }, 1000);
        });
    }
    catch (error) {
        console.log(error);
    }
    console.log("Task Completed");
}
// simulateTask()
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
// fetchData().then(resolve => console.log())
// Question # 4
// WRITE a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
async function fetchWithError() {
    let prom = await new Promise((resolve, reject) => {
        let condition = 0;
        setTimeout(() => {
            if (condition === 1) {
                resolve(" Data fetched Successfully!");
            }
            else if (condition === 0) {
                reject(" Data fetch failed!");
            }
            else {
                console.log("can't send request BECAUSE YOU ARE 'PANOTI'");
            }
        }, 1000);
    });
    return prom;
}
async function main(func) {
    try {
        let p = await func();
        console.log(p);
    }
    catch (error) {
        console.log(error);
    }
}
// main(fetchWithError)
// Question # 5
// WRITE a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
async function processData() {
    return new Promise((resolve) => {
        console.log("fetching data....");
        setTimeout(() => {
            resolve("Still in Process....");
        }, 1000);
    });
}
async function executeSequentially(fnOne, fnTwo) {
    try {
        fnOne().then((resolve) => {
            console.log(resolve);
        });
        fnTwo().then((resolve) => {
            console.log(resolve);
        });
    }
    catch (error) {
        console.log(error);
    }
}
executeSequentially(processData, fetchData);
export {};
