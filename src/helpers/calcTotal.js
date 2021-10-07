export const totalCalls = (data) => {
  const numbers = data && data.map((item) => item.Calls);
  const sumNumbers =
    numbers &&
    numbers.reduce(function (sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    });
  return sumNumbers;
};

export const totalAnsweredCalls = (data) => {
  const answeredNumbers = data && data.map((item) => item.AnsweredCalls);
  const sumAnsweredNumbers =
    answeredNumbers &&
    answeredNumbers.reduce(function (sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    });

  return sumAnsweredNumbers;
};

export const totalTransfers = (data) => {
  const transferedNumbers = data && data.map((item) => item.Transfers);
  const sumTransferedNumbers =
    transferedNumbers &&
    transferedNumbers.reduce(function (sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    });

  return sumTransferedNumbers;
};

export const totalAbandoned = (data) => {
  const abandonedNumbers = data && data.map((item) => item.Abandoned);
  const sumAbandonedNumbers =
    abandonedNumbers &&
    abandonedNumbers.reduce(function (sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    });

  return sumAbandonedNumbers;
};
