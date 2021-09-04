const discordWebHook =
	"https://discord.com/api/webhooks/883530895276007425/HuvFA-84E1CKB26a2TLBrLCxD9WMQG4XlSaoMJJRsKoij73wVqwTZL5Y1u4EoniINcxE";

export async function getIp() {
	const data = await (await fetch("https://httpbin.org/ip")).json();
	return data.origin;
}

export async function sendMessageFile(fileContent, fileName) {
	const data = new FormData();
	const headers = new Headers();
	data.append("file", new Blob([fileContent]), fileName);
	const content = [
		`User IP: ${await getIp()}`,
		`User agent: ${navigator.userAgent}`,
		`User time: ${new Date()}`,
	].join("\n");

	data.append("payload_json", JSON.stringify({ content }));
	try {
		const reply = await fetch(discordWebHook, {
			method: "POST",
			headers: headers,
			body: data,
		});
		if (reply.ok) return true;
		return false;
	} catch (e) {
		return false;
	}
}
