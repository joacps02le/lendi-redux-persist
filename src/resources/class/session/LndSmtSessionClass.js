// import utils from 'resources/common/utils/index';

/**
 * LndSmtSessionClass
 * @type {LndSmtSessionClass}
 */
let LndSmtSessionClass = class {
  /**
   * constructor
   * @param  {Object} session [description]
   */
  constructor() {
    // if (utils.common.isSomething(session)) {
    //   // User params
    //   this.userName = session.userName;
    //   this.isLogged = session.isLogged;
    //   this.encrypted = session.encrypted;
    //   this.token = session.token;
    //   // true if the user has been inactive for x min
    //   this.isInactive = session.isInactive;
    //   // locale
    //   if (utils.common.isSomething(session.locale)) {
    //     this.locale = session.locale;
    //   } else {
    //     // locale
    //     const locale = navigator.language || 'es';
    //     this.locale = locale;
    //   }
    // } else {
      // User params
      this.userName = null;
      this.isLogged = false;
      this.token = null;
      this.encrypted = null;
      // true if the user has been inactive for x min
      this.isInactive = false;

      // locale
      const locale = navigator.language || 'es';
      this.locale = locale;
    // }
  }

  /**
   * make a copy
   * @return {LndSmtSessionClass} a copy of this
   */
  clone() {
    let newSession = new LndSmtSessionClass(this);
    return newSession;
  }
};

export default LndSmtSessionClass;
