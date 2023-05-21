// chrome.runtime.onMessage.addListener((obj, sender, response) => {
//     console.log("xd")
// //     const analytics = document.querySelectorAll('a[href*="analytics"]');
// //     console.log(analytics[0])
// //     const badge = document.createElement("p");
// // //     badge.textContent = "0";
// // //     console.log(badge);
// // // //    analytics.appendChild(badge)

// });
console.log("xd")
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'Extension icon clicked') {
        const analytics = document.querySelectorAll('a[href*="analytics"]');
        const replies = document.querySelectorAll('[data-testid="reply"]');
        const retweets = document.querySelectorAll('[data-testid="retweet"]');
        const likes = document.querySelectorAll('[data-testid="like"]');
        for (let i = 0; i < analytics.length; i++) {
            const result = convertToNumber(analytics[i].textContent) - convertToNumber(likes[i].textContent);
            console.log(result);
            analytics[i].textContent = convertToShortFormat(result);
        }
    }
  });
function convertToNumber(value) {
    if (value == 0) {
      return 0;
    }
    value = value.replace(/,/g, '.');
    const numberPart = parseFloat(value);
    const suffix = value.charAt(value.length - 1).toUpperCase();
    let multiplier = 1;
  
    if (suffix === 'K') {
      multiplier = 1000;
    } else if (suffix === 'M') {
      multiplier = 1000000;
    } else if (suffix === 'B') {
      multiplier = 1000000000;
    }
  
    return numberPart * multiplier;
}
  
function convertToShortFormat(number) {
    let suffix = '';
    let convertedNumber = number;
    if (number == 0) {
      return 0;
    }
    if (number >= 1000 && number < 1000000) {
      convertedNumber = number / 1000;
      suffix = 'K';
    } else if (number >= 1000000 && number < 1000000000) {
      convertedNumber = number / 1000000;
      suffix = 'M';
    } else if (number >= 1000000000) {
      convertedNumber = number / 1000000000;
      suffix = 'B';
    }
  
    if (Number.isInteger(convertedNumber)) {
      convertedNumber = convertedNumber.toFixed(0);
    } else {
      convertedNumber = convertedNumber.toFixed(1);
    }
  
    return convertedNumber + suffix;
  }