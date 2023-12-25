import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

async function getUser(accountId: string) {
  const jiraUser = "arturo.guerrero@koibanx.com";
  const token = process.env.TOKEN_JIRA;
  const url = "https://koibanx.atlassian.net/rest/api/3/user";
  const params = {
    accountId,
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
  return { status: true, data: response.data };
}
type DataSuccess = {
  status: boolean;
  data: any;
};
type DataFail = { status: boolean; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataSuccess | DataFail>,
) {
  try {
    if (req.query.userId == "null") {
      return res
        .status(500)
        .json({ status: false, error: "error on load data" });
    }
    const data = await getUser(req.query.userId as string);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: false, error: "error on load data" });
  }
}
