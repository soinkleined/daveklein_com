---
layout: page
title: "Blog"
permalink: /blog/
---

<div class="container py-5">
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            {% for post in site.posts %}
                <div class="mb-5">
                    <p class="text-muted mb-1">{{ post.date | date: "%B %d, %Y" }}</p>
                    <h2 class="mb-2"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
                    {% if post.categories %}
                        <div class="mb-3">
                            {% for category in post.categories %}
                                <a href="{{ '/categories/' | relative_url }}#{{ category | slugify }}" class="badge bg-primary text-decoration-none">{{ category }}</a>
                            {% endfor %}
                        </div>
                    {% endif %}
                </div>
            {% endfor %}
        </div>
    </div>
</div>
