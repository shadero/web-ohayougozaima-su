function getJSTDate(unix = -1) {
	const jSTdate = unix < 0 ? new Date() : new Date(unix);
	jSTdate.setHours(jSTdate.getHours() + 9);
	return jSTdate;
}

const nowUnix = Math.floor(new Date().getTime() / 1000);
const url = "https://ohayou.shadero.net?unix=" + nowUnix;

const nowJSTDate = getJSTDate();
const text =
	"午前" +
	nowJSTDate.getUTCHours() +
	"時" +
	nowJSTDate.getUTCMinutes() +
	"分におきました、おはようございます。";

location.replace("https://twitter.com/intent/tweet?url=" + url + "&text=" + text);
