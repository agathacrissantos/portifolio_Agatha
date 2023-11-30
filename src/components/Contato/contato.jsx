import * as S from "./contato.style"

export default function Contato() {

    return (
        <S.Formulario>
            <div>
                <form>
                    <h1>Entre em contato comigo!</h1>
                    
                    <label for="name">Digite seu nome : 
                    <input type="text" placeholder="Nome completo" required />
                    </label>

                    <label for="name">Digite seu e-mail : 
                    <input type="text" placeholder="Digite seu e-mail" required />
                    </label>

                    <label for="name">Assunto : 
                    <input type="text" placeholder="Assunto" required />
                    </label>

                    <button>
                        <a href="mailto:agathacrissantos6@gmail.com">Enviar</a>
                    </button>
                </form>
            </div>
        </S.Formulario>
    )
}