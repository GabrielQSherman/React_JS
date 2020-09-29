module.exports = {
  cryptoCompiler: (data) => {
    return {text: `${data.ticker}: ${data.name}`}
  }
}