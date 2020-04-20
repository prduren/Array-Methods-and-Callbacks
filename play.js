const obj = {
    'parker is cool': false,
    'garret is cool': false,
    cheese: 'good',
  };
  let clean = {};
  
  Object.entries(obj).forEach(([key, value]) => {
    clean[key.split(' ').join('')] = value;
  });
  console.debug(clean);

  console.log(clean.parkeriscool);