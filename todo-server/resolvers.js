const db = require('./db')
const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',
    copmon_members: () => db.copmon.list(),
    im_member: () => db.im.list()
}
module.exports = { Query }