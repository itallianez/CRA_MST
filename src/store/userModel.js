import { types } from "mobx-state-tree";

const UserModel = types
  .model("UserModel", {
    id: types.number,
		name: types.string,
		username: types.string,
		email: types.string,
  }
  );

export default UserModel;