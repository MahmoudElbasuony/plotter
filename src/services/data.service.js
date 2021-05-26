import axios from "axios";
import { appConfig } from "../config";
import { handleError } from "./error.service";

export const DataService = {
  fetchColumns: async function () {
    try {
      const response = await axios.get(appConfig.Urls.GetColumns);
      return response.data || [];
    } catch (e) {
      handleError(e);
    }
  },
  fetchCharData : async function(dimension = '', measures = []){
    try {
      const response = await axios.post(appConfig.Urls.GetChartData, {dimension , measures});
      return response.data || [];
    } catch (e) {
      handleError(e);
    }
  }
};
