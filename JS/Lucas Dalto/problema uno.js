dineroRoberto = prompt(`Cuanto dinero tienes Roberto?`);
dineroPedro = prompt(`Cuanto dinero tienes Pedro?`);
dineroCoflan = prompt(`Cuanto dinro tienes Coflan?`);



/* ==========================================================
                      Dinero Roberto
=========================================================== */
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
  alert(
    `Hola Roberto el helado que puedes comprarte es el "Palito de helado de agua"`
  );
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
  alert(
    `Hola Roberto el helado que puedes comprarte es el "Palito de helado de crema"`
  );
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  alert(
    `Hola Rooberto el helado que puedes comprarte es el "Bombón helado marca heladix"`
  );
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  alert(
    `Hola Roberto el helado que puedes comprarte es el "Bombón helado marca heladovich"`
  );
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  alert(
    `Hola Roberto el helado que puedes comprarte es el Bombón Helado marca helardo"`
  );
} else if (dineroRoberto >= 2.9) {
  alert(
    `Hola Roberto los helados que puedes comprarte es el "Potecito de healdo con confites" o "pote de 1/4 KG"`
  );
} else {
  alert(
    `Hola Roberto no cuentas con dinero suficiente para comprar un helado!`
  );
}

/* ==========================================================
                      Dinero Pedro
=========================================================== */
if (dineroPedro >= 0.6 && dineroPedro < 1) {
  alert(
    `Hola Pedro el helado que puedes comprarte es el "Palito de helado de agua"`
  );
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  alert(
    `Hola Pedro el helado que puedes comprarte es el "Palito de helado de crema"`
  );
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
  alert(
    `Hola Rooberto el helado que puedes comprarte es el "Bombón helado marca heladix"`
  );
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
  alert(
    `Hola Pedro el helado que puedes comprarte es el "Bombón helado marca heladovich"`
  );
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  alert(
    `Hola Pedro el helado que puedes comprarte es el Bombón Helado marca helardo"`
  );
} else if (dineroPedro >= 2.9) {
  alert(
    `Hola Pedro los helados que puedes comprarte es el "Potecito de healdo con confites" o "pote de 1/4 KG"`
  );
} else {
  alert(`Hola Pedro no cuentas con dinero suficiente para comprar un helado!`);
}

/* ==========================================================
                      Dinero Coflan
=========================================================== */
if (dineroCoflan >= 0.6 && dineroCoflan < 1) {
  alert(
    `Hola Coflan el helado que puedes comprarte es el "Palito de helado de agua"`
  );
  vuelto = dineroCoflan - 0.6;
  alert(`Tu vuelto sería $${vuelto} USD`);
} else if (dineroCoflan >= 1 && dineroCoflan < 1.6) {
  alert(
    `Hola Coflan el helado que puedes comprarte es el "Palito de helado de crema"`
  );
  vuelto = dineroCoflan - 1;
  alert(`Tu vuelto sería $${vuelto} USD`);
} else if (dineroCoflan >= 1.6 && dineroCoflan < 1.7) {
  alert(
    `Hola Rooberto el helado que puedes comprarte es el "Bombón helado marca heladix"`
  );
  vuelto = dineroCoflan - 1.6;
  alert(`Tu vuelto sería $${vuelto} USD`);
} else if (dineroCoflan >= 1.7 && dineroCoflan < 1.8) {
  alert(
    `Hola Coflan el helado que puedes comprarte es el "Bombón helado marca heladovich"`
  );
  vuelto = dineroCoflan - 1.7;
  alert(`Tu vuelto sería $${vuelto} USD`);
} else if (dineroCoflan >= 1.8 && dineroCoflan < 2.9) {
  alert(
    `Hola Coflan el helado que puedes comprarte es el Bombón Helado marca helardo"`
  );
  vuelto = dineroCoflan - 1.8;
  alert(`Tu vuelto sería $${vuelto} USD`);
} else if (dineroCoflan >= 2.9) {
  alert(
    `Hola Coflan los helados que puedes comprarte es el "Potecito de healdo con confites" o "pote de 1/4 KG"`
  );
  vuelto = dineroCoflan - 2.9;
  alert(`Tu vuelto sería $${vuelto} USD`);
} else {
  alert(`Hola Coflan no cuentas con dinero suficiente para comprar un helado!`);
}
