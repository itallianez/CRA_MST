import { types } from "mobx-state-tree";
import UserModel from "./userModel";

const RootStore = types
	.model("RootStore", {
		users: types.array(UserModel),
		isModal: types.boolean,
	})
	.actions(self => ({
		updateUser(user) {
			self.users = self.users.map(item => {
				if(item.id === user.id){
					return user
				}
				return item
			});
		},
		addUser(user){
			self.users.push(user);
		},
		deleteUser(id){
			self.users = self.users.filter(item => item.id !== id);
		},
		openModal(){
			self.isModal = true
		},
		closeModal() {
			self.isModal = false
		}
	}));

	
export default RootStore;