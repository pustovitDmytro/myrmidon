{{#functions}}
## {{this.name}}

{{this.description}}

[Source]({{@root.repository.url}}/blob/{{@root.commit}}/{{this.file}}#L{{this.position}})

### Parameters
{{#this.params}}
    - `{{name}}` **any** {{description}}
{{/this.params}}

### Returns

Returns **any** {{this.returns.description}}

{{/functions}}