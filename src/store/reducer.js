const initialState = {
    count:1,
    question:{
        answer1:{
            mostValue:0,
            leastValue:0,
            question:["Gentle", "Persuasive", "Humble", "Original"]
        },
        answer2:{
            mostValue:0,
            leastValue:0,
            question:["Charming", "Co-operative", "Stubborn", "Sweet"]
        },
        answer3:{
            mostValue:0,
            leastValue:0,
            question:["Easily led", "Bold", "Loyal", "Charming"]
        },
        answer4:{
            mostValue:0,
            leastValue:0,
            question:["Open-minded", "Helpful", "Strong-willed", "Cheerful"]
        },
        answer5:{
            mostValue:0,
            leastValue:0,
            question:["Jovial", "Precise", "Gutsy", "Calm"]
        },
        answer6:{
            mostValue:0,
            leastValue:0,
            question:["Competitive", "Considerate", "Outgoing", "Agreeable"]
        },
        answer7:{
            mostValue:0,
            leastValue:0,
            question:["Fussy", "Obedient", "Determined", "Playful"]
        },
        answer8:{
            mostValue:0,
            leastValue:0,
            question:["Brave", "Inspiring", "Submissive", "Timid"]
        },
        answer9:{
            mostValue:0,
            leastValue:0,
            question:["Sociable", "Patient", "Independent", "Soft-spoken"]
        },
        answer10:{
            mostValue:0,
            leastValue:0,
            question:["Adventurous", "Receptive", "Warm", "Moderate"]
        },
        answer11:{
            mostValue:0,
            leastValue:0,
            question:["Talkative", "Controlled", "Customary", "Decisive"]
        },
        answer12:{
            mostValue:0,
            leastValue:0,
            question:["Polished", "Daring", "Diplomatic", "Satisfied"]
        },
        answer13:{
            mostValue:0,
            leastValue:0,
            question:["Aggressive", "Entertaining", "Easy mark", "Fearful"]
        },
        answer14:{
            mostValue:0,
            leastValue:0,
            question:["Cautious", "Decided", "Convincing", "Pleasant"]
        },
        answer15:{
            mostValue:0,
            leastValue:0,
            question:["Willing", "Eager", "Agreeable", "Enthusiastic"]
        },
        answer16:{
            mostValue:0,
            leastValue:0,
            question:["Confident", "Compassionate", "Tolerant", "Assertive"]
        },
        answer17:{
            mostValue:0,
            leastValue:0,
            question:["Well-disciplined", "Generous", "Animated", "Persistent"]
        },
        answer18:{
            mostValue:0,
            leastValue:0,
            question:["Admirable", "Kind", "Resigned", "Force of character"]
        },
        answer19:{
            mostValue:0,
            leastValue:0,
            question:["Respectful", "Enterprising", "Optimistic", "Willing to please"]
        },
        answer20:{
            mostValue:0,
            leastValue:0,
            question:["Argumentative", "Flexible", "Nonchalant", "Carefree"]
        },
        answer21:{
            mostValue:0,
            leastValue:0,
            question:["Trusting", "Contented", "Positive", "Peaceful"]
        },
        answer22:{
            mostValue:0,
            leastValue:0,
            question:["Good mixer", "Cultured", "Vigorous", "Lenient"]
        },
        answer23:{
            mostValue:0,
            leastValue:0,
            question:["Companionable", "Accurate", "Outspoken", "Restrained"]
        },
        answer24:{
            mostValue:0,
            leastValue:0,
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