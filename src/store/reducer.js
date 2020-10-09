const initialState = {
    count:24,
    question:{
        answer1:{
            mostValue:3,
            leastValue:1,
            question:["Gentle", "Persuasive", "Humble", "Original"]
        },
        answer2:{
            mostValue:2,
            leastValue:1,
            question:["Charming", "Co-operative", "Stubborn", "Sweet"]
        },
        answer3:{
            mostValue:3,
            leastValue:1,
            question:["Easily led", "Bold", "Loyal", "Charming"]
        },
        answer4:{
            mostValue:2,
            leastValue:1,
            question:["Open-minded", "Helpful", "Strong-willed", "Cheerful"]
        },
        answer5:{
            mostValue:3,
            leastValue:2,
            question:["Jovial", "Precise", "Gutsy", "Calm"]
        },
        answer6:{
            mostValue:2,
            leastValue:1,
            question:["Competitive", "Considerate", "Outgoing", "Agreeable"]
        },
        answer7:{
            mostValue:3,
            leastValue:2,
            question:["Fussy", "Obedient", "Determined", "Playful"]
        },
        answer8:{
            mostValue:2,
            leastValue:1,
            question:["Brave", "Inspiring", "Submissive", "Timid"]
        },
        answer9:{
            mostValue:3,
            leastValue:1,
            question:["Sociable", "Patient", "Independent", "Soft-spoken"]
        },
        answer10:{
            mostValue:3,
            leastValue:4,
            question:["Adventurous", "Receptive", "Warm", "Moderate"]
        },
        answer11:{
            mostValue:3,
            leastValue:2,
            question:["Talkative", "Controlled", "Customary", "Decisive"]
        },
        answer12:{
            mostValue:1,
            leastValue:3,
            question:["Polished", "Daring", "Diplomatic", "Satisfied"]
        },
        answer13:{
            mostValue:4,
            leastValue:2,
            question:["Aggressive", "Entertaining", "Easy mark", "Fearful"]
        },
        answer14:{
            mostValue:3,
            leastValue:1,
            question:["Cautious", "Decided", "Convincing", "Pleasant"]
        },
        answer15:{
            mostValue:3,
            leastValue:2,
            question:["Willing", "Eager", "Agreeable", "Enthusiastic"]
        },
        answer16:{
            mostValue:3,
            leastValue:1,
            question:["Confident", "Compassionate", "Tolerant", "Assertive"]
        },
        answer17:{
            mostValue:3,
            leastValue:4,
            question:["Well-disciplined", "Generous", "Animated", "Persistent"]
        },
        answer18:{
            mostValue:2,
            leastValue:4,
            question:["Admirable", "Kind", "Resigned", "Force of character"]
        },
        answer19:{
            mostValue:2,
            leastValue:4,
            question:["Respectful", "Enterprising", "Optimistic", "Willing to please"]
        },
        answer20:{
            mostValue:1,
            leastValue:4,
            question:["Argumentative", "Flexible", "Nonchalant", "Carefree"]
        },
        answer21:{
            mostValue:2,
            leastValue:4,
            question:["Trusting", "Contented", "Positive", "Peaceful"]
        },
        answer22:{
            mostValue:2,
            leastValue:4,
            question:["Good mixer", "Cultured", "Vigorous", "Lenient"]
        },
        answer23:{
            mostValue:3,
            leastValue:2,
            question:["Companionable", "Accurate", "Outspoken", "Restrained"]
        },
        answer24:{
            mostValue:2,
            leastValue:2,
            question:["Restless", "Neighbourly", "Popular", "Orderly"]
        }
    },
    result:{
        leastData:{},
        mostData:{},
        result:""
    }
}



const reducer = (state = initialState, action) => {

    if(action.type === 'SUB_COUNT'){
        return{
            ...state, 
            count:state.count - 1
        }
    }

    if(action.type === 'ADD_COUNT'){
        return{
            ...state, 
            count:state.count + 1
        }
    }

    if(action.type === 'UPDATE_ANSWERS'){
        const newObj = {
            ...state.question,
            [action.key]:action.obj
        };
        
        
        return{
            ...state,
            question:newObj
        }
    }

    if(action.type === 'SUBMIT_RESULTS'){
        return{
            ...state,
            result:action.data
        }
    }

    return state;
}

export default reducer;