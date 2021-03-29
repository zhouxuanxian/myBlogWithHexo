/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const header = new ListNode(null);
    let tempNode = header;
    tempNode.next = new ListNode(1);
    tempNode = tempNode.next = new ListNode(2);
    console.log(tempNode);
    return header;
};

function ListNode(val) {
    this.val = val;
    this.next = null;


}

function main(){

    const header = new ListNode(2);
    const middle = new ListNode(4);
    const tail = new ListNode(3);
    header.next = middle;
    middle.next = tail;

    const header1 = new ListNode(5);
    const middle1 = new ListNode(6);
    const tail1 = new ListNode(4);
    header1.next = middle1;
    middle1.next = tail1;

    console.log(addTwoNumbers(header, header1));
}

main();