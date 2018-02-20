import {
    ADD_NODES,
    ADD_LINKS,
    SELECT_NODE,
    DESELECT_NODE
} from './graph.actions';
import { Observable } from 'rxjs/Observable';
import { Node } from '../domain/Node';

const initialState = {
	nodes: [],
	links: [],
	selectedNode: null,
	searchValue: ''
};

export const graphReducer = (state = initialState, action) => {
	switch (action.type) {
        case ADD_NODES:
            return {...state, nodes: action.payload};
        case ADD_LINKS:
            return {...state, links: action.payload};
        case SELECT_NODE:
            return {...state, selectedNode: action.payload.id};
        case DESELECT_NODE:
            return {...state, selectedNode: null};
		default:
			return state;
	}
};