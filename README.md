# trabalho Final web2
1. Criar Estrutura de Pastas
   1. criar pasta raiz com o nome de jsecommerce
   2. adicionar pasta de frontend e backend
   3. criar pasta /src e outra com o nome de /public na pasta frontend
   4. crie index.html com o título jsecommerce em /public
   5. TERMINAL: execute npm init na pasta frontend
   6. TERMINAL: npm install -D live-server
   7. JSON: adicione o comando start como live-server src --verbose
   8. TERMINAL: execute npm start
   9. verificar o resultado

2. Design Website
   1. CSS: criar style.css
   2. HTML: vincule style.css a index.html
   3. HTML: criar div.grid-container
   4. HTML: criar header, main e footer
   5. CSS: estilizar html, body
   6. CSS: estilizar .grid-container, header, main e footer

3. Criar tela inicial estática
   1. HTML: criar ul.products
   2. HTML: criar li
   3. HTML: criar div.product
   4. HTML: adicionar .product-image, .product-name, .product-brand, .product-price
   5. CSS: estilIZAR ul.products e divs internos
   6. HTML: duplique 2 vezes para mostrar 3 produtos

4. Renderizar tela inicial dinâmica
   1. JS: criar data.js
   2. JS: exporte uma variedade de 6 produtos
   3. JS: criar screens/HomeScreen.js
   4. JS: exportar HomeScreen como um objeto com o método render()
   5. JS: implementar render()
   6. JS: import data.js
   7. JS: retornar produtos mapeados para as li's dentro da ul
   8. JS: criar app.js
   9. HTML: vincule-o a index.html como módulo
   10. HTML: definir id principal para main-container
   11. JS: criar função de router()
   12. JS: defina main_container innerHTML para HomeScreen.render ()
   13. JS: definir o evento load do objeto window para a função do router()

5. Construir roteador de URL
   1. JS: criar rotas como rota: objeto de tela para tela inicial
   2. JS: criar utils.js
   3. JS: export parseRequestURL()
   4. JS: definir url como endereço hash dividido por barra
   5. JS: recurso de retorno, id e verbo do url
   6. JS: atualizar router()
   7. JS: definir a solicitação como parseRequestURL()
   8. JS: construir parsedUrl e comparar com rotas
   9. JS: se a rota existe, renderiza-a, senão renderiza Error404
   10. JS: criar telas / Error404.js e renderizar mensagem de erro

6. Criar servidor Node.JS
   1. Criar a pasta jsecommerce/backend
   2. TERMINAL: cd backend
   3. TERMINAL: execute npm init na pasta raiz jsecommerce/backend
   4. TERMINAL: npm install express
   5. criar backend/server.js
   6. JSON: adicione o comando start como node server.js em package.json
   7. JS: require express
   8. mover data.js de /frontend para /backend
   9. JS: criar rota para /api/produtcs
   10. JS: retornar produtcs em data.js
   11. TERMINAL: execute npm start

7. Carregar produtos do back-end
   1. JS: editar HomeScreen.js
   2. tornar a renderização de HomeScreen.js assíncrona
   3. buscar produtos de '/api/produtcs' em render()
   4. tornar o route() assíncrono e aguardar a chamada HomeScreen.render()
   5. usar cors no backend
   6. verifique o resultado

8. Adicionar Webpack
   1. TERMINAL: cd frontend
   2. TERMINAL: npm install -D webpack webpack-cli webpack-dev-server
   3. TERMINAL: npm uninstall live-server
   4. JSON: "start": "webpack serve --mode development --open"
   5. mover index.html, style.css e imagens para a pasta frontend/public
   6. renomear app.js para index.js
   7. HTML: atualizar index.html
   8. HTML: adicione o <script src="main.js" defer></script>
   9. TERMINAL: npm start
   10. TERMINAL: npm install axios
   11. JS: alterar fetch para axios na HomeScreen.js

9. Instalação Babel para usar a sintaxe do ES6
   1.  TERMINAL: npm install -D babel core cli node preset-env
   2.  Crie .babelrc e configure as predefinições para @babel/preset-env
   3.  TERMIAL: npm install -D nodemon
   4.  JSON: Defna o script "start": "nodemon --watch --exec babel-node server.js"
   5.  JS: converter *require* para *import* em server.js
   6.  TERMINAL: npm start
