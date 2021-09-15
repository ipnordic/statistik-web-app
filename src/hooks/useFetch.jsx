import { useState, useEffect } from "react";
import axios from "axios";

/**
 *
 * ! UNDER CONSTRUCTION !
 */

const useFetch = (url, username, password) => {
    const [status, setStatus] = useState("idle");
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setStatus("Fetching...");
                const response = await axios(url, {
                    auth: {
                        username: username,
                        password: password,
                    },
                });
                if (response.statusText !== "OK") {
                    setStatus("Could not fetch the data!");
                    throw new Error("Could not fetch the data!");
                }
                setData(response.data);
                setStatus("");
            } catch (error) {
                return error.message;
            }
        };

        fetchData();
    }, [url, username, password]);

    return { status, data };
};

export default useFetch;
