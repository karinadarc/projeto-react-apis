export const goToHome = (navigate) =>{
    navigate('/')
}


export const goToPokedex = (navigate,name) =>{
    navigate(`/pokemon/${name}`)
}

export const goToDetail = (navigate) =>{
    navigate(`/detail`)
}