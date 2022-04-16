// Re-factore Spinner 1:

const cursorSpin = function() {
  const sequence = ["\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\n"];
  let delay = 100;
  for (let i = 0; i < sequence.length; i++) {
    delay += 200;
    setTimeout(() => {
      process.stdout.write(sequence[i]);
    }, delay);
  }
};

cursorSpin();
