import { MEALS } from '../../data/dummydata'

const initalState = {
    meals: MEALS,
    filteredMeals:MEALS,
    favoriteMeals:[]
}

const mealsReducer = (state=initalState,action) => {
    return state
}

export default mealsReducer