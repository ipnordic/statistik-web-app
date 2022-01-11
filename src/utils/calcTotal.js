export const totalCalls = (data) => {
  const numbers =
    data &&
    data
      .filter(
        (item) => item.QueueExtension >= 151210 && item.QueueExtension < 151265
      )
      .map((item) => item.Calls);
  const sumNumbers =
    numbers &&
    numbers.reduce(function (sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);
  return sumNumbers;
};

export const totalAnsweredCalls = (data) => {
  const answeredNumbers =
    data &&
    data
      .filter(
        (item) => item.QueueExtension >= 151210 && item.QueueExtension < 151265
      )
      .map((item) => item.AnsweredCalls);
  const sumAnsweredNumbers =
    answeredNumbers &&
    answeredNumbers.reduce(function (sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);

  return sumAnsweredNumbers;
};

export const totalTransfers = (data) => {
  const transferedNumbers =
    data &&
    data
      .filter(
        (item) => item.QueueExtension >= 151210 && item.QueueExtension < 151265
      )
      .map((item) => item.Transfers);
  const sumTransferedNumbers =
    transferedNumbers &&
    transferedNumbers.reduce(function (sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);

  return sumTransferedNumbers;
};

export const totalAbandoned = (data) => {
  const abandonedNumbers =
    data &&
    data
      .filter(
        (item) => item.QueueExtension >= 151210 && item.QueueExtension < 151265
      )
      .map((item) => item.Abandoned);
  const sumAbandonedNumbers =
    abandonedNumbers &&
    abandonedNumbers.reduce(function (sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);

  return sumAbandonedNumbers;
};

export const totalTimeOut = (data) => {
  const timeOutNumbers =
    data &&
    data
      .filter(
        (item) => item.QueueExtension >= 151210 && item.QueueExtension < 151265
      )
      .map((item) => item.TimeOut);
  const sumTimeOutNumbers =
    timeOutNumbers &&
    timeOutNumbers.reduce(function (sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);

  return sumTimeOutNumbers;
};

export const totalExitempty = (data) => {
  const exitEmptyNumber =
    data &&
    data
      .filter(
        (item) => item.QueueExtension >= 151210 && item.QueueExtension < 151265
      )
      .map((item) => item.Exitempty);
  const sumExitemptyNumbers =
    exitEmptyNumber &&
    exitEmptyNumber.reduce(function (sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);

  return sumExitemptyNumbers;
};
