'use strict';

const MasterPage = require('./master/master.page');
const Sign = require('./home/sign.form');

class SearchResultsPage extends MasterPage{

    constructor() {
        super();
        this['Sort By Dropdown'] = element(by.css('.iris_dropdown'));
        this['Sort By Dropdown Option'] = element.all(by.css('.iris_dropdown-option'));
        this['Search result item'] = element.all(by.css('.iris_annotation'));
        this['Pagination link'] = element.all(by.css('.iris_pagination__link'));
    };

}


module.exports = SearchResultsPage;