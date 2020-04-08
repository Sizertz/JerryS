---
title: FREE STUFF!!!
---
# {{ page.title }}

{% for stuff in site.free_stuff %}
____
## {{ stuff.title}}
{{ stuff.content }}
    {% if stuff.file %}
[{{ stuff.file }}](./free_stuff/files/{{ stuff.file }})
    {% endif %}
    {% if stuff.files %}
        {% for y in stuff.files %}
        {% assign x = y %}
* [{{ x.path }}](./free_stuff/files/{{ x.path }}) - {{ x.description }}
        {% endfor %}
    {% endif %}
{% endfor %}