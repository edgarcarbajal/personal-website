const getAPI = async (url: string) => {
    const request = {
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
        method: "GET"
    };

    let resData;
    try {
        const response = await fetch(url, request);
        resData = await response.json();
    }
    catch (error) {
        console.log('getAPI - Error:', error);
    }

    return resData;
};

export {getAPI};