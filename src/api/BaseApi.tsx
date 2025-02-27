import axios from "axios";

const BaseApi = axios.create({
    baseURL: "https://virtserver.swaggerhub.com/TNSTKD98/Algo_Reivew/1.0.0/api",
    // 스웨거 서버 baseURL: "https://virtserver.swaggerhub.com/TNSTKD98/Algo_Reivew/1.0.0/api",
    // 형식님 서버 http://222.100.174.159:25565/api
    // 최신 서비스 서버 URL: http://57.180.243.13:8000/api
    // 실제 서비스 서버 https://www.algoreview.site/api
    headers: { "Content-Type": "application/json" },
});

export default BaseApi;