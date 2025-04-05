/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const mediumTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= 7) {
    return days * dailyRate - longTermDiscount;
  } else if (days >= 3) {
    return days * dailyRate - mediumTermDiscount;
  } else {
    return days * dailyRate;
  }
}

module.exports = calculateRentalCost;
