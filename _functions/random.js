function getRelativeRandomItems(data, items) {
    const dataClone = [...data];
    const selectedItems = [];
  
    while (selectedItems.length < items && dataClone.length > 0) {
      // Calcula la suma total de los puntajes en la copia actual

      const inverseScoreSum = dataClone.reduce((total, item) => total + 1 / item.score, 0);
  
      // Genera un número aleatorio entre 0 y la suma total inversa de puntajes
      const randomNumber = Math.random() * inverseScoreSum;
  
      // Recorre los elementos para elegir uno en función de la probabilidad inversa al puntaje
      let acc = 0;
      for (const item of dataClone) {
        acc += 1 / item.score;
        if (acc >= randomNumber) {
          selectedItems.push(item);
          dataClone.splice(dataClone.indexOf(item), 1);
          break;
        }
      }
    }
  
    return selectedItems;
  }
  
  const datos = [
    { name: "a", score: 5 },
    { name: "b", score: 2 },
    { name: "c", score: 5 },
    { name: "d", score: 5 },
    { name: "e", score: 1 },
  ];
  
  const elementosAleatorios = getRelativeRandomItems(datos, 1);
  console.log(elementosAleatorios);
  