import {useForm} from 'react-hook-form'
import Header from "../../components/header";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import './style.css'

const validationPost = yup.object().shape({
  title: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menos de 40 caracteres"), 
  date: yup.date().required("A data é obrigatória"), 
  description: yup.string().required("A descrição é obrigatória").max(150, "A descrição precisa ter menos de 150 caracteres"),
  category: yup.string().required("A categoria é obrigatório").max(20, "O conteúdo precisa ter menos de 500 caracteres")
})

export default function Post(){

  const navigate = useNavigate();

  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validationPost)
  })
  const addPost = data => axios.post("https://api-todo-six.vercel.app/todo", data)
  .then(()=> {
    console.log("Deu certo")
    navigate("/")    
  })
  .catch(()=>{
    console.log("Deu errado")
  })  
  
  return(
        <div>
          <Header/>

          <main>
            <div className='card-post'>
              <h1>Criar postagem</h1>
              <div className='line-post'></div>
              <div className='card-body-post'>

                <form onSubmit={handleSubmit(addPost)}>

                  <div className='fields'>
                    <label>Título</label>
                    <input type="text" name='title' {...register('title')}/>
                    <span className='error-message'>{errors.title?.message}</span>
                  </div>

                  <div className='fields'>
                    <label>Data</label>
                    <input type="date" name='date' {...register('date')}/>
                    <span className='error-message'>{errors.date?.message}</span>
                  </div>
                  

                  <div className='fields'>
                    <label>Descrição</label>
                    <textarea type='text' name='description' {...register('description')}></textarea> 
                    <span className='error-message'>{errors.description?.message}</span>                   
                  </div>

                  <div className='fields'>
                    <label>Categoria</label>
                    <input type="text" name='category' {...register('category')}/>
                    <span className='error-message'>{errors.category?.message}</span>
                  </div>

                  <div className='btn-post'>
                    <button type='submit'>Enviar</button>
                  </div>
                </form>
                
              </div>
            </div>
          </main>
        </div>
    )
}

