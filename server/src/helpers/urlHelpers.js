export const extractUrlParamsBasedOnRoute = (requestUrl, route) => {

    //TODO: Refactor this to cater for multiple parameters allowed in the url
    const {key, numberOfParamsInUrl }= route;

    const indexOfFirstParameterInUrl = requestUrl.indexOf(key) + `${key}/`.length;

    const firstParameterInUrlWithRestOfUrlString = requestUrl.substring(indexOfFirstParameterInUrl);

    const firstParameterInUrl = firstParameterInUrlWithRestOfUrlString.includes("/")?
        firstParameterInUrlWithRestOfUrlString.substring(0,firstParameterInUrlWithRestOfUrlString.indexOf("/"))
        :firstParameterInUrlWithRestOfUrlString;

    return firstParameterInUrl;
}

