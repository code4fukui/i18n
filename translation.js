import { getLanguage } from "./getLanguage.js";

const lang = getLanguage();
if (lang != "ja") {
	try {
		const trans = await (await fetch("./translation.json")).json();
		const jas = document.body.querySelectorAll(".ja");
		for (const ja of jas) {
			const t = ja.textContent;
			const t2 = trans[t];
			if (t2) {
				ja.textContent = t2;
				console.log(t + " → " + t2);
			} else {
				console.log(t + " is not found in the translation.json");
			}
		}
	} catch (e) {
		console.log("not found: translation.json");
	}
	//
	const jac = document.body.querySelectorAll(".ja_content");
	jac.forEach(ja => ja.style.display = "none");
	const enc = document.body.querySelectorAll(".en_content");
	enc.forEach(ja => ja.style.display = "block");
}
