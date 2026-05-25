---
layout: page
title: "Categories"
permalink: /categories/
---

<div class="container py-5">
    {% for category in site.categories %}
      <h2 id="{{ category | first | slugify }}" class="mb-4">{{ category | first }}</h2>
      {% for post in category.last %}
        <div class="row mb-5 align-items-center">
            <div class="col-md-3">
                <a href="{{ post.url | relative_url }}">
                    <img src="{{ post.image | default: '/img/portfolio/1.jpg' | relative_url }}" class="img-fluid rounded" alt="{{ post.title }}">
                </a>
            </div>
            <div class="col-md-9">
                <p class="text-muted mb-1">{{ post.date | date: "%B %d, %Y" }}</p>
                <h3 class="mb-2"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                <div class="mb-3">
                    <span class="badge bg-secondary">{{ category | first }}</span>
                </div>
                <p>{{ post.description }}</p>
            </div>
        </div>
      {% endfor %}
    {% endfor %}
</div>
