
export const fetchPolls = () => {
    return (dispatch) => {
        fetch('https://stormy-ridge-71833.herokuapp.com/polls')
        .then(resp => resp.json())
        .then(polls => dispatch({ type: 'FETCH_POLLS', payload: polls}))
    }
}

export const addPoll = poll => {
    return dispatch =>{ 
    fetch('https://stormy-ridge-71833.herokuapp.com/polls', {
        method: 'POST', 
        body: JSON.stringify(poll),
        headers: { 'content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(poll => dispatch({ type: 'ADD_POLL',payload: poll }))
    }
}

export const deletePoll = pollId => {
    return dispatch =>{ 
    fetch(`https://stormy-ridge-71833.herokuapp.com/polls/${pollId}`, {
        method: 'DELETE', 
    })
    dispatch({ type: 'DELETE_POLL',payload: pollId })
    }
}

export const editPoll = poll => {
    return dispatch =>{ 
    fetch(`https://stormy-ridge-71833.herokuapp.com/polls/${poll.id}`, {
        method: 'PATCH', 
        body: JSON.stringify(poll),
        headers: { 'content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(poll => dispatch({ type: 'EDIT_POLL',payload: poll }))
    }
}