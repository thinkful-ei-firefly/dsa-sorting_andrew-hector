const { LinkedList, _Node } = require('./LinkedList');

function mergeSortLL(list) {
  //check if list is empty
  if (list.size() <= 1) {
    return list;
  }

  let left = new LinkedList();
  let right = new LinkedList();

  let leftCurrNode = null;
  for (let i = 0; i < Math.floor(list.size() / 2); i++) {
    if (i === 0) {
      leftCurrNode = list.head;
    }
    left.insertLast(leftCurrNode.value);
    leftCurrNode = leftCurrNode.next;
  }
  let rightCurrNode = null;
  for (let i = Math.floor(list.size() / 2); i < list.size(); i++) {
    if (i === Math.floor(list.size() / 2) + 1) {
      rightCurrNode = leftCurrNode;
    }
    right.insertLast(rightCurrNode.value);
    rightCurrNode = rightCurrNode.next;
  }
  return mergeLL(mergeSortLL(left), mergeSortLL(right));
}

function mergeLL(left, right) {
  let newLL = new LinkedList();
  let resultPtr = newLL.head;
  let leftPtr = left.head;
  let rightPtr = right.head;

  while (leftPtr && rightPtr) {
    let tempNode = null;
    if (leftPtr.value > rightPtr.value) {
      tempNode = rightPtr.value;
      rightPtr = rightPtr.next;
    } else {
      tempNode = leftPtr.value;
      leftPtr = leftPtr.next;
    }

    if (!newLL.head) {
      newLL.head = new _Node(tempNode, null);
      resultPtr = newLL.head;
    } else {
      resultPtr.next = new _Node(tempNode, null);
      resultPtr = newLL.head;
    }
  }
  resultPtr.next = leftPtr;
  while (resultPtr.next) {
    resultPtr = resultPtr.next;
    resultPtr.next = rightPtr;
  }
  return null;
}

const sortData = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91
];

console.log(mergeSortLL(sortData));
