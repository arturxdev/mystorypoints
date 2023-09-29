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
module.exports = {
  getTasks: async (user,months) => {
    const query =
      `assignee = ${user} AND created >= startOfMonth(-${months}M) AND created <= endOfMonth()`;
    const token =
      "ATATT3xFfGF0jmsKbzD0U2180hM3QBP-w3fptU_UFlk4tI6gCLxapriu_EHx10dr0kY_ftSYFHO7AG-3BuXkvoDrE4PWsdcsfE9mJyXLSBNB9xHLWsXSEU70G-Q6nRWJETgfcX2H-OIL-_6w2LggdVw0ioEkghQdkJO59aIR58sSpKdeHCqYdR8=074EE5A3";
    const url = "https://koibanx.atlassian.net/rest/api/3/search?jql=" + query+"&maxResults=150";
    const response = await axios({
      method: "get",
      url,
      headers: {
        "Authorization": `Basic ${
          Buffer.from(
            "arturo.guerrero@koibanx.com:" + token,
          ).toString("base64")
        }`,
        "Accept": "application/json",
      },
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
  createYear() {
    let weeks = [];
    for (let index = 0; index < 52; index++) {
      weeks.push({
        month: obtenerFechasSemanaDelAño(index + 1, 2023),
        total: 0,
        issues: [],
      });
    }
    return weeks;
  },
};
