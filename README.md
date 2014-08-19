# Savely

### É CoC - Convention over configuration

Insere automaticamente arquivos de css e javascript se copiados dentro do diretorio de assets.
ie: copiar arquivos .css e .js para a pasta publica é automaticamente 
escrito nos arquivos de layout.


### Generators

Exemplos:
sails generate model users
sails generate model messages
sails generate controller messages
sails generate controller main

E geradores de açoes específicas

sails generate controller main index show

### ORM
Possui uma ORM propria [Waterline](https://github.com/balderdashy/waterline)
ORM se personaliza de acordo com os atributos

Para o Model ```User```

```js
attribtues: {
	name: 'STRING'
	Urls: 'INT`	
}
```

Temos os seguintes métodos automaticamente
ie: findByUser(), findOneByUser() 

ORM já adicona metadados de criacao.
```created_at``` e ```updated_at```

### Filtros
Possui Filtros,  before/after
Crie um filtro customizado no api/policies, e depois configure o config/policies
dizendo em quais controllers e actions aquele filtro se aplica.



#Console
Possui console

```sh
$sh: sails console
```

Partials através do
<% include partial_name %>