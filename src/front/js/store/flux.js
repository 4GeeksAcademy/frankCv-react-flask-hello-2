const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			register: async(data)=>{
				try{
					const resp = await fetch("https://stunning-cod-rvxjvjvxwg63p5px-3001.app.github.dev/api/register",{
						method: 'POST',
						body: JSON.stringify(data),
						headers: {
							"Content-Type":"application/json"
						}
					})
					if (resp.status===201){
						const data = await resp.json()
						console.log(data)
					} else{
						console.log("wrong fetch register")
						return null
					}
				}catch(e){
					console.error(e)
				}
			},
			login: async(data)=>{
				try{
					const resp = await fetch("https://stunning-cod-rvxjvjvxwg63p5px-3001.app.github.dev/api/login",{
						method: 'POST',
						body: JSON.stringify(data),
						headers: {
							"Content-Type":"application/json"
						}
					})
					if (resp.status===200){
						const data = await resp.json()
						console.log(data.token)
						localStorage.setItem("token",data.token)
					} else{
						console.log("wrong fetch register")
						return null
					}
				}catch(e){
					console.error(e)
				}
			}
		}
	};
};

export default getState;
