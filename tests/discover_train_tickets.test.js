const { normalize_count,
    purchase_tickets,
    discover_the_train_tickets,
    calculate_randomness } = require('../helpers.js')

it('should return ordered tickets', () => {
    const tickets = purchase_tickets(50)
    expect(tickets.length).toEqual(50)

    const randomness = calculate_randomness(tickets)
    expect(randomness).toEqual(0)
}) 

it('should return unstorted tickets with some degree of randomness', () => {
    let randomness = calculate_randomness()
    expect(randomness).toEqual(0)

    randomness = calculate_randomness([{from: 'hello', to: 'world'}])
    expect(randomness).toEqual(0)    

    let ticket_stack = discover_the_train_tickets(50)
    randomness = calculate_randomness(ticket_stack)
    expect(Number.isNaN(randomness)).toBe(false)
    expect(randomness).toBeGreaterThan(0)
})

it('should return the correct normailized count', () => {
    let normalized_count = normalize_count()
    expect(normalized_count).toEqual(10)

    normalized_count = normalize_count('abc')
    expect(normalized_count).toEqual(10)

    normalized_count = normalize_count(-1)
    expect(normalized_count).toEqual(10) 
    
    normalized_count = normalize_count(51)
    expect(normalized_count).toEqual(10) 
    
    normalized_count = normalize_count(10)
    expect(normalized_count).toEqual(10) 
    
    normalized_count = normalize_count(20)
    expect(normalized_count).toEqual(20) 
    
    normalized_count = normalize_count(30)
    expect(normalized_count).toEqual(30) 
    
    normalized_count = normalize_count(40)
    expect(normalized_count).toEqual(40) 
    
    normalized_count = normalize_count(50)
    expect(normalized_count).toEqual(50)     
})    

it('should return the default number of tickets, 10', () => {
    let default_ticket_stack = discover_the_train_tickets()
    expect(default_ticket_stack.length).toEqual(10)

    default_ticket_stack = discover_the_train_tickets('abc')
    expect(default_ticket_stack.length).toEqual(10)

    default_ticket_stack = discover_the_train_tickets(-1)
    expect(default_ticket_stack.length).toEqual(10) 
    
    default_ticket_stack = discover_the_train_tickets(51)
    expect(default_ticket_stack.length).toEqual(10)    
})

it('should return a specified number of tickets between 2 and 20', () => {
    let ticket_stack = discover_the_train_tickets(2)
    expect(ticket_stack.length).toEqual(2)

    ticket_stack = discover_the_train_tickets(10)
    expect(ticket_stack.length).toEqual(10)

    ticket_stack = discover_the_train_tickets(30)
    expect(ticket_stack.length).toEqual(30) 
    
    ticket_stack = discover_the_train_tickets(50)
    expect(ticket_stack.length).toEqual(50)  
})
