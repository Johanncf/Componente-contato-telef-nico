import './style.css'

export default function Contato({ foto, nome, descricao }) {
    return (
        <div className='contact_container'>
            <div className='contact_photo-border'>
                <div className='contact_photo' style={{ backgroundImage: `url(${foto})` }}></div>
            </div>
            <div className='contact_infos'>
                <h4 className='name'>{nome}</h4>
                <p className='description'>{descricao}</p>
            </div>
            <span className='status'></span>
        </div>
    )
}