const hasCycle = function(head) {
    let s = head
    let f = head.next;
    console.log(f)
    while(f && f.next) {
          if(f.val === s.val) {
                return true 
          }
    }
    
    return false
};

console.log(hasCycle([3,2,0,-4])) 