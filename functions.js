const axios = require("axios");
const dayjs = require("dayjs");
function obtenerCantidadDeSemanasEnMes(mes, year) {
  // Obtiene el primer día del mes
  const primerDiaDelMes = new Date(year, mes - 1, 1);
  // Obtiene el último día del mes
  const ultimoDiaDelMes = new Date(year, mes, 0);
  // Calcula el número de días en el mes
  const cantidadDeDiasEnMes = ultimoDiaDelMes.getDate();
  // Obtiene el día de la semana del primer día del mes (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
  const diaDeLaSemana = primerDiaDelMes.getDay();
  // Calcula la cantidad de semanas
  const cantidadDeSemanas = Math.ceil(
    (cantidadDeDiasEnMes + diaDeLaSemana) / 7,
  );
  return cantidadDeSemanas;
}

function obtenerFechasSemanaDelAño(numeroSemana, año) {
  // Calcula la fecha del primer día del año
  const primerDiaDelAño = new Date(año, 0, 1);

  // Calcula la fecha de inicio de la semana
  const numeroDiasParaInicio = (numeroSemana - 1) * 7;
  const fechaInicioSemana = new Date(primerDiaDelAño);
  fechaInicioSemana.setDate(primerDiaDelAño.getDate() + numeroDiasParaInicio);

  // Calcula la fecha final de la semana
  const fechaFinalSemana = new Date(fechaInicioSemana);
  fechaFinalSemana.setDate(fechaInicioSemana.getDate() + 6);

  return {
    inicio: dayjs(fechaInicioSemana).format("MMM-DD"),
    final: dayjs(fechaFinalSemana).format("MMM-DD"),
  };
}
function semanasFaltantesParaFinDeAnio(fecha) {
  // Obtiene el año de la fecha proporcionada
  const año = fecha.getFullYear();

  // Crea una fecha para el 31 de diciembre de ese año a las 23:59:59
  const finDeAño = new Date(año, 11, 31, 23, 59, 59);

  // Calcula la diferencia en milisegundos entre la fecha proporcionada y el fin de año
  const diferenciaEnMilisegundos = finDeAño - fecha;

  // Calcula la diferencia en semanas
  const semanasFaltantes = Math.ceil(
    diferenciaEnMilisegundos / (7 * 24 * 60 * 60 * 1000),
  );

  return semanasFaltantes;
}
module.exports = {
  getTasks: async (user, months, token, jiraUser) => {
    const url = "https://koibanx.atlassian.net/rest/api/3/search";
    const params = {
      jql:
        `assignee = ${user} AND created >= startOfMonth(-${months}M) AND created <= endOfMonth()`,
      maxResults: 150,
      // fields: "summary,description,customfield_xxxxx", // Reemplaza con el ID real de tu campo de Story Points
      orderBy: "created DESC", // Ordenar por fecha de creación en orden descendente
    };
    const headers = {
      "Authorization": `Basic ${
        Buffer.from(
          jiraUser + ":" + token,
        ).toString("base64")
      }`,
      "Accept": "application/json",
    };
    const response = await axios({
      method: "get",
      url,
      headers,
      params,
    });
    const tasks = response.data.issues.map((issue) => {
      return {
        summary: issue.fields.summary,
        storyPoint: issue.fields.customfield_10102,
        key: issue.key,
        startDate: issue.fields.customfield_10015,
        endDate: issue.fields.customfield_10143,
        resolution: issue.fields.status ? issue.fields.status.name : null,
      };
    });
    return tasks;
  },
  createWeeksofMonth: (month, year) => {
    const numeroSemanas = obtenerCantidadDeSemanasEnMes(month, year);
    return createWeeks(numeroSemanas);
  },
  createYear(date) {
    const dias = semanasFaltantesParaFinDeAnio(date);
    let weeks = {};
    for (let index = 52 - dias; index <= 52; index++) {
      weeks[index.toString()] = {
        month: obtenerFechasSemanaDelAño(index + 1, 2023),
        total: 0,
        issues: [],
      };
    }
    return weeks;
  },
};
