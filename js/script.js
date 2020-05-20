// Fine Sezione Calcoli e Condizioni
var numeroChilometri = parseInt ( prompt ("Quanti chilometri devi percorrere?" ) );

var eta = parseInt ( prompt ("Quanti anni hai?" ) );

var prezzoIniziale = ( numeroChilometri * 0.21 );

if ( !isNaN(numeroChilometri) && !isNaN(eta)) {
  if (eta < 18 ) {
    sconto = prezzoIniziale * 0.2
  }

  if (eta > 65 ) {
    sconto = prezzoIniziale * 0.4
  }

  else if (eta >= 18 && eta <= 65 ) {
    sconto = 0
  }
} else {
  alert("ERRORE! Controlla i tuoi dati e riprova")
}

var prezzoFinale = ( prezzoIniziale - sconto )
// Fine Sezione Calcoli e Condizioni

// Sezione trascrizione
document.getElementById('chilometri').innerHTML = numeroChilometri;

document.getElementById('eta').innerHTML = eta;

document.getElementById('sconto').innerHTML = (sconto.toFixed(2)) + "€";

document.getElementById('prezzofinale').innerHTML = (prezzoFinale.toFixed(2)) + "€";
// Fine Sezione trascrizione
