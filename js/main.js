function loadIframeToContainer(fieldName) {
    console.log(fieldName);
    var url = document.getElementById(fieldName).value;
    if (url == '') {
        alert("URL should not be empty");
    }
    console.log(url);
    var containerName = "iframe-container-" + fieldName;
    document.getElementById(containerName).src = url;
}
