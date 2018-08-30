'use strict';

const MasterPage = require('./master/master.page');
const Sign = require('./home/sign.form');

class StartSellingPage extends MasterPage{

    constructor() {
        super();
        this['Watch video button'] = element(by.css('.watch_video_cta'));
        this['Join our community section'] = element(by.css('.testimonials'));
        this['Tool List Section'] = element(by.css('.tool_list_section'));
        this['Join Vimeo Pro button'] = element(by.css('.big_cta_btn'));
        this['Marketing section'] = element(by.css('.light_below_hero'));
    };

}


module.exports = StartSellingPage;