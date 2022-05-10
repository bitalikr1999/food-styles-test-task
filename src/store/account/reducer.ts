import { Store } from '@/typing/interfaces'
import { createReducer } from '@bitalikrty/redux-create-reducer'
import { AccountActions } from './actions'

const initialState: Store.States.Account = {
	info: {
		data: null,
		isLoading: true,
	},
}

export const accountReducer = createReducer<
	Store.States.Account,
	AccountActions
>(initialState, {
	SET_ACCOUNT: (state, { payload }) => {
		return {
			...state,
			info: {
				data: payload,
				isLoading: false,
			},
		}
	},
})
