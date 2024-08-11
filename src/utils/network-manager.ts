export const BASE_URL = "https://api.github.com/";
export const URL_REPO_LIST = "repositories";
export const DETAIL_URL_REPO = "repos/";

class NetworkManager {
  constructor() {}
  async getWithRequest(endpoint: string, request: any) {
    if (request == null) {
      const res = await fetch(BASE_URL + endpoint, {
        headers: {
          Authorization: "Bearer " + process.env.API_KEY,
        },
      });
      if (!res.ok) {
        throw new Error("n/a");
      }
      return res.json();
    }
  }

  async get(endpoint: string) {
    const res = await fetch(BASE_URL + endpoint, {
      headers: {
        Authorization: "Bearer " + process.env.API_KEY,

      },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${BASE_URL+endpoint}`);
    }
    return res.json();
  }
}

const networkMgr = new NetworkManager();
export default networkMgr;
