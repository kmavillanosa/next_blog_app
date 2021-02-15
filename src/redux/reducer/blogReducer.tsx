import { BlogPosts } from "../models/BlogPosts";
import { AnyAction } from "redux";
import { Actions } from "../actions/actiontypes";

import { HYDRATE } from "next-redux-wrapper";

export const blogReducer = (
  state: BlogPosts = {
    blogs: [],
  },
  action: AnyAction
) => {
  var copystate = Object.assign({}, state);

  switch (action.type) {
    case HYDRATE:
      if (action.payload.app === "init") delete action.payload.app;
      if (action.payload.page === "init") delete action.payload.page;
      return copystate;

    case Actions.ADD_BLOG:
      return copystate;

    case Actions.DELETE_BLOG:
      return copystate;

    default:
      return state;
  }
};
