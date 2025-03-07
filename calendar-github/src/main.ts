import './style.css';

// import { getPercentile } from "./helpers";

// const values = [10, 1, 2, 4, 15, 20, 22, 25, 42, 12, 32, 590, 30, 3000, 50000];

// const pMin = getPercentile(values, 5);
// const pMax = getPercentile(values, 80);

// console.log('Percentil 5:', pMin);
// console.log('Percentil 90:', pMax);

// // Escalamos los valores:
// // - Si un valor es menor que pMin, se considera igual a pMin (resultado 0)
// // - Si un valor es mayor que pMax, se considera igual a pMax (resultado 1)
// // - Los demás se mapean proporcionalmente.
// const valoresEscalados = values.map(v => {
//   // Recortamos el valor al rango [pMin, pMax]
//   const valorRecortado = Math.max(pMin, Math.min(v, pMax));
//   // Normalizamos a un rango entre 0 y 1
//   return (valorRecortado - pMin) / (pMax - pMin);
// });

// console.log(valoresEscalados);


function getYearDays(year) {
  const startDate = new Date(year, 0, 1); // 1 de enero del año actual
  const endDate = new Date(year, 11, 31); // 31 de diciembre del año actual
  const days = [];
  
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
      // Formatear fecha como YYYY-MM-DD
      const formattedDate = currentDate.toISOString().split('T')[0];
      days.push({
          date: formattedDate,
          value: Math.floor(Math.random() * 10) + 1
      });
      
      // Avanzar al siguiente día
      currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return {
      startDate: startDate.getDay(),
      days: days
  };
}

const calendarData = getYearDays(2025);

const calendar = document.getElementById('calendar');

calendarData.days.forEach((day, index) => {
  const dayElement = document.createElement('div');
  dayElement.classList.add('day');
  dayElement.setAttribute('data-value', day.value);
  dayElement.title = day.date;

  // set custom property
  
  if (index === 0) {
    dayElement.style.setProperty('--grid-delay', `${calendarData.startDate}`);
  }
  calendar.appendChild(dayElement);
});