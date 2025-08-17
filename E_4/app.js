h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }

  let a = 5;
  console.log(a);
  console.log("new number = ", a);
}

// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("green color was completed");
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     console.log("blue color was completed");
//     return changeColor("blue", 1000);
//   });

// async function greet() {
//   // throw "some random error";
//   return "hello";
// }

// greet()
//   .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
//   })
//   .catch((err) => {
//     console.log("promise was rejected", err);
//   });

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   getNum();
// }

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "moin chhipa",
//   () => {
//     console.log("success : Data saved successfully.");
//     savetoDb(
//       "moin chhipa",
//       () => {
//         console.log("success2 : Data2 saved successfully.");
//         savetoDb(
//           "akbar",
//           () => {
//             console.log("success3 : Data3 saved successfully.");
//           },
//           () => {
//             console.log("failure3 : Weak internet, failed to save data.");
//           }
//         );
//       },
//       () => {
//         console.log("failure2 : Weak internet, failed to save data.");
//       }
//     );
//   },
//   () => {
//     console.log("failure : Weak internet, failed to save data.");
//   }
// );

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success : data was saved");
//     } else {
//       reject("failure : weak connection");
//     }
//   });
// }

// savetoDb("apna college")
//   .then((result) => {
//     console.log("data was saved");
//     console.log(result);
//   })
//   .then((result) => {
//     console.log("data2 was saved");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("data not saved");
//     console.log(error);
//   });
