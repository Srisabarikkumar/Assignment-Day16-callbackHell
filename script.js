const countHeading = document.getElementById("countDown");
const btn = document.getElementById("countButton");

function countDown(countDec, callback) {
  setTimeout(() => {
    let count = countDec - 1;
    if (count >= 1) {
      callback(count);
    } else {
      callback("Happy Independence Day!");
    }
  }, 1000);
}

btn.onclick = function () {
  let count = 10;
  countHeading.innerHTML = count;
  countDown(count, function (count) {
    countHeading.innerHTML = count;
    countDown(count, function (count) {
      countHeading.innerHTML = count;
      countDown(count, function (count) {
        countHeading.innerHTML = count;
        countDown(count, function (count) {
          countHeading.innerHTML = count;
          countDown(count, function (count) {
            countHeading.innerHTML = count;
            countDown(count, function (count) {
              countHeading.innerHTML = count;
              countDown(count, function (count) {
                countHeading.innerHTML = count;
                countDown(count, function (count) {
                  countHeading.innerHTML = count;
                  countDown(count, function (count) {
                    countHeading.innerHTML = count;
                    countDown(count, function (count) {
                      countHeading.innerHTML = count;
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};
