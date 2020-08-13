const checkHash = (location) => {
  let { hash } = location
  if (hash) {
    var element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView()
    }
  }
}

exports.onRouteUpdate = ({ location }) => {
  checkHash(location)
}
