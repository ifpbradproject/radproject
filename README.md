# Savely

### É CoC - Convention over configuration

### Generators

```sh
$ sails generate model users
```

```sh
$ sails generate model messages
```

```sh
$ sails generate controller messages
```

```sh
$ sails generate controller main
```

```sh
$ sails generate controller main index show
```

### ORM e Models
Possui uma ORM própria [Waterline](https://github.com/balderdashy/waterline)

ORM se personaliza de acordo com os atributos

i.e: Para o Model ```Users```

```js
attribtues: {
	name: 'STRING'
	urldId: 'INT'
}
```

Temos os seguintes métodos automaticamente
ie: Users.findByUrlId(), Users.findOneByUrlId() 

ORM já adicona metadados de criaçao.
```created_at``` e ```updated_at```

### Filtros
Possui Filtros,  before/after

Crie um filtro customizado no api/policies, e depois configure o config/policies
dizendo em quais controllers e actions aquele filtro se aplica.


#Console

```sh
$ sails console
```

#Layout e Partials

Insere automaticamente arquivos de css e javascript se copiados para dentro do diretório de assets.
ie: copiar arquivos .css e .js para a pasta publica é automaticamente 
escrito nos arquivos de layout.

Arquivo de layout é por default ```layout.ejs```, mas pode ser alterado nos arquivos de 
consiguraçao. E é opcional.

partials através do ```<% include partial_name %>```