document.querySelector("#calculate").addEventListener("click", () => {
  console.log("tutal");
  const motionType = document.querySelector("input[type=radio]:checked");
  console.log(motionType);
  const v0 = parseFloat(document.querySelector("#v0")?.value ?? 0);
  const a = parseFloat(document.querySelector("#a")?.value ?? 0);
  const t = parseFloat(document.querySelector("#t")?.value ?? 0);
  switch (motionType.value) {
    case "przyspiezony":
      s = v0 * t + (a * t * t) / 2;
      break;
    case "opozniony":
      s = v0 * t - (a * t * t) / 2;
      break;
    case "prostoliniowy":
      s = v0 * t;
      break;
  }
});
