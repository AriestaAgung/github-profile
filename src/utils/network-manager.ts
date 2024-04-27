import { QueryClient } from "@tanstack/react-query";

export const BASE_URL = "https://api.github.com/";
export const URL_REPO_LIST = "repositories";

class NetworkManager {
  constructor() {}
  query = new QueryClient();
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
    const res = await fetch(BASE_URL + endpoint);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
}

const networkMgr = new NetworkManager();
export default networkMgr;
