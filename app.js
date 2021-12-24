// https://www.cs.cmu.edu/~biglou/resources/
// https://hatespeechdata.com/
// https://github.com/valeriobasile/hurtlex

function getCriticalWordsFromString(string) {
    // Add front and trainling spaces to enable search per word without special formatting for beginning and end of sentence
    string = ' ' + string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase() + ' '
    let resultRsdb = searchDbAndCountWordOccurence(slurs_db_rsdb, string, "Racial Slur Database")
    let resultHurtlexDe = searchDbAndCountWordOccurence(slurs_db_hurtlex_de, string, "Hurtlex DE")
    let resultHurtlexEn = searchDbAndCountWordOccurence(slurs_db_hurtlex_en, string, "Hurtlex EN")
    return resultRsdb.concat(resultHurtlexDe).concat(resultHurtlexEn)
}

function searchDbAndCountWordOccurence(db, string, source) {
    let result = []
    db.forEach( e => {
        if(string.includes(' ' + e.slur.toLowerCase() + ' ')) {
            e["count"] = string.split(e.slur.toLowerCase()).length - 1;
            e["source"] = source
            result.push(e)
            return
        }
    })
    return result
}

function displayCriticalWords(criticalWordArray) {
    let resultContainer = document.querySelector('#result')
    resultContainer.textContent = ''
    criticalWordArray.forEach( e => {
        resultContainer.appendChild(buildCriticalWordAlert(e))
    })
}

function buildCriticalWordAlert(criticalWord) {
    let element = document.createElement('div')
    element.classList.add('alert')
    element.classList.add('alert-danger')
    element.innerHTML = '<b>' + criticalWord.slur + '</b> ' + criticalWord.reason_and_origin + ' (' + criticalWord.refers_to + ')'
    element.appendChild(buildWordCountBadge(criticalWord.count))
    return element
}

function buildWordCountBadge(count) {
    let element = document.createElement('span')
    element.classList.add('position-absolute')
    element.classList.add('top-0')
    element.classList.add('start-100')
    element.classList.add('translate-middle')
    element.classList.add('badge')
    element.classList.add('rounded-pill')
    element.classList.add('bg-danger')
    element.textContent = count + 'x'
    return element
}

function setupTextButton() {
    document.querySelector('#submitTextButton').addEventListener('click', () => {
        let criticalWords = getCriticalWordsFromString(document.querySelector('#textInput').value)
        displayCriticalWords(criticalWords)
    })
}

function runApp() {
    document.querySelector('#textInput').select()
    setupTextButton()
}

runApp();

