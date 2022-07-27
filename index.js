const { discover_the_train_tickets } = require('./helpers')

function sort_tickets(the_evidence) {
    /* 
      Code your sorting function here and return the sorted tickets.
      By default it returns the unsorted stack.
    */
    const the_goods = the_evidence
    return the_goods
}


/* 
  This variable determines the number of hops in the trip, 
  or tickets in the stack.  It can range from 2 to 50. 
*/
const ticket_count = 50

/* 
  This is the controling function that calls the sort function.
  By default it logs the stack return from sort function to the console.
  Make any changes you feel necessary.
*/
function crack_the_case() {
    const the_evidence = discover_the_train_tickets(ticket_count)
    const the_goods = sort_tickets(the_evidence)
    console.log(the_goods)
}

crack_the_case()
