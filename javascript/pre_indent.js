// remove indentation
document.querySelectorAll("pre code").forEach((element) => {
    let html = element.outerHTML
    let pattern = html.match(/\s*\n[\t\s]*/)
    element.outerHTML = html.replace(new RegExp(pattern, "g"),'\n');
})

// remove first line break
document.querySelectorAll("pre code").forEach((element) => {
    let pattern = element.innerHTML.match(/^\n/)
    element.innerHTML = element.innerHTML.replace(new RegExp(pattern), "")
})

// remove last line break
document.querySelectorAll("pre code").forEach((element) => {
    let pattern = element.innerHTML.match(/\n\s+$/)
    element.innerHTML = element.innerHTML.replace(new RegExp(pattern), "")
})