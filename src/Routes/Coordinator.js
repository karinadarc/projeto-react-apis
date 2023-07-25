export const goToHome = (navigate) =>{
    navigate('/')
}


export const goToPokedex = (navigate,name) =>{
    navigate(`/${name}`)
}

export const goToDetail = (navigate) =>{
    navigate(`/detail`)
}