const { discover_the_train_tickets } = require('./helpers')

function sort_tickets(the_evidence) {

    // code your sorting function here and return the sorted tickets
    const the_goods = the_evidence
    return the_goods
}

const ticket_count = 50

// this is the controling function that calls the 
function crack_the_case() {
    const the_evidence = discover_the_train_tickets(ticket_count)
    const the_goods = sort_tickets(the_evidence)
    console.log(the_goods)
}

crack_the_case()

