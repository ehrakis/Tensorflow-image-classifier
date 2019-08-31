let net;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  const net = await mobilenet.load();
  console.log('Sucessfully loaded model');
  
  async function analyze () {
    // Make a prediction through the model on our image.
    const imgEl = document.getElementById('img');
    const result = await net.classify(imgEl);

    document.getElementById('result').innerText = `
        prediction: ${result[0].className}\n
        probability: ${result[0].probability}
      `;


  };

  document.getElementById('analyze').addEventListener('click', () => analyze());
  
}

app();

