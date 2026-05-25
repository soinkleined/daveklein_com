---
layout: page
title: "Blog"
permalink: /blog/
---

<div class="container py-5">
    <div class="row">
        <div class="col-lg-10 offset-lg-1">
            {% for post in site.posts %}
                <div class="row mb-5 align-items-center">
                    <div class="col-md-3">
                        <a href="{{ post.url | relative_url }}">
                            <img src="{{ post.image | default: '/img/portfolio/1.jpg' | relative_url }}" class="img-fluid rounded" alt="{{ post.title }}">
                        </a>
                    </div>
                    <div class="col-md-9">
                        <p class="text-muted mb-1">{{ post.date | date: "%B %d, %Y" }}</p>
                        <h2 class="mb-2"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
                        {% if post.categories %}
                            <div class="mb-3">
                                {% for category in post.categories %}
                                    <a href="{{ '/categories/' | relative_url }}#{{ category | slugify }}" class="badge bg-primary text-decoration-none">{{ category }}</a>
                                {% endfor %}
                            </div>
                        {% endif %}
                        <p>{{ post.description }}</p>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>
