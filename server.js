const schedule = require("node-schedule");
const { items } = require("./items");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function scheduleItem(elem) {
  let date = elem.dateTime.replace(" ", "T");

  const job = schedule.scheduleJob(date, async function () {
    await delay(elem.text.length * 1000).then(() => {
      console.log(reverseString(elem.text));
    });
  });
  if (job == null) {
    console.log(`Please Enter valid Time for job {${elem.text}}`);
  }
}
items.forEach(async (elem) => {
  await scheduleItem(elem);
});
