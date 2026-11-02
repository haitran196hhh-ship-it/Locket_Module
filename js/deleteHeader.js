/***********************************************
> deleteHeader by TranHai307
***********************************************/

const version = 'V2.0.0';

function setHeaderValue(headers, key, val) {
    var lowerKey = key.toLowerCase();
    if (lowerKey in headers) {
        headers[lowerKey] = val;
    } else {
        headers[key] = val;
    }
}

var modifiedHeaders = $request.headers;
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
setHeaderValue(modifiedHeaders, "If-None-Match", "");
setHeaderValue(modifiedHeaders, "If-Modified-Since", "");

$done({ headers: modifiedHeaders });
