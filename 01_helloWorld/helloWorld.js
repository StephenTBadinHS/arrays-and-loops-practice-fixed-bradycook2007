function helloWorld(num) {
  if (num < 0) return 'ERROR';
  let result = '';

  for (let i = 0; i < num; i++) {
      result += "hello world";
  }
  return result;
}


console.log(helloWorld);