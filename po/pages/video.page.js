'use strict';

const MasterPage = require('./master/master.page');
const Sign = require('./home/sign.form');

class VideoPage extends MasterPage{

    constructor() {
        super();
        this['Author link'] = element(by.css('.clip_info-subline--watch .js-user_link'));
        this['Follow button'] = element(by.css('.clip_info-subline--watch button'));
        this['Play button'] = element(by.css('button.play'));
        this['Like button'] = element(by.css('.like-button'));
        this['Watch later button'] = element(by.css('.watch-later-button'));
        this['Add to collection button'] = element(by.css('.collections-button'));
        this['Share button'] = element(by.css('.share-button'));
        this['Settings'] = element(by.css('button.js-prefs'));
    };

}


module.exports = VideoPage;