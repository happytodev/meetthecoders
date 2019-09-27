'use strict'

const Language = use('App/Models/Language')

class LanguageController {
  async home () {
    const languages = await Language.all()
    return languages.toJSON()
  }
}

module.exports = LanguageController
