export default class ModelNames {
    URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRQmQAk2LNTvzrObEfWYn17SUEk5d-ySHc_GW2J_hJcgwQ7Aj-XdQ9KYe4HVvejC_7qyFxAnmJuyNht/pub?output=tsv';
    SEP_LINE = '\r\n';
    SEP_CELL = '\t';

    loadData() {
        return fetch(this.URL).then(r => r.text());
    }

    parseData(d) {
        const tableArr = d.split(this.SEP_LINE).map(r => r.split(this.SEP_CELL));
        const names = tableArr.shift();

        const formatData = tableArr.map(el => {
            const fl_names = {};
            names.forEach((name, i) => fl_names[name] = el[i]);

            return fl_names;
        });

        this.formatData = formatData;
        this.names = names;
        
        return { names, formatData }
    }
}