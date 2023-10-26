const nettoZuBrutto = document.body.querySelector("#nettoZuBrutto");
const bruttoZuNetto = document.body.querySelector("#bruttoZuNetto");

const highTax = document.body.querySelector("#highTax");
const lowTax = document.body.querySelector("#lowTax");

const nettoInput = document.body.querySelector("#nettoInput");

const steuerOutput = document.body.querySelector("#steuerOutput");
const bruttoOutput = document.body.querySelector("#bruttoOutput");

const berechner = () => {
  if (nettoZuBrutto.checked) {
    if (highTax.checked) {
      steuerOutput.textContent = `${(nettoInput.value * 0.19).toFixed(2)} €`;
      bruttoOutput.textContent = `${(nettoInput.value * 1.19).toFixed(2)} €`;
    } else if (lowTax.checked) {
      steuerOutput.textContent = `${(nettoInput.value * 0.07).toFixed(2)} €`;
      bruttoOutput.textContent = `${(nettoInput.value * 1.07).toFixed(2)} €`;
    }
  } else if (bruttoZuNetto.checked) {
    if (highTax.checked) {
      steuerOutput.textContent = `${(
        nettoInput.value -
        nettoInput.value / 1.19
      ).toFixed(2)} €`;
      bruttoOutput.textContent = `${(nettoInput.value / 1.19).toFixed(2)} €`;
    } else if (lowTax.checked) {
      steuerOutput.textContent = `${(
        nettoInput.value -
        nettoInput.value / 1.07
      ).toFixed(2)} €`;
      bruttoOutput.textContent = `${(nettoInput.value / 1.07).toFixed(2)} €`;
    }
  }
};
