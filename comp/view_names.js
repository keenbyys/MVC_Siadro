export default class ViewNames {
    DOM_TABLE = document.querySelector('.names-table table');

    renderData({ formatData, names }) {
        const html = `
            ${this.getTableHead(names)}
            <tbody>
                ${this.getTableBody(formatData)}
            </tbody>`;

        this.DOM_TABLE.innerHTML = html;
    }

    getTableHead([n, first_name, last_name]) {
        return `<thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">${ first_name }</th>
                    <th scope="col">${ last_name }</th>
                </tr>
            </thead>`;
    }

    getTableBody(data) {
        return data.map(({ order, first_name, last_name }) => {
            return `<tr>
                    <th scope="row">${order}</th>
                    <td>${ first_name }</td>
                    <td>${ last_name }</td>
                </tr>`
        }).join('');
    }
}