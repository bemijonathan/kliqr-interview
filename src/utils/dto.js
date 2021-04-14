export const total = (transactions) => {
    let c = 0;
    let d = 0;
    transactions.forEach(element => {
        if (element.type === 'credit') {
            c = c + +element.amount
        } else {
            d = d + +element.amount
        }
    })
    return {
        total_spent: c,
        total_income: d,
    }
}


export const getUnique = (transactions) => {
    if(!transactions) {
        return []
    }
    const tttt = Object.values(transactions.reduce((r, e) => {
        let k = `${e.category}`;
        if (!r[k]) r[k] = { ...e, count: 1 }
        else {
            r[k].count += 1
        };
        return r;
    }, {}))

    console.log(tttt)
    return tttt
}