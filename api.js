const axios = require("axios");
module.exports = {
  getTasks: async (user, months, token, jiraUser) => {
    try {
      console.log(user, months);
      const url = "https://koibanx.atlassian.net/rest/api/3/search";
      console.log(user);
      const params = {
        jql: `assignee = "${user}" AND created >= startOfMonth(-3M) AND created <= endOfMonth()`,
        maxResults: 250,
        orderBy: "created DESC",
      };
      const headers = {
        Authorization: `Basic ${Buffer.from(jiraUser + ":" + token).toString(
          "base64",
        )}`,
        Accept: "application/json",
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
          storyPoint:
            issue.fields.customfield_10102 ?? issue.fields.customfield_10016,
          key: issue.key,
          startDate: issue.fields.customfield_10015,
          endDate: issue.fields.customfield_10143,
          resolution: issue.fields.status ? issue.fields.status.name : null,
          issueType: issue.fields.issuetype.name,
        };
      });
      return tasks;
    } catch (error) {
      console.log(error.response.data);
      throw new Error("Error al obtener datos");
    }
  },
};
