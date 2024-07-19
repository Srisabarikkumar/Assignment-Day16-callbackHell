const countHeading = document.getElementById("countDown");
const btn = document.getElementById("countButton");

btn.onclick = function () {
  let count = 10;
  countHeading.innerHTML = count;
  setTimeout(() => {
    count = count - 1;
    if (count >= 1) {
      countHeading.innerHTML = count;
    } else {
      countHeading.innerHTML = "Happy Independence Day";
    }
    setTimeout(() => {
      count = count - 1;
      if (count >= 1) {
        countHeading.innerHTML = count;
      } else {
        countHeading.innerHTML = "Happy Independence Day";
      }
      setTimeout(() => {
        count = count - 1;
        if (count >= 1) {
          countHeading.innerHTML = count;
        } else {
          countHeading.innerHTML = "Happy Independence Day";
        }
        setTimeout(() => {
          count = count - 1;
          if (count >= 1) {
            countHeading.innerHTML = count;
          } else {
            countHeading.innerHTML = "Happy Independence Day";
          }
          setTimeout(() => {
            count = count - 1;
            if (count >= 1) {
              countHeading.innerHTML = count;
            } else {
              countHeading.innerHTML = "Happy Independence Day";
            }
            setTimeout(() => {
              count = count - 1;
              if (count >= 1) {
                countHeading.innerHTML = count;
              } else {
                countHeading.innerHTML = "Happy Independence Day";
              }
              setTimeout(() => {
                count = count - 1;
                if (count >= 1) {
                  countHeading.innerHTML = count;
                } else {
                  countHeading.innerHTML = "Happy Independence Day";
                }
                setTimeout(() => {
                  count = count - 1;
                  if (count >= 1) {
                    countHeading.innerHTML = count;
                  } else {
                    countHeading.innerHTML = "Happy Independence Day";
                  }
                  setTimeout(() => {
                    count = count - 1;
                    if (count >= 1) {
                      countHeading.innerHTML = count;
                    } else {
                      countHeading.innerHTML = "Happy Independence Day";
                    }
                    setTimeout(() => {
                      count = count - 1;
                      if (count >= 1) {
                        countHeading.innerHTML = count;
                      } else {
                        countHeading.innerHTML = "Happy Independence Day";
                      }
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}