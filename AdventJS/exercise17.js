function countPackages(carriers, carrierID) {
  const carrier = carriers.filter((carrier) => carrier[0] === carrierID)[0];
  return carrier[2].reduce((packages, subCarrier) => {
    return packages + countPackages(carriers, subCarrier);
  }, carrier[1]);
}
