const { LinkedList, _Node } = require('./LinkedList');

const getListSize = list => {
  let counter = 0;
  let tempNode = list.head;
  while (tempNode !== null) {
    counter++;
    tempNode = tempNode.next;
  }
  return counter;
};

const mSortLL = list => {
  const listSize = getListSize(list);
  if (listSize <= 1) {
    // console.log('returning list '+list)
    return list;
  }
  const mid = Math.floor(listSize / 2);
  let leftList = new LinkedList();
  let rightList = new LinkedList();
  let tempNode = list.head;
  for (let i = 0; i < mid; i++) {
    leftList.insertLast(tempNode.value);
    tempNode = tempNode.next;
  }
  rightList.head = tempNode;
  // console.log('before mSort left is '+leftList)
  leftList = mSortLL(leftList);
  // console.log('after mSort left is '+leftList)
  // console.log('before mSort right is '+rightList)
  rightList = mSortLL(rightList);
  // console.log('after mSort right is '+rightList)
  return mergeLL(leftList, rightList);
};

const mergeLL = (left, right) => {
  let leftNode = left.head;
  let rightNode = right.head;
  let mergedList = new LinkedList();
  if (leftNode.value <= rightNode.value) {
    mergedList.insertFirst(leftNode.value);
    leftNode = leftNode.next;
  } else {
    mergedList.insertFirst(rightNode.value);
    rightNode = rightNode.next;
  }
  let mergedNode = mergedList.head;
  while (leftNode && rightNode) {
    if (leftNode.value <= rightNode.value) {
      mergedList.insertLast(leftNode.value);
      mergedNode = mergedNode.next;
      leftNode = leftNode.next;
    } else if (rightNode.value < leftNode.value) {
      mergedList.insertLast(rightNode.value);
      mergedNode = mergedNode.next;
      rightNode = rightNode.next;
    } else console.log('oops');
  }
  while (leftNode) {
    mergedList.insertLast(leftNode.value);
    mergedNode = mergedNode.next;
    leftNode = leftNode.next;
  }
  while (rightNode) {
    mergedList.insertLast(rightNode.value);
    mergedNode = mergedNode.next;
    rightNode = rightNode.next;
  }
  return mergedList;
};
