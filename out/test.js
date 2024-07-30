const TimeSuppression = require('./Buildings/Controls/OBC/ASHRAE/G36/Generic/TimeSuppression')

const ts = TimeSuppression()
const res = ts({ TSet: 20, TZon: 30 })

console.log(res)