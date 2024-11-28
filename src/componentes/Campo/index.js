import './Campo.css'

const Campo = (props) =>{


    const aoDigitado = (event) =>{
        props.aoAlterado(event.target.value)
       
    }

    return(
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type={props.type || 'text'} 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={props.placeholder} 
            />
        </div>
    )

}

export default Campo