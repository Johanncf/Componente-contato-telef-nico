import './App.css';
import Contato from './components/Contato';

function App() {
  return (
    <div className='container'>
      <Contato foto="https://citacoes.in/media/authors/mark-zuckerberg.jpg" nome="Zuckerberg" descricao="Motherfucker bilionaire." />
      <Contato foto="https://imagens.brasil.elpais.com/resizer/5DO82rz-Fg0gx_XUcPN4tiQ4D5c=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/F34R4EEJ2RG3DKUGSVKBLC2GXA.jpeg" nome="Bill Gates" descricao="Another motherfucker bilionaire." />
      <Contato foto="https://veja.abril.com.br/wp-content/uploads/2016/05/marissa-mayer-google-original6.jpeg" nome="Melissa Mayer" descricao="A female motherfucker bilionaire." />
    </div>
  );
}

export default App;
