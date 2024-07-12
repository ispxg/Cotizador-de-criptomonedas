class RenderUI {
  constructor() {
    this.renderCryptoSelect();
  }

  renderCryptoSelect() {
    cryptoAPI.getCrypto().then((data) => {
      const select = document.querySelector("#criptomoneda");

      for (const [key, value] of Object.entries(data.data.Data)) {
        const opciones = document.createElement("option");
        opciones.value = value.Symbol;
        opciones.appendChild(document.createTextNode(value.CoinName));
        select.appendChild(opciones);
      }
    });
  }

  renderFilteredData(data, realCoin, cryptoCoin) {
    const resultadoAnterior = document.querySelector("#resultado > div");

    if (resultadoAnterior) {
      resultadoAnterior.remove();
    }

    const info = data[realCoin][cryptoCoin];

    const ultimaActualizacion = new Date(
      info.LASTUPDATE * 1000
    ).toLocaleDateString("es-VE");

    const templateHTML = `
            <div class="card" style="
                background: #00c6ff;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                border-radius: 20px;"
            >
                <div class="card-body text-white">
                    <h2 class="card-title text-white">Resultado</h2>
                    <p>El precio de la criptomoneda ${info.TOSYMBOL} en ${
      info.FROMSYMBOL
    } es de: ${info.PRICE.toFixed(2)}</p>
                    <p>Última variación: %${info.CHANGEPCTDAY.toFixed(2)}</p>
                    <p>Última actualización: ${ultimaActualizacion}</p>
                </div>
            </div>
        `;
    this.renderSpinner("block");

    setTimeout(() => {
      document.querySelector("#resultado").innerHTML = templateHTML;
      this.renderSpinner("none");
    }, 2000);
  }

  renderSpinner(property) {
    const spinner = document.querySelector(".contenido-spinner");
    spinner.style.display = property;
  }

  renderErrorOfValidation(txt, cssClass) {
    const div = document.createElement("div");
    div.className = cssClass;
    div.appendChild(document.createTextNode(txt));

    const divMensajes = document.querySelector(".mensajes");
    divMensajes.appendChild(div);

    setTimeout(() => {
      document.querySelector(".mensajes div").remove();
    }, 3000);
  }
}
