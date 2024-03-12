import {ref} from 'vue'

const isAuthenticated = ref(false)
const currentUser = ref<{id: string, uuid: string} | null>(null)

const checkAuth = () => {
	const id = localStorage.getItem('id')
	const uuid = localStorage.getItem('uuid')
	if(id && uuid){
		isAuthenticated.value = true
		currentUser.value = {id, uuid}
	}
	else {
		isAuthenticated.value = false
		currentUser.value = null
	}
}

const logOut = () => {
	localStorage.removeItem('id')
	localStorage.removeItem('uuid')
	isAuthenticated.value = false
	currentUser.value = null
}

export { isAuthenticated, currentUser, checkAuth, logOut };