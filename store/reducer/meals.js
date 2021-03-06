import { MEALS } from '../../data/dummydata'
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals'

const initalState = {
    meals: MEALS,
    filteredMeals:MEALS,
    favoriteMeals:[]
}

const mealsReducer = (state=initalState,action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id == action.meal.Id)
            if (existingIndex >= 0 ) {
                const updatedFavMeals = [...state.favoriteMeals]
                updatedFavMeals.splice(existingIndex, 1)
                return { ...state, favoriteMeals: updatedFavMeals}
            } else {
                const meal = state.meals.find(meal => meal.id == action.mealId)
                return {...state, favoriteMeals:state.favoriteMeals.concat(meal)}
            }
            case SET_FILTERS:
                const appliedFilters = action.filters
                const updatedFilteredMeals = state.meals.filter(meal => {
                    if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                        return false
                    }
                    if (appliedFilters.lactoseFree && !meal.islactoseFree) {
                        return false
                    }
                    if (appliedFilters.vegetarian && !meal.isvegetarian) {
                        return false
                    }
                    if (appliedFilters.vegan && !meal.isvegan) {
                        return false
                    }
                    return true
                })
                return { ...state, filteredMeals: updatedFilteredMeals }
            default:
                return state 
    }
}

export default mealsReducer