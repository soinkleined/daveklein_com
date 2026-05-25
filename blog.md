---
layout: page
title: "Blog"
permalink: /blog/
---

<div class="container py-5">
    {% assign grouped_posts = site.posts | group_by: "categories" | sort: "name" %}
    
    {% for group in grouped_posts %}
        <h2 id="{{ group.name | slugify }}" class="mb-4">{{ group.name }}</h2>
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                {% for post in group.items %}
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
                                        <span class="badge bg-primary me-1">{{ category }}</span>
                                    {% endfor %}
                                </div>
                            {% endif %}
                            
                            <p>{{ post.description }}</p>
                        </div>
                    </div>
                {% endfor %}
            </div>
        </div>
    {% endfor %}
</div>
