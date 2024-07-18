const func = () => {
    let res = "";
    const result = document.getElementById("result");
    const input = document.getElementById("input");
    const code = document.getElementById("code");
    const resolution = document.getElementById("resolution");
    const output = document.getElementById("output");


    res = `"C:\\Users\\thinh\\Downloads\\ffmpeg-master-latest-win64-gpl\\bin\\ffmpeg.exe" -c:v h264_qsv -i`
    if (resolution.value)
        result.value = res + " " + input.value + " -s:v " + resolution.value + code.value + " " + output.value;
    else
        result.value = res + " " + input.value + code.value + " " + output.value;
}

const copyfnc = () => {
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
}