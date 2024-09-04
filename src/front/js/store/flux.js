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
			],
			userList:[],
			isLoged:false
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
					});
					if (resp.status===201){
						const data = await resp.json();
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
						const data = await resp.json();
						console.log(data.token,data.email)
						localStorage.setItem("token",data.token)
						localStorage.setItem("email",data.email)
					} else{
						console.log("wrong fetch register")
						return null
					}
				}catch(e){
					console.error(e)
				}
			},
			restricted_list: async()=>{
				let token = localStorage.getItem('token');
				if (!token){
					alert("not logged")
					return
				}
				try{
					const resp = await fetch("https://stunning-cod-rvxjvjvxwg63p5px-3001.app.github.dev/api/users",{
							headers:{
								Authorization: `Bearer ${token}`
							}				
					});
					if(resp.status===200){
						const data = await resp.json();
						if (data.user_list){
							setStore({...getStore,"userList": data.user_list});
						}
					} else {
						return
					}
				} catch(e){
					console.error(e);
				}
			},
			logoutHandler: ()=>{
				setStore({...getStore,"userList":[]})
			}
		}
	};
};

export default getState;
