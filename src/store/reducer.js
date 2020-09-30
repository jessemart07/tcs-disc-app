const initialState = {
    count:1,
    question:{
        answer1:{
            mostValue:'',
            leastValue:'',
            question:["Gentle", "Persuasive", "Humble", "Original"]
        },
        answer2:{
            mostValue:'',
            leastValue:'',
            question:["Charming", "Co-operative", "Stubborn", "Sweet"]
        },
        answer3:{
            mostValue:'',
            leastValue:'',
            question:["Easily led", "Bold", "Loyal", "Charming"]
        },
        answer4:{
            mostValue:'',
            leastValue:'',
            question:["Open-minded", "Helpful", "Strong-willed", "Cheerful"]
        },
        answer5:{
            mostValue:'',
            leastValue:'',
            question:["Jovial", "Precise", "Gutsy", "Calm"]
        },
        answer6:{
            mostValue:'',
            leastValue:'',
            question:["Competitive", "Considerate", "Outgoing", "Agreeable"]
        },
        answer7:{
            mostValue:'',
            leastValue:'',
            question:["Fussy", "Obedient", "Determined", "Playful"]
        },
        answer8:{
            mostValue:'',
            leastValue:'',
            question:["Brave", "Inspiring", "Submissive", "Timid"]
        },
        answer9:{
            mostValue:'',
            leastValue:'',
            question:["Sociable", "Patient", "Independent", "Soft-spoken"]
        },
        answer10:{
            mostValue:'',
            leastValue:'',
            question:["Adventurous", "Receptive", "Warm", "Moderate"]
        },
        answer11:{
            mostValue:'',
            leastValue:'',
            question:["Talkative", "Controlled", "Customary", "Decisive"]
        },
        answer12:{
            mostValue:'',
            leastValue:'',
            question:["Polished", "Daring", "Diplomatic", "Satisfied"]
        },
        answer13:{
            mostValue:'',
            leastValue:'',
            question:["Aggressive", "Entertaining", "Easy mark", "Fearful"]
        },
        answer14:{
            mostValue:'',
            leastValue:'',
            question:["Cautious", "Decided", "Convincing", "Pleasant"]
        },
        answer15:{
            mostValue:'',
            leastValue:'',
            question:["Willing", "Eager", "Agreeable", "Enthusiastic"]
        },
        answer16:{
            mostValue:'',
            leastValue:'',
            question:["Confident", "Compassionate", "Tolerant", "Assertive"]
        },
        answer17:{
            mostValue:'',
            leastValue:'',
            question:["Well-disciplined", "Generous", "Animated", "Persistent"]
        },
        answer18:{
            mostValue:'',
            leastValue:'',
            question:["Admirable", "Kind", "Resigned", "Force of character"]
        },
        answer19:{
            mostValue:'',
            leastValue:'',
            question:["Respectful", "Enterprising", "Optimistic", "Willing to please"]
        },
        answer20:{
            mostValue:'',
            leastValue:'',
            question:["Argumentative", "Flexible", "Nonchalant", "Carefree"]
        },
        answer21:{
            mostValue:'',
            leastValue:'',
            question:["Trusting", "Contented", "Positive", "Peaceful"]
        },
        answer22:{
            mostValue:'',
            leastValue:'',
            question:["Good mixer", "Cultured", "Vigorous", "Lenient"]
        },
        answer23:{
            mostValue:'',
            leastValue:'',
            question:["Companionable", "Accurate", "Outspoken", "Restrained"]
        },
        answer24:{
            mostValue:'',
            leastValue:'',
            question:["Restless", "Neighbourly", "Popular", "Orderly"]
        }
    }
}

const reducer = (state = initialState, action) => {

    if(action.type === 'SUB_COUNT'){
        console.log(state.question);
        return{
            ...state, 
            count:state.count - 1
        }
    }
    if(action.type === 'ADD_COUNT'){
        console.log(state.question);
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

    return state;
}

export default reducer;