const cryptoAPI = new API('7c4c4a3ef2cf192c6cf05ad79d9a02ee84d6833bb463fdddc17f84c7583a05cd')
const renderUI = new RenderUI()

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const monedaSelect = document.querySelector('#moneda')
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value

    const criptomonedaSelect = document.querySelector('#criptomoneda')
    const criptomonedaSeleccionada = criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value

    console.log(monedaSeleccionada)
    console.log(criptomonedaSeleccionada)

    if(monedaSeleccionada === '' || criptomonedaSeleccionada === '') {
        renderUI.renderErrorOfValidation(
            'Por favor completa todos los campos',
            'alert alert-danger text-white text-center'
        )
    } else {
        cryptoAPI.getInfoForCryptoSelected(criptomonedaSeleccionada, monedaSeleccionada)
                 .then(data => {
                    renderUI.renderFilteredData(data.resultForRequest.RAW, monedaSeleccionada, criptomonedaSeleccionada)
                 })
    }

})