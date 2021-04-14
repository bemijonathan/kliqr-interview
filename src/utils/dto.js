export const total = (transactions) => {
	let c = 0;
	let d = 0;
	transactions.forEach((element) => {
		if (element.type === "credit") {
			c = c + +element.amount;
		} else {
			d = d + +element.amount;
		}
	});
	return {
		total_spent: formatMoney(c),
		total_income: formatMoney(d),
	};
};

const formatMoney = (payload) => {
	const str = "" + payload;
	if (str.indexOf(",") !== -1) return payload;
	return parseFloat(payload || 0)
		.toFixed(2)
		.replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
};

export const getUnique = (transactions) => {
	if (!transactions) {
		return [];
	}
	const tttt = Object.values(
		transactions.reduce((r, e) => {
			let k = `${e.category}`;
			if (!r[k]) r[k] = { ...e, count: 1 };
			else {
				r[k].count += 1;
			}
			return r;
		}, {})
	);

	console.log(tttt);
	return tttt;
};
