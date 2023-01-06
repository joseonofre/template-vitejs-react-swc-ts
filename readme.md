Projeto base para construção de site utilizando o **Vite, Tailwindcss, React Router, Sass e React lazy**

---
## **- Inicial**
**Instalar Vite**
- [ ] :books: `yarn create vite my-app --template react-swc-ts`

#### **.gitignore**

- [ ] :heavy_plus_sign: adicionar linha `*.webp:Zone.Identifier`


#### **index.html**

- [ ] :pencil2: Alterar `lang="en"`  para `lang="pt-BR"`
- [ ] :pencil2: Alterar `<title>Nome</title>`
- [ ] :pencil2: Adicionar description `<meta name="description" content="Descrição aqui">`
- [ ] :pencil2: Alterar favicon
- [ ] [:eyes: Visualizar arquivo com LayoutContext adicionado :link:](https://github.com/joseonofre/todo-vitejs-projects/blob/main/index.html){target="_blank"}



#### **main.tsx**
- [ ] :boom: Apagar `import './index.css'`
- [ ] Importar :arrow_down: `import './assets/styles/main.scss';`
- [ ] :eyes: Visualizar arquivo com LayoutContext adicionado :link:


#### Apagar arquivos 
- [ ] :boom: `./App.tsx`
- [ ] :boom: `./App.css`
- [ ] :boom: `./index.css`
- [ ] :boom: `./assets/react.svg`
- [ ] :boom: `./public/vite.svg`

---
## **- Intalação de pacotes** 

#### **Essenciais**

- [ ] :books: `yarn add vite-plugin-svgr` -- https://www.npmjs.com/package/vite-plugin-svgr
- [ ] :books: Instalar tailsiwind css -- https://tailwindcss.com/docs/installation/framework-guides
- [ ] :pencil2: Customizar tailwind.config.cjs  :eyes: Visualizar :link:
- [ ] :books: `yarn add react-router-dom`  -- https://reactrouter.com/en/main
- [ ] :books: `yarn add -D sass`

#### **Opcionais**

- [ ] :books: `yarn add aos@next` -- https://michalsnik.github.io/aos/
- [ ] :books: `yarn add animejs` -- https://animejs.com/documentation/#motionPath
- [ ] :books: `yarn add @headlessui/react` -- https://headlessui.com/react/menu
- [ ] :books: `yarn add daisyui`  --  https://daisyui.com/

---

## **- Criar estrutura**

- [ ] :page_with_curl: Criar arquivo `/src/routes.tsx` :eyes: Visualizar :link:
- [ ] :file_folder: Criar pasta `/src/contexts`
- [ ] -- :page_with_curl: Criar arquivo `/src/contexts/UseLayout.tsx` :eyes: Visualizar  :link:
- [ ] :file_folder: Criar pasta `/src/componets`
- [ ] -- :page_with_curl: Criar arquivo `/src/components/HeaderMain.tsx` :eyes: Visualizar :link:
- [ ] -- :page_with_curl: Criar arquivo `/src/components/FooterMain.tsx` :eyes: Visualizar :link:
- [ ] :file_folder: Criar pasta `/src/layouts`
- [ ] -- :page_with_curl: Criar arquivo `/src/layouts/LayoutMain.tsx` :eyes: Visualizar :link:
- [ ] :file_folder: Criar pasta `/src/pages`
- [ ] -- :file_folder: Criar pasta `/src/pages/Home`
- [ ] -- -- :file_folder: Criar pasta `/src/pages/Home/Home.tsx` :eyes: Visualizar :link:
- [ ] :file_folder: Criar pasta `/src/assets/images`
- [ ] :file_folder: Criar pasta `/src/assets/styles`
- [ ] -- :page_with_curl: Criar arquivo `/src/assets/styles/_tailwind.scss` :eyes: Visualizar :link:
- [ ] -- :page_with_curl: Criar arquivo `/src/assets/styles/_fonts.scss` :eyes: Visualizar :link:
- [ ] -- :page_with_curl: Criar arquivo `/src/assets/styles/_global.scss` :eyes: Visualizar :link:
- [ ] -- :page_with_curl: Criar arquivo `/src/assets/styles/main.scss` :eyes: Visualizar :link:
- [ ] :arrow_down: Importar arquivos no  `/src/assets/styles/main.scss` :eyes: Visualizar :link:
