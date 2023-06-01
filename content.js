chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.message === 'ON') {
        console.log("xd")
        const analytics = document.querySelectorAll('a[href*="analytics"]');
        const likes = document.querySelectorAll('[data-testid="like"]');
        console.log(analytics[0].style.display)
        for (let i = 0; i < analytics.length; i++) {
          const result = convertToNumber(analytics[i].textContent) - convertToNumber(likes[i].textContent);
          if (analytics[i].textContent != '') {
            const badge = document.createElement("p");
            badge.textContent = convertToShortFormat(result)
            badge.id = "dontcare"
            analytics[i].insertAdjacentElement("afterend", badge)
            analytics[i].style.display = "none";
            };
          }
    }
    else if (request.message === "OFF") {
      const dontcare = document.querySelectorAll('[id=dontcare]');
      for (let i = 0; i < dontcare.length; i++) {
        dontcare[i].remove()
      }
      const analytics = document.querySelectorAll('a[href*="analytics"]');
      for (let i = 0; i < analytics.length; i++) {
        analytics[i].style.display = ""
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
    else {
      return value.replace(/\./g, '')
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

  // // Create a new MutationObserver instance with the callback function
  // const observer = new MutationObserver(callback);
  
  // // Define the callback function
  // function callback(mutationsList, observer) {
  //   // Iterate through the list of mutations
  //   for (let mutation of mutationsList) {
  //     // Handle the DOM changes here
  //     const analytics = document.querySelectorAll('a[href*="analytics"]');
  //     const replies = document.querySelectorAll('[data-testid="reply"]');
  //     const retweets = document.querySelectorAll('[data-testid="retweet"]');
  //     const likes = document.querySelectorAll('[data-testid="like"]');
  //     for (let i = 0; i < analytics.length; i++) {
  //       const result = convertToNumber(analytics[i].textContent) - convertToNumber(likes[i].textContent);
  //       console.log(result, analytics[i].textContent, likes[i].textContent);
  //       if (analytics[i].textContent != '') {
  //         const badge = document.createElement("p");
  //         badge.classList.add('css-1dbjc4n')
  //         badge.textContent = convertToShortFormat(result)
  //         analytics[i].insertAdjacentElement("afterend", badge)
  //         analytics[i].remove() 
  //           // analytics[i].textContent = convertToShortFormat(result);
  //         };
  //   }
  // }
  
  // // Select the target element to observe (in this case, the document body)
  // const targetElement = document.body;
  
  // // Configure the options for the observer
  // const options = {
  //   childList: true, // Observe changes to the direct children of the target
  //   subtree: true,   // Observe changes to the descendants of the target
  // };
  
  // // Start observing mutations on the target element
  // observer.observe(targetElement, options);
  
  //convertToNumber