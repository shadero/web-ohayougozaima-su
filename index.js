function getParameterByName(name, url = window.location.href) {
	name = name.replace(/[[\]]/g, "\\$&");
	const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return "";
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getJSTDate(unix = -1) {
	const jSTdate = unix < 0 ? new Date() : new Date(unix);
	jSTdate.setHours(jSTdate.getHours() + 9);
	return jSTdate;
}

const unix = getParameterByName("unix");
const jSTdate = getJSTDate(unix * 1000);
if (unix !== null && unix !== "" && !Number.isNaN(jSTdate.getTime())) {
	document.getElementById("ohayo").innerText =
		"午前" +
		jSTdate.getUTCHours() +
		"時" +
		jSTdate.getUTCMinutes() +
		"分起床\nおはようございます";
	document.getElementById("shareDescription").innerText = "あなたも起きる↓";
}
