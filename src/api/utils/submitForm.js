const extractUtms = () => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url);
  const paraobject = {};
  url.searchParams.forEach(function (val, key) {
    if (key.startsWith('utm_')) paraobject[key] = val;
  });

  return paraobject;
};

function listCookies() {
  var theCookies = document.cookie.split(';');
  var aString = '';
  for (var i = 1; i <= theCookies.length; i++) {
    aString += theCookies[i - 1] + '\n';
  }
  return aString;
}

export const submitForm = async (data, widget = 'Форма') => {
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  const utms = extractUtms();

  formBody += '&widget=' + widget;

  formBody +=
    '&' +
    Object.entries(utms)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

  formBody += `&cookies=${listCookies()}`;

  return fetch('https://azarties.com/submit-form.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: formBody,
  });
};
