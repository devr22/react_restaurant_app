import { COMMENTS } from "../shared/comments";

export const Comments = (State = COMMENTS, action) => {
    switch(action.type) {
        default:
            return State;
    }
}