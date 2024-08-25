
//Definition for a singly-linked list
class ListNode {
     val:number;
     next: ListNode | null;
     constructor(val?:number, next?:ListNode | null){
         this.val = ( val === undefined ? 0 : val );
         this.next = ( next === undefined ? null : next );
     }
}

/** 
 * Inserting at the end of a linked-list (helper function)
 * @param {ListNode | null} head is the head of the list
 * @param {ListNode} newNode is the node to be inserted 
 * @returns {ListNode} returns the head of the list
 */

function insert(head:ListNode | null,newNode:ListNode){
    if(head === null){
        head = newNode;
        return head;
    }
    let temp:ListNode | null = head;
    //Getting to the last Node
    while(temp.next !== null){
        temp = temp?.next;
    }
    temp.next = newNode;
    return head;
}

function mergeTwoLists(list1:ListNode | null,list2:ListNode | null){
    //head of the list
    let res:ListNode | null = null;
    // base cases
    if(list1 === null){
        return list2;
    }
    else if(list2 === null){
        return list1;
    }
    else {
        while(list1 !== null && list2 !== null){
            if(list1.val > list2.val){
                res = insert(res,new ListNode(list2.val));
                list2 = list2.next;
                // pointer to the list becomes null then add 
                // the other list 
                if(list2 === null){
                    res = insert(res,list1);
                }
            } else {
                res = insert(res,new ListNode(list1.val));
                list1 = list1.next;
                if(list1 === null){
                    res = insert(res,list2);
                }
            }
        }
    }
    return res;
}