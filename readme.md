**Projeto base para construção de site utilizando o Vite**

---
## **- Inicial**
**Instalar Vite**
- [ ] :books: `yarn create vite my-app --template react-swc-ts`

#### **.gitignore**

- [ ] :heavy_plus_sign: adicionar linha `*.webp:Zone.Identifier`


#### **index.html**

- [ ] :pencil2: Alterar `lang="en"`  para `lang="pt-BR"`
- [ ] :pencil2: Alterar title
- [ ] :pencil2: Alterar favicon
- [ ] :boom: Apagar arquivo `./public/vite.svg`


#### **main.tsx**

- [ ] :boom: Apagar `import './index.css'`
- [ ] :boom: Apagar arquivo `./index.css`
- [ ] :heavy_plus_sign: adicionar linha de importação  `import './assets/styles/main.scss';`


#### **App.tsx**

- [ ] :pencil2: Limpar todo arquivo
- [ ] :boom: Apagar arquivo `./App.css`
- [ ] :boom: Apagar arquivo `./assets/react.svg`

---
## **- Intalação de pacotes** 

#### **Essenciais**

- [ ] :books: `yarn add vite-plugin-svgr`  -- https://www.npmjs.com/package/vite-plugin-svgr
- [ ] :books: Instalar tailsiwind css -- https://tailwindcss.com/docs/installation/framework-guides
- [ ] :books: `yarn add react-router-dom`  -- https://reactrouter.com/en/main

#### **Opcionais**

- [ ] :books: `yarn add aos@next` -- https://michalsnik.github.io/aos/
- [ ] :books: `yarn add animejs` -- https://animejs.com/documentation/#motionPath
- [ ] :books: `yarn add @headlessui/react` -- https://headlessui.com/react/menu
- [ ] :books: `yarn add daisyui`  --  https://daisyui.com/

---

## **- Criar estrutura**

- [ ] :file_folder: Criar pasta `/src/componets`
- [ ] -- :page_with_curl: Criar arquivo `/src/components/HeaderMain.tsx`
- [ ] -- :page_with_curl: Criar arquivo `/src/components/FooterMain.tsx`
- [ ] :file_folder: Criar pasta `/src/layouts`
- [ ] -- :page_with_curl: Criar arquivo `/src/layouts/LayoutMain.tsx`
- [ ] :file_folder: Criar pasta `/src/pages`
- [ ] -- :file_folder: Criar pasta `/src/pages/Home`
- [ ] -- -- :file_folder: Criar pasta `/src/pages/Home/Home.tsx`
- [ ] :file_folder: Criar pasta `/src/assets/images`
- [ ] :file_folder: Criar pasta `/src/assets/styles`
- [ ] :page_with_curl: Criar arquivo `/src/assets/styles/_tailwind.scss`
- [ ] :page_with_curl: Criar arquivo `/src/assets/styles/_fonts.scss`
- [ ] :page_with_curl: Criar arquivo `/src/assets/styles/_global.scss`
- [ ] :page_with_curl: Criar arquivo `/src/assets/styles/main.scss`
- [ ] :arrow_down: Importar arquivos no  `/src/assets/styles/main.scss`
~~~scss
@import "./tailwind";
@import "./fonts";
@import "./global";
~~~
