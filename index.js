/*
 * @author		Antonio Membrides Espinosa
 * @email		tonykssa@gmail.com
 * @date		21/05/2022
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
const KsMf = require('ksmf');
const ioc = require("./cfg/ioc.json");
class CdmModule extends KsMf.app.Module {

    initConfig() {
        this.helper.configure({ src: ioc });
        this.routes = [{
            route: this.prefix + "/user",
            controller: 'UserController',
            method: 'rest'
        }, {
            route: this.prefix + "/cdm/credential",
            controller: 'CredentialController',
            method: 'rest'
        }, {
            route: this.prefix + "/cdm/domain",
            controller: 'DomainController',
            method: 'rest'
        }, {
            route: this.prefix + "/cdm/oauth/authorize",
            controller: 'OauthController',
            action: 'authorize',
            method: 'get'
        }, {
            route: this.prefix + "/cdm/oauth/authorize/idp/back",
            controller: 'OauthController',
            action: 'authorizeBack',
            method: 'get'
        }, {
            route: this.prefix + "/cdm/oauth/authorize/idp/back",
            controller: 'OauthController',
            action: 'authorizeBack',
            method: 'post'
        }, {
            route: this.prefix + "/cdm/oauth/revoke",
            controller: 'OauthController',
            action: 'revoke',
            method: 'get'
        }, {
            route: this.prefix + "/cdm/oauth/revoke/idp/back",
            controller: 'OauthController',
            action: 'revokeBack',
            method: 'get'
        }, {
            route: this.prefix + "/cdm/oauth/revoke/idp/back",
            controller: 'OauthController',
            action: 'revokeBack',
            method: 'post'
        }, {
            route: this.prefix + "/cdm/oauth/token",
            controller: 'OauthController',
            action: 'token',
            method: 'post'
        }];

    }
}
module.exports = CdmModule;