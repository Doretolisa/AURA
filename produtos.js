const data = [
    {
        title: "Base Cremosa",
        src: "./produtos/Base.png",
        descricao: "consistência hidratante, indicada para todos os tipos de pele.",
        preco: "R$44,99",
        parcelamento: "OU 10X DE R$ 4,49",
    },
    {
        title: "Blush Bastão",
        src: "./produtos/Blush em bastão.png",
        descricao: "enriquecido com esqualano e óleo de argan, oferece emoliência e hidratação à pele.",
        preco: "R$49,99",
        parcelamento: "OU 10X DE R$ 4,99",
    },
    {
        title: "Batom Mate",
        src: "./produtos/batom-mate.png",
        descricao: "aspecto mais sequinho, textura aveludada com efeito hidratante, secagem rápida.",
        preco: "R$44,99",
        parcelamento: "OU 10X DE R$ 4,99",
    },
    {
        title: "Kit Summer",
        src: "./produtos/Kit summer.png",
        descricao: "protetor capilar, hidratante pós-sol, protetor solar, hidratante de rosto, óleo capilar.",
        preco: "R$159,99",
        parcelamento: "OU 10X DE R$ 15,99",
    },
    {
        title: "Delineador Líquido",
        src: "./produtos/Delineador liquido.png",
        descricao: "fácil aplicação, longa duração e fórmula à prova d'água.",
        preco: "R$39,99",
        parcelamento: "OU 10X DE R$ 3,99",
    },
    {
        title: "Máscara para Cílios",
        src: "./produtos/Mascara cilios.png",
        descricao: "alongamento instantâneo com fórmula resistente à água.",
        preco: "R$59,99",
        parcelamento: "OU 10X DE R$ 5,99",
    },
    {
        title: "Pó Compacto Translúcido",
        src: "./produtos/Po compacto translucido.png",
        descricao: "controla a oleosidade sem pesar na maquiagem.",
        preco: "R$54,99",
        parcelamento: "OU 10X DE R$ 5,49",
    },
    {
        title: "Iluminador Liquido",
        src: "./produtos/Iluminador liquido.png",
        descricao: "fórmula leve e cintilante, ideal para um brilho natural.",
        preco: "R$69,99",
        parcelamento: "OU 10X DE R$ 6,99",
    },
    {
        title: "Paleta de Sombras Nude",
        src: "./produtos/Paleta sombras nude.png",
        descricao: "tons versáteis para looks diurnos e noturnos.",
        preco: "R$89,99",
        parcelamento: "OU 10X DE R$ 8,99",
    },
    {
        title: "Corretivo Liquido",
        src: "./produtos/Corretivo liquido.png",
        descricao: "cobertura média a alta, ideal para olheiras e manchas.",
        preco: "R$39,99",
        parcelamento: "OU 10X DE R$ 3,99",
    },
    {
        title: "Primer Facial",
        src: "./produtos/Primer facial.png",
        descricao: "prepara a pele para a maquiagem, reduzindo poros e linhas finas.",
        preco: "R$49,99",
        parcelamento: "OU 10X DE R$ 4,99",
    },
    {
        title: "Hidratante Labial",
        src: "./produtos/Hidratante labial.png",
        descricao: "enriquecido com manteiga de karité, hidratação intensa.",
        preco: "R$24,99",
        parcelamento: "OU 10X DE R$ 2,49",
    },
    {
        title: "Kit Pincéis Profissionais",
        src: "./produtos/Kit pinceis.png",
        descricao: "conjunto completo para aplicação perfeita de maquiagem.",
        preco: "R$129,99",
        parcelamento: "OU 10X DE R$ 12,99",
    },
    {
        title: "Esponja de Maquiagem",
        src: "./produtos/Esponja maquiagem.png",
        descricao: "textura macia, ideal para aplicação uniforme de bases e corretivos.",
        preco: "R$19,99",
        parcelamento: "OU 10X DE R$ 1,99",
    },
    {
        title: "Sérum Anti-Idade",
        src: "./produtos/Serum antiidade.png",
        descricao: "formulado com ácido hialurônico, melhora a elasticidade da pele.",
        preco: "R$99,99",
        parcelamento: "OU 10X DE R$ 9,99",
    },
    {
        title: "Fixador de Maquiagem",
        src: "./produtos/Fixador maquiagem.png",
        descricao: "prolonga a duração da maquiagem por até 12 horas.",
        preco: "R$59,99",
        parcelamento: "OU 10X DE R$ 5,99",
    },
    {
        title: "Tônico Facial",
        src: "./produtos/Tonico facial.png",
        descricao: "remove resíduos e prepara a pele para a hidratação.",
        preco: "R$34,99",
        parcelamento: "OU 10X DE R$ 3,49",
    },
    {
        title: "Óleo de Argan",
        src: "./produtos/Oleo argan.png",
        descricao: "hidratação profunda para cabelos secos e danificados.",
        preco: "R$79,99",
        parcelamento: "OU 10X DE R$ 7,99",
    },
    {
        title: "Creme para Mãos",
        src: "./produtos/Creme para maos.png",
        descricao: "hidrata e protege a pele com rápida absorção.",
        preco: "R$29,99",
        parcelamento: "OU 10X DE R$ 2,99",
    },
    {
        title: "Removedor de Maquiagem",
        src: "./produtos/Removedor maquiagem.png",
        descricao: "fórmula suave que remove até maquiagem à prova d'água.",
        preco: "R$49,99",
        parcelamento: "OU 10X DE R$ 4,99",
    },
];


const filteredData = [...data]

const cardContainer = document.querySelector(".varios-produtos"); 
const searchInput = document.querySelector("#searchInput");

const displayData = data => {
     cardContainer.innerHTML = "";  // Limpa os cards anteriores
     data.forEach(e => {
         cardContainer.innerHTML += `
    <div class="card-produto">
            <img src="${e.src}" alt="Imagem do ${e.title}" class="produto-imagem">
            <h5 class="name">${e.title}</h5>
            <p class="descricao">${e.descricao}</p>
            <h5 class="preco">${e.preco}</h5>
            <h6 class="parcelas-descricao">${e.parcelamento}</h6>
            <div class="botoes">
                <button class="btn-comprar">Comprar</button>
                <button class="btn-adicionar"><i class="fa-solid fa-cart-shopping" style="color: #ffffff; position: inherit;"></i></button>
            </div> 
    </div>`
         })
}

// Função de pesquisa
searchInput.addEventListener("keyup", (e) => {
    const search = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) || i.descricao.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);
})

window.addEventListener("load", displayData.bind(null,data))

// <div class="card-body card">
//          <img class="card-img-top" src="${e.src}" alt="imagem do ${e.title}" >          
//          <h5 class="card-subtitle mb-2 text-muted">${e.title}</h5>
//                  <p class="card-text">${e.descricao}</p>
//                  <h5 class="card-title">${e.preco}</h5>
//                  <h6 class="card-subtitle mb-2 text-muted">${e.parcelamento}</h6>
//                </div>

