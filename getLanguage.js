export const getLanguage = () => {
	const lang = new URL(location.href).searchParams.get("lang");
	if (lang) {
		return lang;
	}
	try {
		return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2);
	} catch(e) {
	}
	return "en";
};
