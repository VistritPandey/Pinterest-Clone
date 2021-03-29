import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID 6AKmq1ZWZsm1Q0OaqIlkSKFi7DPlPm1Y61sOhFNWN_U"
    }
})