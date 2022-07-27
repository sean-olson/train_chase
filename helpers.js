function normalize_count(count){
    return Number.isNaN(Number.parseInt(count)) || Math.floor(count) > 50  || Math.floor(count) < 2 ? 10 : Math.floor(count)
}

function purchase_tickets(count = 10) {
    const ticket_count = normalize_count(count)
    const cities = require('./cities')()
    const tickets = [] 
    let city_ix = Math.floor(Math.random() * cities.length)

    while (tickets.length < ticket_count) {
        const ticket = {}
        ticket['from'] = cities[city_ix]
        cities.splice(city_ix, 1)
        city_ix = Math.floor(Math.random() * cities.length)
        ticket['to'] = cities[city_ix]
        tickets.push(ticket)
    }  
    
    return tickets
}

function discover_the_train_tickets(count) {
    const ticket_count = normalize_count(count)
    const trip_tickets = purchase_tickets(normalize_count(ticket_count))

    const evidence = []
    let ticket_ix
    
    while(trip_tickets.length > 0) {
        let ticket_ix = Math.ceil(Math.random() * trip_tickets.length - 1)
        evidence.push(trip_tickets[ticket_ix])
        trip_tickets.splice(ticket_ix, 1)
    }
    
    return evidence
}

function calculate_randomness(ticket_stack) {
    if(!Array.isArray(ticket_stack) || ticket_stack.length < 2){
        return 0
    }
    let random_count = 0
    let ix = 0

    while(typeof ticket_stack[ix + 1] !== 'undefined'){
        if(ticket_stack[ix]['to'].toLowerCase() !== ticket_stack[ix + 1]['from'].toLowerCase()){
            random_count++
        }
         ix++
    }
    return Math.round(random_count / (ticket_stack.length - 1) * 100)
}

module.exports = {
    normalize_count,
    purchase_tickets,
    discover_the_train_tickets,
    calculate_randomness,
}