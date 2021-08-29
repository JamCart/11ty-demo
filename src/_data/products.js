const fs = require('fs')
const path = require('path')

const data = fs.readdirSync(path.join(__dirname, 'products'))
  .filter(filename => path.extname(filename) === '.json')
  .map(filename => {
    const file_path = path.join(__dirname, 'products', filename)
    const raw_data = fs.readFileSync(file_path)
    const data = JSON.parse(raw_data.toString())
    return {
      ...data,
      slug: path.basename(filename)
    }
  })

module.exports = data
