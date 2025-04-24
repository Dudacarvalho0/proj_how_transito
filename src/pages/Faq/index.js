import React, { useState } from 'react';
import './index.css'; 

const faqData = [
      {
    pergunta: 'Quais são os requisitos para contratar seus serviços?',
    resposta: 'Para contratar meus serviços, basta entrar em contato via WhatsApp, enviar as informações necessárias sobre o caso e agendar uma consulta.',
  },
  {
    pergunta: 'Como posso pagar pelos serviços?',
    resposta: 'O pagamento pode ser feito por transferência bancária, PIX ou outro método combinado durante o atendimento.',
  },
  {
    pergunta: 'Você atende em todo o Brasil?',
    resposta: 'Sim, motoristas de todo o Brasil, pois os serviços são oferecidos de forma digital e remota.',
  },
  {
    pergunta: 'Como posso entrar em contato?',
    resposta: 'Você pode entrar em contato através do WhatsApp disponível no site ou diretamente no número [554796441870].', 
  },
  {
    pergunta: 'O que devo fazer se recebi uma multa de trânsito?',
    resposta: 'Entre em contato para que seja analisado as circunstâncias e, caso possível, realizar a defesa da multa de forma eficaz.',
  },
  {
    pergunta: 'Qual é o custo para defender uma multa?',
    resposta: 'Os custos variam dependendo do tipo de infração e da complexidade do caso. Solicite um orçamento personalizado pelo WhatsApp.',
  },
  {
    pergunta: 'Quanto tempo leva para receber uma resposta sobre meu caso?',
    resposta: 'O prazo de análise inicial é de até 2 dias úteis após o envio de toda a documentação necessária. Em seguida, você será orientado sobre os próximos passos.',
  },
  {
    pergunta: 'Quais documentos preciso enviar para iniciar o atendimento?',
    resposta: 'Normalmente, é necessário enviar a notificação da infração, CNH, CRLV do veículo e, em alguns casos, um breve relato do ocorrido. A lista completa será informada durante o atendimento.',
  },
  {
    pergunta: 'Você faze acompanhamento de processos depois da defesa enviada?',
    resposta: 'Sim, é acompanhado o andamento do processo e mantido o cliente informado sobre qualquer atualização relevante.',
  },
  {
    pergunta: 'Posso enviar minha documentação pelo WhatsApp?',
    resposta: 'Sim. Todo o processo pode ser feito digitalmente pelo WhatsApp, de forma prática e segura.',
  },
  {
    pergunta: 'Você garante o cancelamento da multa?',
    resposta: 'Não. A atuação é técnica e fundamentada em argumentos legais, mas a decisão final depende do órgão julgador.',
  },
  {
    pergunta: 'O atendimento é feito apenas por você?',
    resposta: 'Sim, atendo de forma personalizada cada cliente, prestando um serviço individualizado, sem intermediários.',
  },
  {
    pergunta: 'O que diferencia seu serviço de outras consultorias de trânsito?',
    resposta: 'Atendimento individualizado, experiência prática, argumentação jurídica fundamentada e acompanhamento completo do processo.',
  },
  {
    pergunta: 'Você trabalha com recurso de suspensão da CNH?',
    resposta: 'Sim, com recursos contra suspensão e cassação da CNH, além de outros processos administrativos de trânsito.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAnswer = (index) => {
    const originalIndex = faqData.findIndex(item => item.pergunta === filteredFaqs[index].pergunta);
    setOpenIndex(openIndex === originalIndex ? null : originalIndex);
  };
  const filteredFaqs = faqData.filter((item) =>
    item.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.resposta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='corpo '>
      <div className="faq-container">
        <h2>FAQ - Perguntas Frequentes</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquise sua dúvida..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => {
             
              const originalIndex = faqData.findIndex(origItem => origItem.pergunta === item.pergunta);
              return (
                <div key={originalIndex} className="faq-item">
                  <div className="faq-question" onClick={() => toggleAnswer(index)}>
                    <h4>{item.pergunta}</h4>
                  
                    <span>{openIndex === originalIndex ? '-' : '+'}</span>
                  </div>
                  {openIndex === originalIndex && (
                    <div className="faq-answer">
                      <p>{item.resposta}</p>
                    </div>
                  )}
                </div>
              )
            })
          ) : (
            <p className="no-results">Nenhuma pergunta encontrada.</p> 
          )}
        </div>
      </div>
    </div>
  );
}