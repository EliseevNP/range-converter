async function convert(array) {
  let result = '';
  if (array.length >= 3) {
    // take first element
    const first = array[0];

    // take last element
    const last = array[array.length - 1];

    // [1,2,3,5] => [*,3]
    array = array.slice(1, -1).map((element, index) => {
      if ((array[index] + 1 === element) && (element + 1 === array[index + 2]))
        return '*';
      return element;
    });

    // return first element to array
    array.unshift(first);

    // return last element to array
    array.push(last);

    // [1,*,3,5] => '1,*,3,5' => '1-3,5'
    result = array.join().replace(/(,\*)+/g, "-").replace(/(-,)/g, "-");
  } else {
    result = array.join();
  }
  return result;
}

module.exports = convert;